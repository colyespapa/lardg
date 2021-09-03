var na = "";
var payee = "";
var amount = 0;
var date = "";
var memo = "";
var eid = "";
function name() {
  if (eid=="wcsjune2007isa") {
    na = "This person was fired.";
    setText("name", na);
  } else if (eid=="wcsjune2021dan") {
    na = "Mrs. Daniela";
    setText("name", na);
  } else if (eid=="wcs200905051043") {
    na = "Mr. Lard Lapudding 1st";
    setText("name", na);
  } else if (eid=="wcsmkt2021") {
    na = "Mrs. Juanita Banana";
    setText("name", na);
  } else {
    na = "This check is not valid.";
    setText("name", na);
  }
}
setScreen("main");
onEvent("button1", "click", function( ) {
  setScreen("check");
  eid = getText("text_input6");
  name();
  payee = getText("text_input5");
  amount = getNumber("text_input3");
  date = getText("text_input4");
  memo = getText("text_input2");
  setText("moneyamount", amount);
  setText("memo", memo);
  setText("date", "Date " + date);
});
onEvent("button2", "click", function( ) {
  setScreen("main");
  eid = "";
  payee = "";
  amount = "";
  date = "";
  memo = "";
});
