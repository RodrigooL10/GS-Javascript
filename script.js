function Validar(){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value
    var mensagem = document.getElementById("mensagem").value

    let dia = new Date().toLocaleDateString()
    let hora = new Date()
    let minuto = new Date()
        
    if (nome == "") {
        alert("O nome é obrigatório.")
    }
        
    if (email == "") {
        alert("O e-mail é obrigatório.")
    }
        
    if (telefone == "") {
        alert("O telefone é obrigatório.")
    }

    if(mensagem == "") {
        alert("A mensagem é obrigatória.")

    }

    if (nome != "" && email != "" && telefone != "" && mensagem != "")
    {
        alert("Sua mensagem foi enviada com sucesso!\n" + "Data e Hora do envio: " + 
        dia + " às " + hora.getHours() + ":" + minuto.getMinutes() + "h")
    }
}

function Inicio () {
    alert("Seja bem vindo ao projeto ThinkFarm!")
}

var cont = 0
function Tema(){
    cont++
    document.body.style.backgroundImage = 'linear-gradient(to right, rgb(73, 187, 187),  rgb(186, 228, 88), rgb(83, 190, 83))';

    if (cont == 2) {
        document.body.style.backgroundImage = 'linear-gradient(to right, rgb(73, 187, 187), rgb(83, 190, 83))'
        cont = 0
    }
}

var slides = document.querySelectorAll('.slide')
var slideAtual = 0

function showSlide(index) {
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[index].style.display = 'block'
}

function nextSlide() {
    slideAtual++
    if (slideAtual >= slides.length) {
        slideAtual = 0
    }
    showSlide(slideAtual)
}

showSlide(slideAtual)
setInterval(nextSlide, 5000)