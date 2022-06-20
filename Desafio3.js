"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let buttonUpdate = document.getElementById('atualizar-saldo');
let buttonClear = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let saldo = document.getElementById('saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (saldo) {
        saldoTotal += soma;
        saldo.innerHTML = saldoTotal.toString();
        limparCampo();
    }
}
var limparCampo = () => {
    soma.value = '';
};
function limparSaldo() {
    if (saldo) {
        saldoTotal = 0;
        saldo.innerHTML = saldoTotal.toString();
    }
}
if (buttonUpdate) {
    buttonUpdate.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
buttonClear.addEventListener('click', () => {
    limparSaldo();
});
