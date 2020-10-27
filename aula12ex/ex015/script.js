function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/homem-teen.png')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/mulher-teen.png')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}