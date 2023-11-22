import { getLista } from "./src/lista.js";

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLImpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

atualizarListaOrdenada();

function atualizarListaOrdenada(){
    const lista = getLista();
    for (let i = 0; i < lista.length; i++){
        adicionaElementoNaListaOrdenada(lista[i]);
    }
}

function adicionaElementoNaLista(texto){
const li = document.createElement("li");
li.textContent = texto;
olItens.appendChild(li);
}