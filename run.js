async function readfile(fileName,split) {
    const response = await fetch(`./data/${fileName}.txt`)
    const text = await response.text()
    return text.split(splitName)
}

function renderCauHoi(cauHoi) {
    
    return `<div id='' class="cauHoi">${cauHoi.replaceAll(' ', ' ') }</div>`
}

function ready() {
    readfile('sinh').then((data) => {
        data.shift()
        // console.log(data);
        data.forEach((cauHoi) => {
            // console.log(renderCauHoi(cauHoi))
        // $('#listCauHoi').append(`<div>cc     cc</div>`)
        $('#listCauHoi').append(renderCauHoi(cauHoi))
        }
        )
    })
}

ready()

function removeAccents(str) {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function search() {
    var input, filter, a, i, txtValue;
    input = $("#search").val();
    console.log(input);
    filter = removeAccents(input).replaceAll(' ', '').toUpperCase();
    title = $(".cauHoi")
    bigcard = $("#listCauHoi").children()
    for (i = 0; i < title.length; i++) {
        a = title[i]
        txtValue = a.textContent || a.innerText;
        if (removeAccents(txtValue).replaceAll(' ', '').toUpperCase().indexOf(filter) > -1) {
            bigcard[i].style.display = "";
        } else {
            bigcard[i].style.display = "none";
        }
    }
}

document.querySelector("#search").onkeyup = _ => {
    search();
}

let searchParams = new URLSearchParams(window.location.search)
var fileName = searchParams.get('file')
var splitName = searchParams.get('split')