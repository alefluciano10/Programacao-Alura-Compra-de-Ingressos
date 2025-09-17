function comprar() {

    /* Recuperando os dados */

    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    /* Verificar se a quantidade é um número positivo */

    if (isNaN(quantidadeIngresso) || quantidadeIngresso <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    /* Validação dos ingressos */

    if(tipoIngresso.value == 'pista') {
        comprarPista(quantidadeIngresso);
    } else if(tipoIngresso.value == 'Superior') {
        comprarSuperior(quantidadeIngresso);
    } else {
        comprarInferior(quantidadeIngresso);
    }
}

function comprarPista(quantidadeIngresso) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    /* Validação da quantidade de ingressos para a pista */

    if(quantidadeIngresso > quantidadePista) {
        alert('Quantidade indisponível!');
    } else {
        quantidadePista = quantidadePista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidadeIngresso) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    /* Validação da quantidade de ingressos para a cadeira superior */

    if(quantidadeIngresso > quantidadeSuperior) {
        alert('Quantidade indisponível!');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
         alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidadeIngresso) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    /* Validação da quantidade de ingressos para a cadeira inferior */

    if(quantidadeIngresso > quantidadeInferior) {
        alert('Quantidade indisponível!');
    } else {
        quantidadeInferior = quantidadeInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
    }
}