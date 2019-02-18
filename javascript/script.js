
//Esto es para el menu responsive principal
var body = document.body;

var menu = document.getElementById('menu');

var burguerButton = document.getElementById('burguer');
burguerButton.addEventListener('click', modoMenu);
burguerButton.addEventListener('touchbar', modoMenu);
function modoMenu() {
  body.classList.toggle('body-off-canvas');
  menu.classList.toggle('menu-off-canvas');
  burguerButton.classList.toggle('burguer-off-canvas');
}

var cerrar = document.getElementById('equis');
equis.addEventListener('click', sinMenu);
equis.addEventListener('touchbar', sinMenu);
function sinMenu() {
  body.classList.toggle('body-off-canvas');
  menu.classList.toggle('menu-off-canvas');
  burguerButton.classList.toggle('burguer-off-canvas');
}
//FIN

//Esto es para el anuncio de la pagina principal
var contenerdorFusion = document.getElementById('contenedor-fucion');
var cerrarFusion = document.getElementById('cerrar-fucion');
if (cerrarFusion) {
  cerrarFusion.addEventListener('click', fueraFusion);
  cerrarFusion.addEventListener('touchbar', fueraFusion);
  function fueraFusion() {
    contenerdorFusion.classList.toggle('fucion-off');
  }
}
//FIN

//Esto es para las imagenes de la seccion HISTORIA  
var contenedorHis1 = document.getElementById('his-1');
var contenedorHis2 = document.getElementById('his-2');
var contenedorHis3 = document.getElementById('his-3');
var contenedorHis4 = document.getElementById('his-4');

var imagenHIstoria1 = document.getElementById('his1');
if (imagenHIstoria1) {
  imagenHIstoria1.addEventListener('click', mostrarHis1);
  function mostrarHis1() {
    contenedorHis1.classList.toggle('his-on');

  }
}

var imagenHIstoria2 = document.getElementById('his2');
if (imagenHIstoria2) {
  imagenHIstoria2.addEventListener('click', mostrarHis2);
  function mostrarHis2() {
    contenedorHis2.classList.toggle('his-on');
  }
}

var imagenHIstoria3 = document.getElementById('his3');
if (imagenHIstoria3) {
  imagenHIstoria3.addEventListener('click', mostrarHis3);
  function mostrarHis3() {
    contenedorHis3.classList.toggle('his-on');
  }
}

var imagenHIstoria4 = document.getElementById('his4');
if (imagenHIstoria4) {
  imagenHIstoria4.addEventListener('click', mostrarHis4);
  function mostrarHis4() {
    contenedorHis4.classList.toggle('his-on');
  }
}

var cerrarImaHis1 = document.getElementById('cerrar-his1');
if (cerrarImaHis1) {
  cerrarImaHis1.addEventListener('click', cerrarHistoria1);
  function cerrarHistoria1() {
    contenedorHis1.classList.remove('his-on');
  }
}

var cerrarImaHis2 = document.getElementById('cerrar-his2');
if (cerrarImaHis2) {
  cerrarImaHis2.addEventListener('click', cerrarHistoria2);
  function cerrarHistoria2() {
    contenedorHis2.classList.remove('his-on');
  }
}

var cerrarImaHis3 = document.getElementById('cerrar-his3');
if (cerrarImaHis3) {
  cerrarImaHis3.addEventListener('click', cerrarHistoria3);
  function cerrarHistoria3() {
    contenedorHis3.classList.remove('his-on');
  }
}

var cerrarImaHis4 = document.getElementById('cerrar-his4');
if (cerrarImaHis4) {
  cerrarImaHis4.addEventListener('click', cerrarHistoria4);
  function cerrarHistoria4() {
    contenedorHis4.classList.remove('his-on');
  }
}
//FIN

//Esto es para la galeria de imagenes en INNOVACIÓN 
var imagenInno1v2 = document.getElementById('inno1v2');
var imagenInno2v2 = document.getElementById('inno2v2');
var imagenInno3v2 = document.getElementById('inno3v2');
var imagenInno4v2 = document.getElementById('inno4v2');
var imagenInno5v2 = document.getElementById('inno5v2');
var imagenInno6v2 = document.getElementById('inno6v2');
var imagenInno7v2 = document.getElementById('inno7v2');
var imagenInno8v2 = document.getElementById('inno8v2');
var imagenInno9v2 = document.getElementById('inno9v2');
var imagenInno10v2 = document.getElementById('inno10v2');
var imagenInno11v2 = document.getElementById('inno11v2');
var imagenInno12v2 = document.getElementById('inno12v2');
var imagenInno13v2 = document.getElementById('inno13v2');
var imagenInno14v2 = document.getElementById('inno14v2');
var imagenInno15v2 = document.getElementById('inno15v2');

var imagenInno1 = document.getElementById('inno1');
if (imagenInno1) {
  imagenInno1.addEventListener("click", mostrarInno1v2);
  function mostrarInno1v2() {
    imagenInno1v2.classList.toggle('inno-on');
  }  
}

var imagenInno2 = document.getElementById('inno2');
if (imagenInno2) {
  imagenInno2.addEventListener("click", mostrarInno2v2);
  function mostrarInno2v2() {
    imagenInno2v2.classList.toggle('inno-on');
  }  
}

var imagenInno3 = document.getElementById('inno3');
if (imagenInno3) {
  imagenInno3.addEventListener("click", mostrarInno3v2);
  function mostrarInno3v2() {
    imagenInno3v2.classList.toggle('inno-on');
  }  
}

var imagenInno4 = document.getElementById('inno4');
if (imagenInno4) {
  imagenInno4.addEventListener("click", mostrarInno4v2);
  function mostrarInno4v2() {
    imagenInno4v2.classList.toggle('inno-on');
  }
}


var imagenInno5 = document.getElementById('inno5');
if (imagenInno5) {
  imagenInno5.addEventListener("click", mostrarInno5v2);
  function mostrarInno5v2() {
    imagenInno5v2.classList.toggle('inno-on');
  }
  
}

var imagenInno6 = document.getElementById('inno6');
if (imagenInno6) {
  imagenInno6.addEventListener("click", mostrarInno6v2);
  function mostrarInno6v2() {
    imagenInno6v2.classList.toggle('inno-on');
  }  
}


var imagenInno7 = document.getElementById('inno7');
if (imagenInno7) {
  imagenInno7.addEventListener("click", mostrarInno7v2);
  function mostrarInno7v2() {
    imagenInno7v2.classList.toggle('inno-on');
  }  
}


var imagenInno8 = document.getElementById('inno8');
if (imagenInno8) {
  imagenInno8.addEventListener("click", mostrarInno8v2);
  function mostrarInno8v2() {
    imagenInno8v2.classList.toggle('inno-on');
  }  
}


var imagenInno9 = document.getElementById('inno9');
if (imagenInno9) {
  imagenInno9.addEventListener("click", mostrarInno9v2);
  function mostrarInno9v2() {
    imagenInno9v2.classList.toggle('inno-on');
  }
  
}

var imagenInno10 = document.getElementById('inno10');
if (imagenInno10) {
  imagenInno10.addEventListener("click", mostrarInno10v2);
  function mostrarInno10v2() {
    imagenInno10v2.classList.toggle('inno-on');
  
}
}

var imagenInno11 = document.getElementById('inno11');
if (imagenInno11) {
  imagenInno11.addEventListener("click", mostrarInno11v2);
  function mostrarInno11v2() {
    imagenInno11v2.classList.toggle('inno-on');
  }  
}


var imagenInno12 = document.getElementById('inno12');
if (imagenInno12) {
  imagenInno12.addEventListener("click", mostrarInno12v2);
  function mostrarInno12v2() {
    imagenInno12v2.classList.toggle('inno-on');
  }  
}


var imagenInno13 = document.getElementById('inno13');
if (imagenInno13) {
  imagenInno13.addEventListener("click", mostrarInno13v2);
  function mostrarInno13v2() {
    imagenInno13v2.classList.toggle('inno-on');
  }  
}


var imagenInno14 = document.getElementById('inno14');
if (imagenInno14) {
  imagenInno14.addEventListener("click", mostrarInno14v2);
  function mostrarInno14v2() {
    imagenInno14v2.classList.toggle('inno-on');
  }  
}


var imagenInno15 = document.getElementById('inno15');
if (imagenInno15) {
  imagenInno15.addEventListener("click", mostrarInno15v2);
  function mostrarInno15v2() {
    imagenInno15v2.classList.toggle('inno-on');
  }  
}
  //Desde aui es para cerrar las imagenes de INNOVACIÓN
var cerrarInno1 = document.getElementById('cerrar-inno1');
if (cerrarInno1) {
  cerrarInno1.addEventListener('click', cerrarInno1v2);
  function cerrarInno1v2() {
    imagenInno1v2.classList.remove('inno-on');
  }
}

var cerrarInno2 = document.getElementById('cerrar-inno2');
if (cerrarInno2) {
  cerrarInno2.addEventListener('click', cerrarInno2v2);
  function cerrarInno2v2() {
    imagenInno2v2.classList.remove('inno-on');
  }
}

var cerrarInno3 = document.getElementById('cerrar-inno3');
if (cerrarInno3) {
  cerrarInno3.addEventListener('click', cerrarInno3v2);
  function cerrarInno3v2() {
    imagenInno3v2.classList.remove('inno-on');
  }
}

var cerrarInno4 = document.getElementById('cerrar-inno4');
if (cerrarInno4) {
  cerrarInno4.addEventListener('click', cerrarInno4v2);
  function cerrarInno4v2() {
    imagenInno4v2.classList.remove('inno-on');
  }
}

var cerrarInno5 = document.getElementById('cerrar-inno5');
if (cerrarInno5) {
  cerrarInno5.addEventListener('click', cerrarInno5v2);
  function cerrarInno5v2() {
    imagenInno5v2.classList.remove('inno-on');
  }
}

var cerrarInno6 = document.getElementById('cerrar-inno6');
if (cerrarInno6) {
  cerrarInno6.addEventListener('click', cerrarInno6v2);
  function cerrarInno6v2() {
    imagenInno6v2.classList.remove('inno-on');
  }
}

var cerrarInno7 = document.getElementById('cerrar-inno7');
if (cerrarInno7) {
  cerrarInno7.addEventListener('click', cerrarInno7v2);
  function cerrarInno7v2() {
    imagenInno7v2.classList.remove('inno-on');
  }
}

var cerrarInno8 = document.getElementById('cerrar-inno8');
if (cerrarInno8) {
  cerrarInno8.addEventListener('click', cerrarInno8v2);
  function cerrarInno8v2() {
    imagenInno8v2.classList.remove('inno-on');
  }
}

var cerrarInno9 = document.getElementById('cerrar-inno9');
if (cerrarInno9) {
  cerrarInno9.addEventListener('click', cerrarInno9v2);
  function cerrarInno9v2() {
    imagenInno9v2.classList.remove('inno-on');
  }
}

var cerrarInno10 = document.getElementById('cerrar-inno10');
if (cerrarInno10) {
  cerrarInno10.addEventListener('click', cerrarInno10v2);
  function cerrarInno10v2() {
    imagenInno10v2.classList.remove('inno-on');
  }
}

var cerrarInno11 = document.getElementById('cerrar-inno11');
if (cerrarInno11) {
  cerrarInno11.addEventListener('click', cerrarInno11v2);
  function cerrarInno11v2() {
    imagenInno11v2.classList.remove('inno-on');
  }
}

var cerrarInno12 = document.getElementById('cerrar-inno12');
if (cerrarInno12) {
  cerrarInno12.addEventListener('click', cerrarInno12v2);
  function cerrarInno12v2() {
    imagenInno12v2.classList.remove('inno-on');
  }
}

var cerrarInno13 = document.getElementById('cerrar-inno13');
if (cerrarInno13) {
  cerrarInno13.addEventListener('click', cerrarInno13v2);
  function cerrarInno13v2() {
    imagenInno13v2.classList.remove('inno-on');
  }
}

var cerrarInno14 = document.getElementById('cerrar-inno14');
if (cerrarInno14) {
  cerrarInno14.addEventListener('click', cerrarInno14v2);
  function cerrarInno14v2() {
    imagenInno14v2.classList.remove('inno-on');
  }
}

var cerrarInno15 = document.getElementById('cerrar-inno15');
if (cerrarInno15) {
  cerrarInno15.addEventListener('click', cerrarInno15v2);
  function cerrarInno15v2() {
    imagenInno15v2.classList.remove('inno-on');
  }
}
//Para la Cadena de abastecimiento
var cadena = document.getElementById('cadenas');
var cerrarCad = document.getElementById('cerrar-cad');
var abrirCad = document.getElementById('abrir-cad');
if (abrirCad) {
  abrirCad.addEventListener("click", abrirCadena);
  function abrirCadena() {
    cadena.classList.toggle('cad-on');
  }
}
if (cerrarCad) {
  cerrarCad.addEventListener("click", cerrarCadena);
  function cerrarCadena() {
    cadena.classList.toggle("cad-on");
  }
}

//Carga de imagenes
var blazy = new Blazy({
  selector: 'img'
});
//Gestos

var gestos = new Hammer(body);
gestos.on('swipeleft', function(ev) {
	body.classList.add('body-off-canvas');
  menu.classList.add('menu-off-canvas');
  burguerButton.classList.add('burguer-off-canvas');
});
gestos.on('swiperight', function(ev) {
	body.classList.remove('body-off-canvas');
  menu.classList.remove('menu-off-canvas');
  burguerButton.classList.remove('burguer-off-canvas');
});