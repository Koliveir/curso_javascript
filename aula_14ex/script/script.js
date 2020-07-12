/*var inicio = 1
var fim = 100
var passo = 1

while (inicio <= fim) {
    console.log(`Loop ${inicio}`)
    inicio += passo
}*/

var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var salto = window.document.getElementById('salto')
var res = window.document.getElementById('res')

while (inicio <= fim) {
    res.innerHTML=`contagem ${inicio}`
    inicio+=salto
}