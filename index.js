/*
document
    .getElementById('trocar-de-cor')
    .addEventListener('click', function trocarDeCor() {
        const quadrados = document.getElementsByClassName('quadrado')

        const primeiroQuadrado = quadrados[0];
        primeiroQuadrado.style.backgroundColor = 'yellow';

        console.log(primeiroQuadrado)
    })
*/

/*
const btnTrocarCor = document.getElementById("trocar-de-cor");
const quadradoAzul = document.querySelector(".primeiro-quadrado");

btnTrocarCor.addEventListener("click", trocarCor);

function trocarCor() {
    quadradoAzul.classList.remove("primeiro-quadrado");
    quadradoAzul.classList.add("trocar-de-cor");
}
*/

/*
const btnTrocarCor = document.getElementById("trocar-de-cor");
const quadradoAzul = document.querySelector(".primeiro-quadrado");

btnTrocarCor.addEventListener("click", trocarCor);

function trocarCor() {
    if (quadradoAzul.classList.contains("primeiro-quadrado")) {
        quadradoAzul.classList.remove("primeiro-quadrado");
        quadradoAzul.classList.add("trocar-de-cor");
    } else if (quadradoAzul.classList.contains("trocar-de-cor")) {
        quadradoAzul.classList.add("primeiro-quadrado");
        quadradoAzul.classList.remove("trocar-de-cor");
    }
}
*/

const btnTrocarCor = document.getElementById("trocar-de-cor");
const quadradoAzul = document.querySelector(".primeiro-quadrado");

btnTrocarCor.addEventListener("click", trocarCor);

function trocarCor() {
    quadradoAzul.classList.toggle("primeiro-quadrado");
    quadradoAzul.classList.toggle("trocar-de-cor");
}