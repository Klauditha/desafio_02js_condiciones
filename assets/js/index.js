/*RETO 1*/
let imagenTieneBorde = false;

function bordeImagen(){
    let imagen = document.getElementById("reto1_img");
    if(imagenTieneBorde == false){
        imagen.style.border = "2px solid red";
        imagenTieneBorde = true;
    }else{
        imagenTieneBorde = false;
        imagen.style.border = "none";
    }
}

/*RETO 2*/
let input_sticker1 = document.getElementById("input_sticker1").value;
let input_sticker2 = document.getElementById("input_sticker2").value;
let input_sticker3 = document.getElementById("input_sticker3").value;
let resultado_text = document.getElementById("reto2_resultado").innerHTML;
function verificarCantidadStickers(){
    let suma = input_sticker1 + input_sticker2 +input_sticker3;
    if(suma>=10){
        resultado_text = "Llevas "+ suma + " stickers";
    }
    else{
        resultado_text = "Llevas demasiados stickers";
    }
}
/*RETO 3*/