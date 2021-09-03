setScreen("main");
function cyp() {
  if (getText("employeeid") == "wcsjune2007isa") {
    setScreen("statement_1");
  } else if ((getText("employeeid") == "wcsjune2021dan")) {
    setScreen("statement_2");
  } else if ((getText("employeeid") == "wcs200905051043")) {
    setScreen("statement_3");
  } else if ((getText("employeeid") == "wcsmkt2021")) {
    setScreen("statement_4");
  } else {
    showElement("warning");
  }
}
onEvent("button1", "click", function( ) {
  cyp();
});
