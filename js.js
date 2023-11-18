const campoUser = document.querySelector("#user");
const campoSenha = document.querySelector("#senha");
const buttonEnviar = document.querySelector(".buttonForm1");
const campoData = document.querySelector("#data");
const campoExame = document.querySelector("#Exames");
const buttonEnviar2 = document.querySelector(".sendButton");

const buttonExpand = document.querySelector(".BTipos");
const exames = document.querySelector(".Tipos")


const pMensagem = document.createElement("p");
pMensagem.setAttribute("class", "erro");

function clearForm() {
    campoUser.value = '';
    campoSenha.value = '';
    campoData.value = '';
    campoExame.value = '';
}

function mostrarMensagemErro(campo, mensagem) {
    pMensagem.textContent = mensagem;
    campo.parentNode.insertBefore(pMensagem, campo.nextSibling);
}

function esconderMensagemErro() {
    pMensagem.textContent = '';
}

buttonEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    if (campoUser.value === '') {
        mostrarMensagemErro(campoUser, "Preencha o campo Email!");
        return false;
    }

    if (campoSenha.value === '') {
        mostrarMensagemErro(campoSenha, "Preencha o campo Senha!");
        return false;
    }

    esconderMensagemErro();
    clearForm();
});

buttonEnviar2.addEventListener("click", function (event) {
    event.preventDefault();
    if (campoData.value === '') {
        mostrarMensagemErro(campoData, "Preencha o campo Data!");
        return false;
    }
    if (campoExame.value === '') {
        mostrarMensagemErro(campoExame, "Preencha o campo Exame")
        return false;
    }

    esconderMensagemErro();
    clearForm();

});

buttonExpand.addEventListener("click", function(){
    exames.classList.add("d-block");
});

const tristeza = document.querySelector(".botao-com-imagem1");
const raiva = document.querySelector(".botao-com-imagem2");
const alegria = document.querySelector(".botao-com-imagem3");
const medo = document.querySelector(".botao-com-imagem4");

tristeza.addEventListener("click", function(){
    alert("Obrigado por avaliar!");
})

raiva.addEventListener("click", function(){
    alert("Obrigado por avaliar!");
})

alegria.addEventListener("click", function(){
    alert("Obrigado por avaliar!");
})

medo.addEventListener("click", function(){
    alert("Obrigado por avaliar!");
})

