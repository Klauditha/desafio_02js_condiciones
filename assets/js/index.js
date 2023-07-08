/*RETO 1*/
let imagenTieneBorde = false;

function bordeImagen() {
  let imagen = document.getElementById('reto1_img');
  if (imagenTieneBorde == false) {
    imagen.style.border = '2px solid red';
    imagenTieneBorde = true;
  } else {
    imagenTieneBorde = false;
    imagen.style.border = 'none';
  }
}

/*RETO 2*/
function verificarCantidadStickers() {
  let input_sticker1 = document.getElementById('input_sticker1').value;
  let input_sticker2 = document.getElementById('input_sticker2').value;
  let input_sticker3 = document.getElementById('input_sticker3').value;
  let resultado_text = document.getElementById('reto2_resultado');
  if (input_sticker1 == '') input_sticker1 = 0;
  if (input_sticker2 == '') input_sticker2 = 0;
  if (input_sticker3 == '') input_sticker3 = 0;
  let suma =
    parseInt(input_sticker1) +
    parseInt(input_sticker2) +
    parseInt(input_sticker3);

  if (parseInt(suma) <= 10) {
    resultado_text.innerHTML = 'Llevas ' + suma + ' stickers';
  } else {
    resultado_text.innerHTML = 'Llevas demasiados stickers';
  }
}
/*RETO 3*/
