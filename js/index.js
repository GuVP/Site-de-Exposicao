const body = document.querySelector("body");

body.innerHTML += '<button>Clique Aqui</button>';

const modal = document.querySelector("dialog");
const button = document.querySelector("button");

button.onclick = function(){
    modal.showModal();
}