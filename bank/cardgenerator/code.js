var x;
var y;
var id = "";
var cardowner_name = "";
var cardno = "";
hideElement("validthru");
hideElement("cnb");
function card() {
  x = getX();
  y = getY();
  hide();
  penDown();
  penWidth(5);
  turnRight(90);
  moveForward(100);
  arcLeft(90, 25);
  moveForward(100);
  arcLeft(90, 25);
  moveForward(200);
  arcLeft(90, 25);
  moveForward(100);
  arcLeft(90, 25);
  moveForward(100);
  penUp();
  moveTo(40, 280);
  turnRight(40);
  penDown();
  moveForward(25);
  turnLeft(90);
  moveForward(50);
  showElement("label13");
  penUp();
  moveTo(x, y);
  turnLeft(90);
}
onEvent("button1", "click", function( ) {
  id = getText("text_input1");
  if (id == "") {
    showElement("label3");
  }
  if (id == "wcsjune2007isa") {
    cardowner_name = "Mrs. Isa";
    cardno = "5351642297955539";
    setText("cardowner", cardowner_name);
    setText("cardnumber", cardno);
    hideElement("label3");
    showElement("cnb");
    showElement("validthru");
    card();
  } else if ((id == "wcsjune2021dan")) {
    cardowner_name = "Mrs. Daniela";
    cardno = "6011855269370673";
    setText("cardowner", cardowner_name);
    setText("cardnumber", cardno);
    hideElement("label3");
    showElement("cnb");
    showElement("validthru");
    card();
  } else if ((id == "wcs200905051043")) {
    cardowner_name = "Mr. Lard Lapudding 1st";
    cardno = "4636210115387192";
    setText("cardowner", cardowner_name);
    setText("cardnumber", cardno);
    hideElement("label3");
    showElement("cnb");
    showElement("validthru");
    card();
  } else if ((id == "wcsmkt2021")) {
    cardowner_name = "Mrs. Juanita Banana";
    cardno = "4022316305318001";
    setText("cardowner", cardowner_name);
    setText("cardnumber", cardno);
    hideElement("label3");
    showElement("cnb");
    showElement("validthru");
    card();
  } else {
    showElement("label3");
  }
});
