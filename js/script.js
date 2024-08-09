const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const right = document.getElementById("right");

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]


const replace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    imgPersona.classList.add = ("oculto"); 
    ingresoTexto.value = "";
    rightInfo.style.display = "none"
    botonCopiar.style.display = "block"
    right.classList.add("austar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    imgPersona.classList.remove = ("oculto");
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != "") {
        function encriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][0])) {
                    newText = newText.replaceAll(reemplazar[i][0], 
                    reemplazar[i][1]);
                };
            };
            return newText
        };
    }else{
        alert("Por favor ingrese un texto válido para encriptar");
        reset();
    }
    replace(encriptar(texto));
});


botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++) {
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    
    replace(desencriptar(texto))
    if(texto != "") {
    } else {
        alert("Por favor ingrese un texto válido para desencriptar");
        reset();
    }

})


botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado con exito");
    reset();
})