onEvent("mapstates", "click", function( ) {
  open("/old/mapofstates.pdf");
});
onEvent("map_bridge", "click", function( ) {
  open("/old/mapofhighways.pdf");
});
onEvent("more", "click", function( ) {
  open("/old/StatesInfo.pdf");
});
onEvent("disclaimer", "click", function( ) {
  setScreen("screen2");
});
onEvent("button4", "click", function( ) {
  setScreen("screen1");
});
onEvent("button5", "click", function( ) {
  open("mailto:support@lardcorporation.uk.eu.org");
});
