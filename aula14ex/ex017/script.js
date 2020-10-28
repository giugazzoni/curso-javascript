function tabuada() {
    let numero = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    let res = document.querySelector("div#res")

    if (numero.value.length == 0) {
        window.alert('Você precisa inserir um número!')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }   
}