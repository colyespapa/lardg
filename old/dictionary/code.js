var es_mx = "Choose a word";
var color = "";
setScreen("LtE_screen");
onEvent("back_eng_ext", "click", function( ) {
  setScreen("LtE_screen");
});
onEvent("back_esp_ext", "click", function( ) {
  setScreen("LaE_pantalla");
});
onEvent("button1", "click", function( ) {
  open("https://www.lardcorporation.uk.eu.org");
});
onEvent("change_color_eng", "click", function( ) {
  color = getText("Color_English");
  if (color == "Green") {
    setProperty("Color_English", "background-color", rgb(26, 188, 15));
    setProperty("change_color_eng", "background-color", rgb(26, 188, 15));
    setProperty("dropdown1", "background-color", rgb(26, 188, 15));
    setProperty("Extras_Lte", "background-color", rgb(26, 188, 15));
    setProperty("translate", "background-color", rgb(26, 188, 15));
    setProperty("App_2_English", "background-color", rgb(26, 188, 15));
    setProperty("Home_English", "background-color", rgb(26, 188, 15));
  }
  if (color == "Blue") {
    setProperty("Color_English", "background-color", rgb(13, 25, 232));
    setProperty("change_color_eng", "background-color", rgb(13, 25, 232));
    setProperty("dropdown1", "background-color", rgb(13, 25, 232));
    setProperty("Extras_Lte", "background-color", rgb(13, 25, 232));
    setProperty("translate", "background-color", rgb(13, 25, 232));
    setProperty("App_2_English", "background-color", rgb(13, 25, 232));
    setProperty("Home_English", "background-color", rgb(13, 25, 232));
  }
  if (color == "Red") {
    setProperty("Color_English", "background-color", rgb(220, 15, 53));
    setProperty("change_color_eng", "background-color", rgb(220, 15, 53));
    setProperty("dropdown1", "background-color", rgb(220, 15, 53));
    setProperty("Extras_Lte", "background-color", rgb(220, 15, 53));
    setProperty("translate", "background-color", rgb(220, 15, 53));
    setProperty("App_2_English", "background-color", rgb(220, 15, 53));
    setProperty("Home_English", "background-color", rgb(220, 15, 53));
  }
  if (color == "Orange") {
    setProperty("Color_English", "background-color", rgb(220, 130, 15));
    setProperty("change_color_eng", "background-color", rgb(220, 130, 15));
    setProperty("dropdown1", "background-color", rgb(220, 130, 15));
    setProperty("Extras_Lte", "background-color", rgb(220, 130, 15));
    setProperty("translate", "background-color", rgb(220, 130, 15));
    setProperty("App_2_English", "background-color", rgb(220, 130, 15));
    setProperty("Home_English", "background-color", rgb(220, 130, 15));
  }
});
onEvent("change_color_esp", "click", function( ) {
  color = getText("Spanish_checkbox_color");
  if (color == "Verde") {
    setProperty("Spanish_checkbox_color", "background-color", rgb(26, 188, 15));
    setProperty("change_color_esp", "background-color", rgb(26, 188, 15));
    setProperty("Home_Spanish", "background-color", rgb(26, 188, 15));
    setProperty("App_2_Spanish", "background-color", rgb(26, 188, 15));
    setProperty("lard_es_mx", "background-color", rgb(26, 188, 15));
    setProperty("Extras_Lae", "background-color", rgb(26, 188, 15));
    setProperty("traducir_es_mx", "background-color", rgb(26, 188, 15));
  }
  if (color == "Azul") {
    setProperty("Spanish_checkbox_color", "background-color", rgb(13, 25, 232));
    setProperty("change_color_esp", "background-color", rgb(13, 25, 232));
    setProperty("Home_Spanish", "background-color", rgb(13, 25, 232));
    setProperty("App_2_Spanish", "background-color", rgb(13, 25, 232));
    setProperty("lard_es_mx", "background-color", rgb(13, 25, 232));
    setProperty("Extras_Lae", "background-color", rgb(13, 25, 232));
    setProperty("traducir_es_mx", "background-color", rgb(13, 25, 232));
  }
  if (color == "Rojo") {
    setProperty("Spanish_checkbox_color", "background-color", rgb(220, 15, 53));
    setProperty("change_color_esp", "background-color", rgb(220, 15, 53));
    setProperty("Home_Spanish", "background-color", rgb(220, 15, 53));
    setProperty("App_2_Spanish", "background-color", rgb(220, 15, 53));
    setProperty("lard_es_mx", "background-color", rgb(220, 15, 53));
    setProperty("Extras_Lae", "background-color", rgb(220, 15, 53));
    setProperty("traducir_es_mx", "background-color", rgb(220, 15, 53));
  }
  if (color == "Naranja") {
    setProperty("Spanish_checkbox_color", "background-color", rgb(220, 130, 15));
    setProperty("change_color_esp", "background-color", rgb(220, 130, 15));
    setProperty("Home_Spanish", "background-color", rgb(220, 130, 15));
    setProperty("App_2_Spanish", "background-color", rgb(220, 130, 15));
    setProperty("lard_es_mx", "background-color", rgb(220, 130, 15));
    setProperty("Extras_Lae", "background-color", rgb(220, 130, 15));
    setProperty("traducir_es_mx", "background-color", rgb(220, 130, 15));
  }
});
onEvent("English_checkbox", "input", function( ) {
  setScreen("LtE_screen");
});
onEvent("Spanish_checkbox", "input", function( ) {
  setScreen("LaE_pantalla");
});
onEvent("traducir_es_mx", "click", function( ) {
  es_mx = getProperty("lard_es_mx", "text");
  if (es_mx == "Llene") {
    setText("resultado_espanol", "Estoy lleno");
  }
  if (es_mx == "Yen") {
    setText("resultado_espanol", "Estoy bien, bien");
  }
  if (es_mx == "Esuna") {
    setText("resultado_espanol", "No funciona");
  }
  if (es_mx == "¿Qué-es-ese?") {
    setText("resultado_espanol", "¿Qué es ese?");
  }
  if (es_mx == "Panton") {
    setText("resultado_espanol", "Pasaporte");
  }
  if (es_mx == "Fan") {
    setText("resultado_espanol", "Fan, admirador(es)");
  }
  if (es_mx == "Me too") {
    setText("resultado_espanol", "Yo también");
  }
  if (es_mx == "E-son") {
    setText("resultado_espanol", "Ádios");
  }
  if (es_mx == "Pen") {
    setText("resultado_espanol", "Ven");
  }
  if (es_mx == "Tuta") {
    setText("resultado_espanol", "Ducha");
  }
  if (es_mx == "As-fanta") {
    setText("resultado_espanol", "Farmacia");
  }
  if (es_mx == "Zin") {
    setText("resultado_espanol", "Cuatro");
  }
  if (es_mx == "Olla") {
    setText("resultado_espanol", "Olla");
  }
  if (es_mx == "E-suzo") {
    setText("resultado_espanol", "Delicioso");
  }
  if (es_mx == "Nowene") {
    setText("resultado_espanol", "No viene");
  }
  if (es_mx == "Tota") {
    setText("resultado_espanol", "Torta");
  }
  if (es_mx == "Nay") {
    setText("resultado_espanol", "No hay");
  }
  if (es_mx == "Wen") {
    setText("resultado_espanol", "¿Dónde?, ok");
  }
  if (es_mx == "On") {
    setText("resultado_espanol", "Limón");
  }
  if (es_mx == "Kene") {
    setText("resultado_espanol", "Tiene, tener");
  }
  if (es_mx == "En") {
    setText("resultado_espanol", "Comer");
  }
  if (es_mx == "Totor") {
    setText("resultado_espanol", "Doctor, médico");
  }
  if (es_mx == "Uno") {
    setText("resultado_espanol", "Uno");
  }
  if (es_mx == "Pata") {
    setText("resultado_espanol", "Basta, pasta de dientes");
  }
  if (es_mx == "Ye tan") {
    setText("resultado_espanol", "Ya esta");
  }
  if (es_mx == "Tu") {
    setText("resultado_espanol", "Dos");
  }
  if (es_mx == "Ti") {
    setText("resultado_espanol", "Tres, Sí");
  }
  if (es_mx == "Ta") {
    setText("resultado_espanol", "Cinco");
  }
  if (es_mx == "Mi") {
    setText("resultado_espanol", "Mío");
  }
  if (es_mx == "Ete") {
    setText("resultado_espanol", "Este, esta");
  }
  if (es_mx == "Caca") {
    setText("resultado_espanol", "Blanco, morado, casa");
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
  if (es_mx == "Tana") {
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
  if (es_mx == "Ata") {
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
    setText("resultado_espanol", "Camión, pantalón");
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
  if (es_mx == "Pana") {
    setText("resultado_espanol", "Plátano");
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
    setText("resultado_espanol", "Salud! (Cuando alguien estornuda)");
  }
  if (es_mx == "No") {
    setText("resultado_espanol", "No");
  }
  if (es_mx == "Po") {
    setText("resultado_espanol", "Pollo");
  }
});
onEvent("Home_Spanish", "click", function( ) {
  setScreen("screen1");
  setChecked("Spanish_checkbox", false);
});
onEvent("App_2_Spanish", "click", function( ) {
  open("https://www.lardcorporation.uk.eu.org/downloadcenter/LardTranslatorv1.apk");
});
onEvent("Home_English", "click", function( ) {
  setScreen("screen1");
  setChecked("English_checkbox", false);
});
onEvent("App_2_English", "click", function( ) {
  open("https://www.lardcorporation.uk.eu.org/downloadcenter/LardTranslatorv1.apk");
});
onEvent("translate", "click", function( ) {
  es_mx = getProperty("dropdown1", "text");
  if (es_mx == "Llene") {
    setText("result_en_us", "I'm full");
  }
  if (es_mx == "Yen") {
    setText("result_en_us", "I'm fine, fine");
  }
  if (es_mx == "Esuna") {
    setText("result_en_us", "It doesn't work");
  }
  if (es_mx == "¿Qué-es-ese?") {
    setText("result_en_us", "What is that?");
  }
  if (es_mx == "Panton") {
    setText("result_en_us", "Passport");
  }
  if (es_mx == "Me too") {
    setText("result_en_us", "Me too");
  }
  if (es_mx == "E-son") {
    setText("result_en_us", "Bye");
  }
  if (es_mx == "Pen") {
    setText("result_en_us", "Come");
  }
  if (es_mx == "Tuta") {
    setText("result_en_us", "Shower");
  }
  if (es_mx == "As-fanta") {
    setText("result_en_us", "Drug store");
  }
  if (es_mx == "Zin") {
    setText("result_en_us", "4");
  }
  if (es_mx == "Olla") {
    setText("result_en_us", "Cooking pot");
  }
  if (es_mx == "E-suzo") {
    setText("result_en_us", "Delicious");
  }
  if (es_mx == "Nowene") {
    setText("result_en_us", "____ doesn't come");
  }
  if (es_mx == "Torta") {
    setText("result_en_us", "Filled role");
  }
  if (es_mx == "Nay") {
    setText("result_en_us", "There is not");
  }
  if (es_mx == "Wen") {
    setText("result_en_us", "Where, ok");
  }
  if (es_mx == "On") {
    setText("result_en_us", "Lemon(s)");
  }
  if (es_mx == "Kene") {
    setText("result_en_us", "Have got");
  }
  if (es_mx == "En") {
    setText("result_en_us", "Eat");
  }
  if (es_mx == "Totor") {
    setText("result_en_us", "Doctor");
  }
  if (es_mx == "Fan") {
    setText("result_en_us", "Admirer");
  }
  if (es_mx == "Uno") {
    setText("result_en_us", "1");
  }
  if (es_mx == "Pata") {
    setText("result_en_us", "Stop it, toothpaste");
  }
  if (es_mx == "Ye tan") {
    setText("result_en_us", "That's it");
  }
  if (es_mx == "Tu") {
    setText("result_en_us", "2");
  }
  if (es_mx == "Ti") {
    setText("result_en_us", "3, Yes");
  }
  if (es_mx == "Ta") {
    setText("result_en_us", "5");
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
  if (es_mx == "Son") {
    setText("result_en_us", "Bless you! (When someone sneezes)");
  }
  if (es_mx == "Ete") {
    setText("result_en_us", "This, that");
  }
  if (es_mx == "Caca") {
    setText("result_en_us", "White, purple, house");
  }
  if (es_mx == "Kiki") {
    setText("result_en_us", "Yellow");
  }
  if (es_mx == "Pana") {
    setText("result_en_us", "Banana");
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
  if (es_mx == "Tana") {
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
  if (es_mx == "Ata") {
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
    setText("result_en_us", "Truck, jeans");
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
onEvent("Extras_Lae", "click", function( ) {
  setScreen("ExtrasSpanish");
});
onEvent("Extras_Lte", "click", function( ) {
  setScreen("ExtrasEnglish");
});

