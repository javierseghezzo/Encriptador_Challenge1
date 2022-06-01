const inputTexto = document.querySelector(".input-text-area");


const mensaje = document.querySelector(".text-result");


function llamadoEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
       
    mensaje.value = textoEncriptado;
   
}

function encriptar(ParametroParaEncriptar) {
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    ParametroParaEncriptar = ParametroParaEncriptar.toLowerCase();

    for (let i =0; i < matrizCodigo.length; i++) {
        if(ParametroParaEncriptar.includes(matrizCodigo[i][0])){
            ParametroParaEncriptar = ParametroParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
              

    }
    return ParametroParaEncriptar;
}



function llamadoDesEncriptar() {
    const textoDesEncriptado = desencriptar(inputTexto.value);
       
    mensaje.value = textoDesEncriptado;

}


function desencriptar(ParametroParadesEncriptar) {
    let matrizCodigo = [["enter","e"], ["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];

    ParametroParadesEncriptar = ParametroParadesEncriptar.toLowerCase();

    for (let i =0; i < matrizCodigo.length; i++) {
        if(ParametroParadesEncriptar.includes(matrizCodigo[i][0])){
            ParametroParadesEncriptar = ParametroParadesEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return ParametroParadesEncriptar;
}

function copy() {
    let copyText = document.querySelector("#result");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector(".button").addEventListener("click", copy);