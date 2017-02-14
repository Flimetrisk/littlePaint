var texto = document.getElementById("textLi");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("draw");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var linea = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  for(linea = 0; linea < lineas; linea++)
  {
    yi = espacio * linea;
    xf = espacio * (linea + 1);
    dibujarLinea(colorcito, 300, yi, xf, 0);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + linea);
  }

  dibujarLinea(colorcito, 299,299,299,1);
  dibujarLinea(colorcito, 299,1,1,1);
  dibujarLinea(colorcito, 1,1,1,299);
  dibujarLinea(colorcito, 1,299,299,299);
}