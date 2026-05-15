// ══ LARDISH CHARTS — MAIN APP LOGIC ════════════════════════════════
(function() {
  const D = window.LC;

  // ── State
  let period = 'weekly', wkIdx = D.WK_DATES.length - 1, moIdx = D.MO_KEYS.length - 1;
  let currentView = 'charts', prevView = 'charts';
  let detailItem = null; // { type:'song'|'artist', title, artist, name }

  // ── Cover art cache
  const coverCache = {};
  async function getCover(title, artist) {
    const key = (title + '|' + (artist || '')).toLowerCase();
    if (coverCache[key] !== undefined) return coverCache[key];
    coverCache[key] = null;
    try {
      const q = encodeURIComponent(((artist || '') + ' ' + title).trim());
      const r = await fetch('https://itunes.apple.com/search?term=' + q + '&entity=song&limit=5&country=us');
      const d = await r.json();
      if (d.results && d.results.length) {
        const hit = d.results.find(x => x.artworkUrl100) || d.results[0];
        if (hit && hit.artworkUrl100)
          coverCache[key] = hit.artworkUrl100.replace('100x100bb', '300x300bb');
      }
    } catch(e) {}
    return coverCache[key];
  }

  // ── Helpers
  function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function chgHtml(c) {
    if (!c || c === '=') return '<span class="chg-eq">–</span>';
    if (c === 'NEW')     return '<span class="chg-new">NEW</span>';
    const n = parseInt(c);
    if (!isNaN(n) && n > 0) return `<span class="chg-up">▲${Math.abs(n)}</span>`;
    if (!isNaN(n) && n < 0) return `<span class="chg-down">▼${Math.abs(n)}</span>`;
    if (c[0] === '+')    return `<span class="chg-up">▲${c.slice(1)}</span>`;
    if (c[0] === '-')    return `<span class="chg-down">▼${c.slice(1)}</span>`;
    return `<span class="chg-eq">${esc(c)}</span>`;
  }

  // ── Views
  function showView(v) {
    prevView = currentView; currentView = v;
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.getElementById('view-' + v).classList.add('active');
    document.querySelectorAll('.nav-link').forEach((l, i) => l.classList.toggle('active', i === (v === 'charts' ? 0 : 1)));
    const isChart = v === 'charts';
    document.getElementById('hero-block').style.display = isChart ? '' : 'none';
    if (v === 'browse') renderBrowse();
  }
  window.goBack = () => showView(prevView === 'browse' ? 'browse' : 'charts');
  window.showView = showView;

  // ── Period controls
  window.switchPeriod = function(p) {
    period = p;
    document.getElementById('tab-weekly').classList.toggle('active', p === 'weekly');
    document.getElementById('tab-monthly').classList.toggle('active', p === 'monthly');
      const artistsSection = document.getElementById('artists-list').parentElement;
    if (p === 'weekly') {
    artistsSection.classList.add('hidden');
    } else {
    artistsSection.classList.remove('hidden');
    };
      
    updatePeriodLabel(); renderCharts();
  };
  window.navPeriod = function(d) {
    if (period === 'weekly') wkIdx = Math.max(0, Math.min(D.WK_DATES.length-1, wkIdx+d));
    else moIdx = Math.max(0, Math.min(D.MO_KEYS.length-1, moIdx+d));
    updatePeriodLabel(); renderCharts();
  };
  function updatePeriodLabel() {
    const el = document.getElementById('period-label');
    const prev = document.getElementById('btn-prev');
    const next = document.getElementById('btn-next');
    if (period === 'weekly') {
      el.innerHTML = `<strong>${D.WK_DATES[wkIdx]}</strong><span>Week ${wkIdx+1} of ${D.WK_DATES.length}</span>`;
      prev.disabled = wkIdx === 0; next.disabled = wkIdx === D.WK_DATES.length - 1;
    } else {
      el.innerHTML = `<strong>${D.MO_KEYS[moIdx]}</strong><span>Monthly Chart</span>`;
      prev.disabled = moIdx === 0; next.disabled = moIdx === D.MO_KEYS.length - 1;
    }
  }

  // ── Render charts
  function renderCharts() {
    const extra = JSON.parse(localStorage.getItem('lc-admin') || '{"weekly":{"songs":[],"artists":[]},"monthly":{"songs":[],"artists":[]}}');
    if (period === 'weekly') {
      let songs = [...D.WK_SONGS[wkIdx]];
      extra.weekly.songs.forEach(e => { songs = songs.filter(s => s.rank !== e.rank); songs.push(e); });
      songs.sort((a,b) => a.rank - b.rank);
      renderSongs('songs-list', songs);
      document.getElementById('songs-lbl').textContent = `Top ${songs.length}`;
      renderArtists('artists-list', extra.weekly.artists, false);
      document.getElementById('artists-lbl').textContent = extra.weekly.artists.length ? `Top ${extra.weekly.artists.length}` : '—';
    } else {
      const k = D.MO_KEYS[moIdx];
      const songs = [...(D.MO_SONGS[k] || [])];
      const artists = [...(D.MO_ARTISTS[k] || [])];
      renderSongs('songs-list', songs);
      renderArtists('artists-list', artists, true);
      document.getElementById('songs-lbl').textContent = `Top ${songs.length}`;
      document.getElementById('artists-lbl').textContent = `Top ${artists.length}`;
    }
  }

  async function renderSongs(elId, songs) {
    const el = document.getElementById(elId);
    if (!songs || !songs.length) { el.innerHTML = '<div class="empty">♪ No songs charted yet</div>'; return; }
    // KEY FIX: use data-idx attribute instead of onclick string params to avoid apostrophe issues
    el.innerHTML = songs.slice(0, 100).map((s, i) => `
      <div class="chart-row rank-${s.rank}" data-idx="${i}" data-type="song">
        <div class="rank-art-ph" id="art-${elId}-${i}">♪</div>
        <div class="rank-num">${s.rank}</div>
        <div style="min-width:0">
          <div class="item-title">${esc(s.title)}</div>
          <div class="item-sub">${esc(s.artist || '')}</div>
        </div>
        <div>${chgHtml(s.change)}</div>
      </div>`).join('');
    // Attach click handlers using closures — no HTML attribute string passing
    songs.slice(0, 100).forEach((s, i) => {
      const row = el.querySelector(`[data-idx="${i}"][data-type="song"]`);
      if (row) row.addEventListener('click', () => detailSong(s.title, s.artist || ''));
    });
    // Async cover art
    songs.slice(0, 100).forEach((s, i) => {
      getCover(s.title, s.artist || '').then(url => {
        if (!url) return;
        const ph = document.getElementById(`art-${elId}-${i}`);
        if (ph) ph.outerHTML = `<img class="rank-art" src="${url}" alt="" loading="lazy" onerror="this.style.display='none'">`;
      });
    });
  }

  function renderArtists(elId, artists, showPeak) {
    const el = document.getElementById(elId);
    if (!artists || !artists.length) { el.innerHTML = '<div class="empty">★ No artists charted yet</div>'; return; }
    el.innerHTML = artists.slice(0, 10).map((a, i) => `
      <div class="chart-row rank-${a.rank}" data-idx="${i}" data-type="artist">
        <div class="rank-art-ph">★</div>
        <div class="rank-num">${a.rank}</div>
        <div style="min-width:0">
          <div class="item-title">${esc(a.name)}</div>
          <div class="item-sub">${esc(a.genre || '')}</div>
        </div>
        <div>${showPeak && a.peak ? `<span style="font-size:.64rem;color:var(--gold)">Peak #${a.peak}</span>` : chgHtml(a.change)}</div>
      </div>`).join('');
    artists.slice(0, 10).forEach((a, i) => {
      const row = el.querySelector(`[data-idx="${i}"][data-type="artist"]`);
      if (row) row.addEventListener('click', () => detailArtist(a.name));
    });
  }

  // ── Detail views
  function detailSong(title, artist) {
    const hist = [];
    const D = window.LC;

    D.WK_SONGS.forEach((wk, wi) => {
        const e = wk.find(s => s.title === title && (artist ? s.artist === artist : true));
        if (e) {
            hist.push({ 
                period: D.WK_DATES[wi], 
                rank: e.rank, 
                change: e.change || '=',
                wkIdx: wi, 
                isMonth: false 
            });
        }
    });

    const moHist = [];
    D.MO_KEYS.forEach(k => {
        const e = (D.MO_SONGS[k] || []).find(s => s.title === title && (artist ? s.artist === artist : true));
        if (e) moHist.push({ period: k, rank: e.rank, change: e.change || '=', isMonth: true });
    });

    const peak = hist.length ? Math.min(...hist.map(h => h.rank)) : null;
    const globalLastWkIdx = D.WK_DATES.length - 1;

    document.getElementById('det-title').textContent = title;
    document.getElementById('det-sub').textContent = artist || '—';
    
    // Peak en Dorado si es #1
    document.getElementById('det-peak').innerHTML = peak ? 
        `<div class="peak-badge" style="color:${peak === 1 ? 'var(--gold)' : 'inherit'}">Peak Position: #${peak}</div>` : '';
    
    // Semanas en Dorado
    document.getElementById('det-stat').innerHTML = `<span style="color:var(--gold); font-weight:bold">${hist.length}</span> week${hist.length !== 1 ? 's' : ''} on chart`;

    const lastPosEl = document.getElementById('det-last-pos');
    const lastDateEl = document.getElementById('det-last-date');

    if (hist.length > 0) {
        const currentData = hist[hist.length - 1];
        const isStillInChart = currentData.wkIdx === globalLastWkIdx;
        if (isStillInChart) {
            lastPosEl.textContent = currentData.change;
            lastDateEl.textContent = "Currently in Chart";
            if (currentData.change === 'NEW' || currentData.change === 'RE') lastPosEl.style.color = "var(--gold)";
            else if (currentData.change.includes('+')) lastPosEl.style.color = "var(--up)";
            else if (currentData.change.includes('-')) lastPosEl.style.color = "var(--down)";
            else lastPosEl.style.color = "var(--text)";
        } else {
            lastPosEl.textContent = 'OUT';
            lastPosEl.style.color = '#555';
            lastDateEl.textContent = `Last seen: ${currentData.period}`;
        }
    }

    const fullTable = [...hist, ...moHist].reverse();
    document.getElementById('det-rows').innerHTML = fullTable.map(h => `
        <tr class="${h.isMonth ? 'month-row' : ''}">
            <td>${h.period} ${h.isMonth ? '<span style="font-size:0.6rem; color:var(--gold)">(MO)</span>' : ''}</td>
            <td><span class="rank-hl" style="color:${h.rank === 1 ? 'var(--gold)' : h.rank <= 3 ? '#eee' : 'var(--text-dim)'}">#${h.rank}</span></td>
            <td>${chgHtml(h.change)}</td>
        </tr>`).join('');

    const aw = document.getElementById('det-art');
    aw.innerHTML = '<div class="history-cover-ph">♪</div>';
    getCover(title, artist || '').then(url => {
        if (url) aw.innerHTML = `<img class="history-cover" src="${url}">`;
    });

    drawSpark(hist);
    showView('detail');
}

  function detailArtist(name) {
    const D = window.LC;
    const hist = [];
    
    // 1. Recopilar historial con índice temporal
    D.MO_KEYS.forEach((k, idx) => {
      const e = (D.MO_ARTISTS[k] || []).find(a => a.name === name);
      if (e) {
          hist.push({ 
              period: k, 
              rank: e.rank, 
              change: e.change || '', 
              wkIdx: idx 
          });
      }
    });

    if (hist.length === 0) return;

    const peak = Math.min(...hist.map(h => h.rank));
    const lastGlobalMonth = D.MO_KEYS[D.MO_KEYS.length - 1];

    document.getElementById('det-title').textContent = name;
    document.getElementById('det-sub').textContent = 'Artist History';
    
    // UI Dorada para el Peak #1
    document.getElementById('det-peak').innerHTML = `
        <div class="peak-badge" style="color:${peak === 1 ? 'var(--gold)' : 'inherit'}">
            Peak Position: #${peak}
        </div>`;
    
    document.getElementById('det-stat').innerHTML = `
        <span style="color:var(--gold); font-weight:bold">${hist.length}</span> 
        monthly appearance${hist.length !== 1 ? 's' : ''}`;

    const lastPosEl = document.getElementById('det-last-pos');
    const lastDateEl = document.getElementById('det-last-date');
    const lastEntry = hist[hist.length - 1];
    const isStillInChart = lastEntry.period === lastGlobalMonth;

    if (isStillInChart) {
        const currentChange = lastEntry.change || '=';
        lastPosEl.textContent = currentChange;
        lastDateEl.textContent = "Currently in Chart";
        if (currentChange.includes('+')) lastPosEl.style.color = "var(--up)";
        else if (currentChange.includes('-')) lastPosEl.style.color = "var(--down)";
        else if (currentChange === 'RE' || currentChange === 'NEW') lastPosEl.style.color = "var(--gold)";
        else lastPosEl.style.color = "var(--text)";
    } else {
        lastPosEl.textContent = 'OUT';
        lastPosEl.style.color = '#555';
        lastDateEl.textContent = `Last seen: ${lastEntry.period}`;
    }

    // MANDAMOS TRUE PARA INDICAR QUE ES ARTISTA
    drawSpark(hist, true); 

    document.getElementById('det-rows').innerHTML = hist.map(h => `
      <tr>
        <td>${h.period} <span style="font-size:0.6rem; color:var(--gold)">(MO)</span></td>
        <td><span class="rank-hl" style="color:${h.rank === 1 ? 'var(--gold)' : 'inherit'}">#${h.rank}</span></td>
        <td>${chgHtml(h.change)}</td>
      </tr>`).reverse().join('');

    document.getElementById('det-art').innerHTML = '<div class="history-cover-ph">★</div>';
    showView('detail');
}

    
    
  function drawSpark(hist, isArtist = false) {
  const svg = document.getElementById('det-spark');
  if (!hist || hist.length === 0) { svg.innerHTML = ''; return; }

  const W = 800, H = 150, P_TOP = 40, P_BTM = 20, P_SIDE = 50;
  const rankValues = hist.map(h => h.rank);
  
  // Ajustamos el máximo del chart: 10 para artistas, 20 para canciones
  const chartMax = isArtist ? 10 : Math.max(...rankValues, 20); 
  const rng = chartMax - 1;

  const totalPeriods = isArtist ? window.LC.MO_KEYS.length : window.LC.WK_DATES.length; 

  const getX = (idx) => P_SIDE + (idx / (totalPeriods - 1)) * (W - 2 * P_SIDE);
  const getY = (r) => P_TOP + ((r - 1) / rng) * (H - P_TOP - P_BTM);

  // --- LÍNEAS GUÍA PERSONALIZADAS ---
  // Si es artista: 1, 3, 5, 10. Si es canción: 1, 5, 10, 20 + posición actual.
  let guideRanks = isArtist ? [1, 3, 5, 10] : [1, 5, 10, 20];
  const currentRank = rankValues[rankValues.length - 1];
  
  let guides = [...new Set([...guideRanks, currentRank])].sort((a,b) => a-b);
  
  // Filtrar guías que se salgan del rango (por si acaso)
  guides = guides.filter(g => g <= chartMax);

  let guidesHtml = guides.map(pos => {
    const y = getY(pos);
    const isGold = pos === 1;
    const isSolid = guideRanks.includes(pos); // Líneas principales son sólidas
    
    return `
      <line x1="${P_SIDE}" y1="${y}" x2="${W-P_SIDE}" y2="${y}" 
            stroke="${isGold ? 'rgba(201, 168, 76, 0.4)' : 'rgba(255,255,255,0.05)'}" 
            stroke-width="${isGold ? '1.5' : '1'}" 
            ${isSolid ? '' : 'stroke-dasharray="4,4"'}/>
      <text x="${W-P_SIDE + 5}" y="${y + 3}" 
            fill="${isGold ? 'var(--gold)' : '#444'}" 
            font-size="9" font-weight="${isGold ? '700' : '400'}">#${pos}</text>`;
  }).join('');

  // Segmentos para Gaps
  let segments = [];
  let currentSegment = [];
  hist.forEach((h, i) => {
    if (i > 0 && h.wkIdx !== hist[i-1].wkIdx + 1) {
      segments.push(currentSegment);
      currentSegment = [];
    }
    currentSegment.push(h);
  });
  segments.push(currentSegment);

  const linesHtml = segments.map(seg => {
    if (seg.length < 2) return "";
    const pts = seg.map(p => `${getX(p.wkIdx)},${getY(p.rank)}`).join(' ');
    return `<polyline points="${pts}" fill="none" stroke="#C9A84C" stroke-width="2" opacity="0.4" stroke-linejoin="round"/>`;
  }).join('');

  // Nodos con Dorado en #1
  const nodesHtml = hist.map(h => {
    const isGold = h.rank === 1;
    return `
      <g>
        <circle cx="${getX(h.wkIdx)}" cy="${getY(h.rank)}" r="3.5" 
                fill="${isGold ? 'var(--gold)' : '#222'}" 
                stroke="${isGold ? 'var(--gold)' : '#C9A84C'}" />
        <circle cx="${getX(h.wkIdx)}" cy="${getY(h.rank)}" r="1.5" fill="#0D0D0D" />
        <text x="${getX(h.wkIdx)}" y="${getY(h.rank)-12}" 
              fill="${isGold ? 'var(--gold)' : '#666'}" 
              font-size="9" font-weight="${isGold ? '700' : '400'}" text-anchor="middle">#${h.rank}</text>
      </g>`;
  }).join('');

  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.innerHTML = guidesHtml + linesHtml + nodesHtml;
}


  // ── Browse index
  function renderBrowse() {
    // --- Lógica para Canciones (SOLO SEMANAS) ---
    const sm = new Map();
    
    // Solo recorremos el historial semanal para el conteo de longevidad
    D.WK_SONGS.forEach(wk => wk.forEach(s => {
      if (!sm.has(s.title)) {
        sm.set(s.title, { 
          title: s.title, 
          artist: s.artist || '', 
          best: s.rank, 
          count: 0 
        });
      }
      const e = sm.get(s.title);
      e.count++; // Aquí sumamos +1 semana
      if (s.rank < e.best) { 
        e.best = s.rank; 
        if (s.artist) e.artist = s.artist; 
      }
    }));

    // NOTA: Eliminamos el bucle de D.MO_SONGS de aquí para que NO cuente meses como semanas.

    // Ordenar canciones por semanas acumuladas (longevidad)
    const sl = [...sm.values()].sort((a,b) => b.count - a.count);

    const bsEl = document.getElementById('browse-songs');
    bsEl.innerHTML = sl.map((s, i) => `
      <div class="chart-row" data-bidx="${i}" data-btype="song">
        <div class="rank-art-ph">♪</div>
        <div class="rank-num" style="color:var(--text-dim);font-size:1.3rem">${i + 1}</div>
        <div style="min-width:0">
          <div class="item-title">${esc(s.title)}</div>
          <div class="item-sub">${esc(s.artist)||'—'}</div>
        </div>
        <div style="font-size:.68rem;color:var(--gold);font-weight:bold">${s.count}wk</div>
      </div>`).join('');

    sl.forEach((s, i) => {
      const row = bsEl.querySelector(`[data-bidx="${i}"][data-btype="song"]`);
      if (row) row.addEventListener('click', () => detailSong(s.title, s.artist));
    });

    // --- Lógica para Artistas (SOLO MESES) ---
    const am = new Map();
    D.MO_KEYS.forEach(k => (D.MO_ARTISTS[k]||[]).forEach(a => {
      if (!am.has(a.name)) {
        am.set(a.name, { 
          name: a.name, 
          genre: a.genre || '', 
          best: a.rank, 
          count: 0 
        });
      }
      const e = am.get(a.name);
      e.count++; // Aquí sumamos +1 mes
      if (a.rank < e.best) e.best = a.rank;
    }));

    // Ordenar artistas por meses acumulados
    const al = [...am.values()].sort((a,b) => b.count - a.count);

    const baEl = document.getElementById('browse-artists');
    baEl.innerHTML = al.map((a, i) => `
      <div class="chart-row" data-bidx="${i}" data-btype="artist">
        <div class="rank-art-ph">★</div>
        <div class="rank-num" style="color:var(--text-dim);font-size:1.3rem">${i + 1}</div>
        <div style="min-width:0">
          <div class="item-title">${esc(a.name)}</div>
          <div class="item-sub">${esc(a.genre)}</div>
        </div>
        <div style="font-size:.68rem;color:var(--gold);font-weight:bold">${a.count}mo</div>
      </div>`).join('');

    al.forEach((a, i) => {
      const row = baEl.querySelector(`[data-bidx="${i}"][data-btype="artist"]`);
      if (row) row.addEventListener('click', () => detailArtist(a.name));
    });
  }

    
    
    
  // ── Init
  updatePeriodLabel();
  renderCharts();
})();
