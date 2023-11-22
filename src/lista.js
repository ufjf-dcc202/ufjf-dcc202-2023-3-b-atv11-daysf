const Lista = [
    "Um",
    "Dois",
    "Três"
];

function getLista(){
    return Lista;
}

function adicionaNaLista(item){
    Lista.push(item);
}

function removeDaLista(posicao){
    Lista.splice(posicao, 1);
}

function limpaLista(){
    Lista.splice(0);
}

export {getLista, adicionaNaLista,removeDaLista, limpaLista}