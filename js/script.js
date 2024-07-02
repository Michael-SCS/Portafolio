const button = document.getElementsByClassName('buttoncard');
const botonhojadevida = document.getElementById('buttonHDV');

function clickonbuttoncard (){
    alert('Esta página aun está siendo construida, por favor regresa más tarde. Gracias por tu paciencia.');
}
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", clickonbuttoncard); {
    }
}

botonhojadevida.addEventListener("click", function(){
    botonhojadevida.textContent = "Gracias por tu interés 😀";
});

