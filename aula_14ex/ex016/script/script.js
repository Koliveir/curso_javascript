/*function contagem() {
    // VARIAVEIS DE CAMINHOS E CONVERTER PARA NÚMEROS
    var inicio = window.document.getElementById('inicio')
    var ini = Number(inicio.value)
    var fim = window.document.getElementById('fim')
    var fim_f = Number(fim.value)
    var salto = window.document.getElementById('salto')
    var sal = Number(salto.value)
    var res = window.document.getElementById('res')
    // LIMPAR TELA
    res.innerHTML=""
    // TESTE PARA SABER SE ALGUM CAMPO ESTÁ VAZIO OU COM ZERO
    if (sal == 0 || sal == null || ini == 0 || ini == null || fim_f == 0 || fim_f == null) {
        window.alert('Verifique campo vazio ou com zero')
    // CONTAGEM
    } else if  (ini < fim_f) {
            while (ini <= fim_f) {
                res.innerHTML += `<p>&#x1F449 ${ini} </p>`
                ini+=sal
            }
    // CONTAGEM REGRESSIVA        
        } else if (fim_f <= ini) {
            while (fim_f <= ini) {
                res.innerHTML += `<p>&#x1F449 ${ini} </p>`
                ini-=sal
            }
        }
    // BANDEIRA DO FIM DA CONTAGEM    
        res.innerHTML += '<p>|> &#x1F3C1 <|</p>'
    }*/

function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let salto = document.getElementById('salto')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        window.alert('Faltam dados!')
    } else {
        res.innerHTML = "Contando: </br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let s = Number(salto.value)
        if (s <= 0) {
            alert('Passo inválido! Considerando passo 1')
            s = 1
        }
        //Contagem crescente
        if (i < f) {
            for (let c = i; c <= f; c += s) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= s) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
    