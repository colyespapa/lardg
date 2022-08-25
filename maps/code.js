onEvent("mapstates", "click", function( ) {
  open("/mapofstates.pdf");
});
onEvent("map_bridge", "click", function( ) {
  open("/mapofhighways.pdf");
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
