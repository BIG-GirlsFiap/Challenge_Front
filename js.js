const campoUser = document.querySelector("#user");
const campoSenha = document.querySelector("#senha");
const buttonEnviar = document.querySelector("button");

// Criando um elemento p
const pMensagem = document.createElement("p");


function clearForm() {
    campoUser.value = '';
    campoSenha.value = '';
}


buttonEnviar.addEventListener("click", function(event){
    event.preventDefault();
    if (campoUser.value === ''){
        // alert("Preencha o campo nome!");
        pMensagem.textContent = "Preencha o campo Email!";
        campoUser.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "erro");
        return false;
    }

    if (campoSenha.value === ''){
        // alert("Preencha o campo cidade!");
        pMensagem.textContent = "Preencha o campo Senha!";
        campoSenha.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "erro");   
        return false;
    }
    pMensagem.classList.add('d-none');
    clearForm();    
});