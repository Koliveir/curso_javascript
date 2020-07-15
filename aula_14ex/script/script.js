/*function contagem() {
    var inicio = window.document.getElementById('inicio')
    var ini = Number(inicio.value)
    var fim = window.document.getElementById('fim')
    var fim_f = Number(fim.value)
    var salto = window.document.getElementById('salto')
    var sal = Number(salto.value)
    var res = window.document.getElementById('res')
    //res.innerHTML=""
    if (sal == 0) {
        window.alert('Verfique o número de salto para não causar loop')
    } else if  (ini < fim_f) {
            while (ini <= fim_f) {
                res.innerHTML += `<p>&#x1F449 ${ini}, </p>`
                ini+=sal
            }
        } else if (fim_f <= ini) {
            while (fim_f <= ini) {
                res.innerHTML += `<p>&#x1F449 ${ini}, </p>`
                ini-=sal
            }
        }
        //res.innerHTML = '<p>&#x1FAC1</p>'
    }
    */



    
    
var inicio = 20
var fim = 1
var salto = 1

if (salto == 0 || salto == null) {
    console.log('Var Salto está vazio')
} else {
    if (inicio <= fim) {
        while (inicio <= fim) {
            console.log(`LooP ${inicio}`)
            inicio += salto
        }
    } else {
        while (fim <= inicio) {
            console.log(`LooP ${fim}`)
            fim += salto
        }
    }
}