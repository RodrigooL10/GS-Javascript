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