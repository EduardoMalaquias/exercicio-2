function pegaUrl(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(pais) {
    linha = document.createElement("tr")
    tdCode = document.createElement("td")
    tdNome = document.createElement("td")
    tdFronteira = document.createElement("td")

    tdCode.innerHTML = pais.code
    tdNome.innerHTML = pais.name
    tdFronteira.innerHTML = pais.fronteiras

    linha.appendChild(tdCode)
    linha.appendChild(tdNome)
    linha.appendChild(tdFronteira)

    return linha
}

function main () {
    let data = pegaUrl("http://www.amock.io/api/fcmaia/countries")
    let paises = JSON.parse(data)
    let tabela = document.getElementById("tabela")
    paises.sort(function(a, b){
        if (a.fronteiras.length < b.fronteiras.length){
            return 1
        }
        if (a.fronteiras.length > b.fronteiras.length){
            return -1
        } else {
            return 0
        }
    });
    paises.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}

main()