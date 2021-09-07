var es_mx = "Choose a word";
onEvent("LaE", "click", function( ) {
  setScreen("LaE_pantalla");
});
onEvent("button2", "click", function( ) {
  open("http://lardcorporation.uk.eu.org/downloads/TraductorRealv1.apk");
});
onEvent("traducir_es_mx", "click", function( ) {
  es_mx = getProperty("lard_es_mx", "text");
  if (es_mx == "Ata, ete, eta") {
    setText("resultado_espanol", "Este, esta");
  }
  if (es_mx == "Caca") {
    setText("resultado_espanol", "Blanco, morado");
  }
  if (es_mx == "Kiki") {
    setText("resultado_espanol", "Amarillo");
  }
  if (es_mx == "Me") {
    setText("resultado_espanol", "Negro");
  }
  if (es_mx == "Zuen") {
    setText("resultado_espanol", "Azul");
  }
  if (es_mx == "Ojo") {
    setText("resultado_espanol", "Rojo");
  }
  if (es_mx == "Aja") {
    setText("resultado_espanol", "Naranja");
  }
  if (es_mx == "Mano") {
    setText("resultado_espanol", "Hermano, mano");
  }
  if (es_mx == "Guegue") {
    setText("resultado_espanol", "Huevo");
  }
  if (es_mx == "Guagua") {
    setText("resultado_espanol", "Globo");
  }
  if (es_mx == "Agua") {
    setText("resultado_espanol", "Agua");
  }
  if (es_mx == "Osa") {
    setText("resultado_espanol", "Rosa");
  }
  if (es_mx == "Piti") {
    setText("resultado_espanol", "Pica, Picante");
  }
  if (es_mx == "Suzo") {
    setText("resultado_espanol", "Sucio");
  }
  if (es_mx == "Matana") {
    setText("resultado_espanol", "Manzana");
  }
  if (es_mx == "Coco") {
    setText("resultado_espanol", "Cocomelon");
  }
  if (es_mx == "Lata") {
    setText("resultado_espanol", "Pelota");
  }
  if (es_mx == "Pan") {
    setText("resultado_espanol", "Pan");
  }
  if (es_mx == "Lete") {
    setText("resultado_espanol", "Leche");
  }
  if (es_mx == "Alo") {
    setText("resultado_espanol", "Hola");
  }
  if (es_mx == "Atang") {
    setText("resultado_espanol", "Gracias");
  }
  if (es_mx == "Loula") {
    setText("resultado_espanol", "Perro");
  }
  if (es_mx == "Pato") {
    setText("resultado_espanol", "Zapato");
  }
  if (es_mx == "Tene") {
    setText("resultado_espanol", "Tenis");
  }
  if (es_mx == "Ca") {
    setText("resultado_espanol", "Aguacate, plátano");
  }
  if (es_mx == "Mama") {
    setText("resultado_espanol", "Mamá");
  }
  if (es_mx == "Papa") {
    setText("resultado_espanol", "Papá, papa");
  }
  if (es_mx == "Bebe") {
    setText("resultado_espanol", "Bebé");
  }
  if (es_mx == "Lala") {
    setText("resultado_espanol", "Galletas Lara");
  }
  if (es_mx == "Luen") {
    setText("resultado_espanol", "Luz");
  }
  if (es_mx == "Caja") {
    setText("resultado_espanol", "Caja");
  }
  if (es_mx == "Ton") {
    setText("resultado_espanol", "Ádios");
  }
  if (es_mx == "Lalo") {
    setText("resultado_espanol", "Helado");
  }
  if (es_mx == "Bipi") {
    setText("resultado_espanol", "Blippi");
  }
  if (es_mx == "Booba") {
    setText("resultado_espanol", "Booba");
  }
  if (es_mx == "Li") {
    setText("resultado_espanol", "Vete");
  }
  if (es_mx == "Leta") {
    setText("resultado_espanol", "Chocolate");
  }
  if (es_mx == "Pe") {
    setText("resultado_espanol", "Verde, pie");
  }
  if (es_mx == "Son") {
    setText("resultado_espanol", "Ádios");
  }
  if (es_mx == "No") {
    setText("resultado_espanol", "No");
  }
  if (es_mx == "Ti") {
    setText("resultado_espanol", "Si");
  }
  if (es_mx == "Po") {
    setText("resultado_espanol", "Pollo");
  }
  if (es_mx == "Mi") {
    setText("resultado_espanol", "Mío");
  }
  if (es_mx == "Una") {
    setText("resultado_espanol", "Uno, una");
  }
  if (es_mx == "Tu, ti, ta") {
    setText("resultado_espanol", "Dos, tres, cuatro");
  }
  if (es_mx == "Aya") {
    setText("resultado_espanol", "Vete para allá");
  }
});
onEvent("LaE", "click", function( ) {
  setScreen("LaE_pantalla");
});
onEvent("Inicio_Lae", "click", function( ) {
  setScreen("Inicio");
});
onEvent("nueva", "click", function( ) {
  setScreen("addwords");
});
