function pegaUrl(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main () {
    let data = pegaUrl("http://www.amock.io/api/fcmaia/countries")
    let paises = JSON.parse(data)
    
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
    console.log(paises)
}

main()