var es_mx = "Choose a word";
function Welsh() {
  es_mx = getProperty("word_Welsh", "text");
  if (es_mx == "Pana") {
    setText("r_welsh", "Banana");
  }
  if (es_mx == "Ye tan") {
    setText("r_welsh", "Dyna fe");
  }
  if (es_mx == "Pata") {
    setText("r_welsh", "Stopia");
  }
  if (es_mx == "Uno") {
    setText("r_welsh", "Un");
  }
  if (es_mx == "Tu") {
    setText("r_welsh", "Dau");
  }
  if (es_mx == "Ti") {
    setText("r_welsh", "Tri");
  }
  if (es_mx == "Ta") {
    setText("r_welsh", "Pedwar");
  }
  if (es_mx == "Ata, ete, eta") {
    setText("r_welsh", "Hyn");
  }
  if (es_mx == "Caca") {
    setText("r_welsh", "Gwyn");
  }
  if (es_mx == "Kiki") {
    setText("r_welsh", "Melyn, porffor");
  }
  if (es_mx == "Me") {
    setText("r_welsh", "Du");
  }
  if (es_mx == "Zuen") {
    setText("r_welsh", "Glas");
  }
  if (es_mx == "Ojo") {
    setText("r_welsh", "Coch");
  }
  if (es_mx == "Aja") {
    setText("r_welsh", "Oren");
  }
  if (es_mx == "Mano") {
    setText("r_welsh", "Brawd, llaw");
  }
  if (es_mx == "Guegue") {
    setText("r_welsh", "Wy");
  }
  if (es_mx == "Guagua") {
    setText("r_welsh", "Balŵn");
  }
  if (es_mx == "Agua") {
    setText("r_welsh", "Dŵr");
  }
  if (es_mx == "Suzo") {
    setText("r_welsh", "Brwnt");
  }
  if (es_mx == "Matana") {
    setText("r_welsh", "Afal");
  }
  if (es_mx == "Coco") {
    setText("r_welsh", "Cocomelon");
  }
  if (es_mx == "Lata") {
    setText("r_welsh", "Dawns");
  }
  if (es_mx == "Pan") {
    setText("r_welsh", "Bara");
  }
  if (es_mx == "Lete") {
    setText("r_welsh", "Llaeth");
  }
  if (es_mx == "Alo") {
    setText("r_welsh", "Helo");
  }
  if (es_mx == "Atang") {
    setText("r_welsh", "Diolch");
  }
  if (es_mx == "Loula") {
    setText("r_welsh", "Ci");
  }
  if (es_mx == "Pato") {
    setText("r_welsh", "Esgidiau");
  }
  if (es_mx == "Tene") {
    setText("r_welsh", "Esgidiau tennis");
  }
  if (es_mx == "Ca") {
    setText("r_welsh", "Afocado, banana");
  }
  if (es_mx == "Mama") {
    setText("r_welsh", "Mam");
  }
  if (es_mx == "Papa") {
    setText("r_welsh", "Dad");
  }
  if (es_mx == "Bebe") {
    setText("r_welsh", "Babi");
  }
  if (es_mx == "Lala") {
    setText("r_welsh", "Cwcis Lara");
  }
  if (es_mx == "Luen") {
    setText("r_welsh", "Golau");
  }
  if (es_mx == "Caja") {
    setText("r_welsh", "Blwch");
  }
  if (es_mx == "Ton") {
    setText("r_welsh", "Hwyl");
  }
  if (es_mx == "Lalo") {
    setText("r_welsh", "Hufen ia");
  }
  if (es_mx == "Bipi") {
    setText("r_welsh", "Blippi");
  }
  if (es_mx == "Booba") {
    setText("r_welsh", "Booba");
  }
  if (es_mx == "Li") {
    setText("r_welsh", "Gadewch");
  }
  if (es_mx == "Leta") {
    setText("r_welsh", "Siocled");
  }
  if (es_mx == "Pe") {
    setText("r_welsh", "Gwyrdd, troed / traed");
  }
  if (es_mx == "Son") {
    setText("r_welsh", "Welwn ni chi cyn bo hir");
  }
  if (es_mx == "No") {
    setText("r_welsh", "Na");
  }
  if (es_mx == "Ti") {
    setText("r_welsh", "Ydw");
  }
  if (es_mx == "Mi") {
  setText("r_welsh", "Cloddfa");
}
  if (es_mx == "Osa" ) {
    setText("r_welsh", "Rrhosyn");
  }
  if (es_mx == "Piti" ) {
    setText("r_welsh", "Sbeislydа");
  }
  if (es_mx == "Po" ) {
    setText("r_welsh", "Cyw");
  }
}
onEvent("LaE", "click", function( ) {
  setScreen("LaE_pantalla");
});
onEvent("traducir_es_mx", "click", function( ) {
  es_mx = getProperty("lard_es_mx", "text");
  if (es_mx == "Pana") {
    setText("resultado_espanol", "Plátano");
  }
  if (es_mx == "Uno") {
    setText("resultado_espanol", "Uno");
  }
  if (es_mx == "Pata") {
    setText("resultado_espanol", "Basta");
  }
  if (es_mx == "Ye tan") {
    setText("resultado_espanol", "Ya esta");
  }
  if (es_mx == "Tu") {
    setText("resultado_espanol", "Dos");
  }
  if (es_mx == "Ti") {
    setText("resultado_espanol", "Tres");
  }
  if (es_mx == "Ta") {
    setText("resultado_espanol", "Cuatro");
  }
  if (es_mx == "Mi") {
    setText("resultado_espanol", "Mío");
  }
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
});
onEvent("LtE", "click", function( ) {
  setScreen("LtE_screen");
});
onEvent("descargar", "click", function( ) {
  open("https://www.lardcorporation.uk.eu.org/downloadcenter/LardTranslatorv1.apk");
});
onEvent("translate", "click", function( ) {
  es_mx = getProperty("dropdown1", "text");
  if (es_mx == "Pana") {
    setText("result_en_us", "Banana");
  }
  if (es_mx == "Uno") {
    setText("result_en_us", "1");
  }
  if (es_mx == "Pata") {
    setText("result_en_us", "Stop it");
  }
  if (es_mx == "Ye tan") {
    setText("result_en_us", "That's it");
  }
  if (es_mx == "Tu") {
    setText("result_en_us", "2");
  }
  if (es_mx == "Ti") {
    setText("result_en_us", "3");
  }
  if (es_mx == "Ta") {
    setText("result_en_us", "4");
  }
  if (es_mx == "Mi") {
    setText("result_en_us", "That's mine!");
  }
  if (es_mx == "Pe") {
    setText("result_en_us", "Green, foot/feet");
  }
  if (es_mx == "No") {
    setText("result_en_us", "No");
  }
  if (es_mx == "Ti") {
    setText("result_en_us", "Yes");
  }
  if (es_mx == "Son") {
    setText("result_en_us", "Bye");
  }
  if (es_mx == "Ata, ete, eta") {
    setText("result_en_us", "This, that");
  }
  if (es_mx == "Caca") {
    setText("result_en_us", "White, purple");
  }
  if (es_mx == "Kiki") {
    setText("result_en_us", "Yellow");
  }
  if (es_mx == "Me") {
    setText("result_en_us", "Black");
  }
  if (es_mx == "Zuen") {
    setText("result_en_us", "Blue");
  }
  if (es_mx == "Ojo") {
    setText("result_en_us", "Red");
  }
  if (es_mx == "Aja") {
    setText("result_en_us", "Orange");
  }
  if (es_mx == "Mano") {
    setText("result_en_us", "Brother, hand");
  }
  if (es_mx == "Guegue") {
    setText("result_en_us", "Egg");
  }
  if (es_mx == "Guagua") {
    setText("result_en_us", "Balloon");
  }
  if (es_mx == "Agua") {
    setText("result_en_us", "Water");
  }
  if (es_mx == "Suzo") {
    setText("result_en_us", "Dirty");
  }
  if (es_mx == "Matana") {
    setText("result_en_us", "Apple");
  }
  if (es_mx == "Coco") {
    setText("result_en_us", "Cocomelon");
  }
  if (es_mx == "Lata") {
    setText("result_en_us", "Ball");
  }
  if (es_mx == "Pan") {
    setText("result_en_us", "Bread");
  }
  if (es_mx == "Lete") {
    setText("result_en_us", "Milk");
  }
  if (es_mx == "Alo") {
    setText("result_en_us", "Hi");
  }
  if (es_mx == "Atang") {
    setText("result_en_us", "Thanks");
  }
  if (es_mx == "Loula") {
    setText("result_en_us", "Dog");
  }
  if (es_mx == "Pato") {
    setText("result_en_us", "Shoe");
  }
  if (es_mx == "Tene") {
    setText("result_en_us", "Tennis shoes");
  }
  if (es_mx == "Ca") {
    setText("result_en_us", "Avocado, banana");
  }
  if (es_mx == "Mama") {
    setText("result_en_us", "Mom");
  }
  if (es_mx == "Papa") {
    setText("result_en_us", "Dad, potato");
  }
  if (es_mx == "Bebe") {
    setText("result_en_us", "Baby");
  }
  if (es_mx == "Lala") {
    setText("result_en_us", "Lara Cookies");
  }
  if (es_mx == "Luen") {
    setText("result_en_us", "Light");
  }
  if (es_mx == "Caja") {
    setText("result_en_us", "Box");
  }
  if (es_mx == "Ton") {
    setText("result_en_us", "Bye");
  }
  if (es_mx == "Lalo") {
    setText("result_en_us", "Ice cream");
  }
  if (es_mx == "Bipi") {
    setText("result_en_us", "Blippi");
  }
  if (es_mx == "Booba") {
    setText("result_en_us", "Booba");
  }
  if (es_mx == "Li") {
    setText("result_en_us", "Leave");
  }
  if (es_mx == "Leta") {
    setText("result_en_us", "Chocolate");
  }
  if (es_mx == "Osa") {
    setText("result_en_us", "Pink");
  }
  if (es_mx == "Piti") {
    setText("result_en_us", "Spicy");
  }
  if (es_mx == "Po"  ) {
    setText("result_en_us", "Chicken");
  }
});
onEvent("Inicio_Lae", "click", function( ) {
  setScreen("Inicio");
});
onEvent("startlte", "click", function( ) {
  setScreen("Inicio");
});
onEvent("button1", "click", function( ) {
  setScreen("novedades");
});
onEvent("start_wn", "click", function( ) {
  setScreen("Inicio");
});
onEvent("button3", "click", function( ) {
  setScreen("Inicio");
});
onEvent("LtR", "click", function( ) {
  setScreen("LtR_screen");
});
onEvent("LtE", "click", function( ) {
  setScreen("LtE_screen");
});
onEvent("Trans_RU", "click", function( ) {
  es_mx = getProperty("Lard_w_RU", "text");
  if (es_mx == "Pana") {
    setText("r_RU_RU", "банан");
  }
  if (es_mx == "Uno") {
    setText("r_RU_RU", "1");
  }
  if (es_mx == "Tu") {
    setText("r_RU_RU", "2");
  }
  if (es_mx == "Ti") {
    setText("r_RU_RU", "3");
  }
  if (es_mx == "Ta") {
    setText("r_RU_RU", "4");
  }
  if (es_mx == "Piti") {
    setText("r_RU_RU", "Пряный");
  }
  if (es_mx == "Pe") {
    setText("r_RU_RU", "Зеленый, фут / фут");
  }
  if (es_mx == "No") {
    setText("r_RU_RU", "Нет");
  }
  if (es_mx == "Ti") {
    setText("r_RU_RU", "да");
  }
  if (es_mx == "Son") {
    setText("r_RU_RU", "до свидания");
  }
  if (es_mx == "Ata, ete, eta") {
    setText("r_RU_RU", "Это");
  }
  if (es_mx == "Caca") {
    setText("r_RU_RU", "белый");
  }
  if (es_mx == "Kiki") {
    setText("r_RU_RU", "Желтый, фиолетовый");
  }
  if (es_mx == "Me") {
    setText("r_RU_RU", "Чернить");
  }
  if (es_mx == "Zuen") {
    setText("r_RU_RU", "Синий");
  }
  if (es_mx == "Ojo") {
    setText("r_RU_RU", "красный");
  }
  if (es_mx == "Aja") {
    setText("r_RU_RU", "апельсин");
  }
  if (es_mx == "Mano") {
    setText("r_RU_RU", "Брат, рука");
  }
  if (es_mx == "Guegue") {
    setText("r_RU_RU", "Яйцо");
  }
  if (es_mx == "Guagua") {
    setText("r_RU_RU", "Воздушный шар");
  }
  if (es_mx == "Agua") {
    setText("r_RU_RU", "Воды");
  }
  if (es_mx == "Suzo") {
    setText("r_RU_RU", "Грязный");
  }
  if (es_mx == "Matana") {
    setText("r_RU_RU", "яблоко");
  }
  if (es_mx == "Coco") {
    setText("r_RU_RU", "Мультфильм");
  }
  if (es_mx == "Lata") {
    setText("r_RU_RU", "Мяч");
  }
  if (es_mx == "Pan") {
    setText("r_RU_RU", "Хлеб");
  }
  if (es_mx == "Lete") {
    setText("r_RU_RU", "Молоко");
  }
  if (es_mx == "Alo") {
    setText("r_RU_RU", "Привет");
  }
  if (es_mx == "Atang") {
    setText("r_RU_RU", "Спасибо");
  }
  if (es_mx == "Loula") {
    setText("r_RU_RU", "Собака");
  }
  if (es_mx == "Pato") {
    setText("r_RU_RU", "туфли");
  }
  if (es_mx == "Tene") {
    setText("r_RU_RU", "обувь для тенниса");
  }
  if (es_mx == "Ca") {
    setText("r_RU_RU", "авокадо, банан");
  }
  if (es_mx == "Mama") {
    setText("r_RU_RU", "Мама");
  }
  if (es_mx == "Papa") {
    setText("r_RU_RU", "Папа, картошка");
  }
  if (es_mx == "Bebe") {
    setText("r_RU_RU", "Малыш");
  }
  if (es_mx == "Lala") {
    setText("r_RU_RU", "Лара печенье");
  }
  if (es_mx == "Luen") {
    setText("r_RU_RU", "Свет");
  }
  if (es_mx == "Caja") {
    setText("r_RU_RU", "Коробка");
  }
  if (es_mx == "Ton") {
    setText("r_RU_RU", "Пока!");
  }
  if (es_mx == "Lalo") {
    setText("r_RU_RU", "Мороженое");
  }
  if (es_mx == "Bipi") {
    setText("r_RU_RU", "Blippi");
  }
  if (es_mx == "Booba") {
    setText("r_RU_RU", "Буба");
  }
  if (es_mx == "Li") {
    setText("r_RU_RU", "Покинуть");
  }
  if (es_mx == "Leta") {
    setText("r_RU_RU", "Шоколад");
  }
  if (es_mx == "Osa" ) {
    setText("r_RU_RU", "роза");
  }
  if (es_mx == "Piti" ) {
    setText("r_RU_RU", "пряныйа");
  }
  if (es_mx == "Po" ) {
    setText("r_RU_RU", "курицаа");
  }
  if (es_mx == "Mi" ) {
    setText("r_RU_RU", "Шахтаа");
  }
  if (es_mx == "Pata" ) {
    setText("r_RU_RU", "Прекрати");
  }
  if (es_mx == "Ye tan" ) {
    setText("r_RU_RU", "Ну вот");
  }
});
onEvent("Home_RU", "click", function( ) {
  setScreen("Inicio");
});
onEvent("LtW", "click", function( ) {
  setScreen("LtW_screen");
});
onEvent("t_welsh", "click", function( ) {
  Welsh();
});
onEvent("home_welsh", "click", function( ) {
  setScreen("Inicio");
});
