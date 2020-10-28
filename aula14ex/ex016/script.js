function contar() {
    let inicio = document.getElementById("txtini")
    let fim = document.getElementById("txtfim")
    let passo = document.getElementById("txtpas")
    var res = document.querySelector("div#res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p<=0) {
            window.alert("Passo inválido! Considerando PASSO = 1")
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else if (i > f) {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
