var num1;
var num2;
onEvent("botónSumar", "click", function( ) {
  num1 = getNumber("Número1");
  num2 = getNumber("Número2");
  setNumber("resultado", num1 + num2);
});
onEvent("botónRestar", "click", function( ) {
  num1 = getNumber("Número1");
  num2 = getNumber("Número2");
  setNumber("resultado", num1 - num2);
});
onEvent("botónMul", "click", function( ) {
  num1 = getNumber("Número1");
  num2 = getNumber("Número2");
  setNumber("resultado", num1 * num2);
});
onEvent("botónDiv", "click", function( ) {
  num1 = getNumber("Número1");
  num2 = getNumber("Número2");
  setNumber("resultado", num1 / num2);
});
