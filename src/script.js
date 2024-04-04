const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnProx = document.getElementById('prox-button')

// const home = document.querySelectorAll('.home-container')
const btnHome = document.getElementById('btn-home')
const btnPaciente = document.getElementById('btn-paciente')
// const portalDoPaciente = document.querySelectorAll('portal-paciente')
const apoio = document.getElementById('btn-apoio')
const btnContato = document.getElementById('btn-contato')

let currentSlide = 0; 

function showContainer (id){
    var conteudos = document.querySelectorAll('.content'); 
    conteudos.forEach(function (conteudo) {
        conteudo.style.display = 'none';
        var conteudo = document.getElementById(id);
        conteudo.style.display = 'flex'; 
    });
    if (id != '.home-container'){
        document.getElementById('.home-container').style.display  = 'none';
    } else {
        document.getElementById('.home-container').style.display  = 'flex';
    }
    
}
// btnHome.addEventListener('click', showContainer(home))
// btnPaciente.addEventListener('click', showContainer(portalDoPaciente))



function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}
function prevSlider(){
    hideSlider()
    if (currentSlide === 0){
        currentSlide = slider.lenght-1
    }
    else{
        currentSlide --
    }
    showSlider()
}

function proxSlider(){
    hideSlider()
    if (currentSlide === slider.lenght-1){
        currentSlide = 0
    }
    else{
        currentSlide ++
    }
    showSlider()
}

// btnPrev.addEventListener('click', () => console.log('clicado'))
btnPrev.addEventListener('click', prevSlider)
btnProx.addEventListener('click', proxSlider)


btnHome.addEventListener('click', ()=> {
    showContainer('home-container');
})
btnPaciente.addEventListener('click', ()=> {
    showContainer('portal-paciente');
})

apoio.addEventListener('click', ()=> {
    showContainer();
})
btnContato.addEventListener('click', ()=> {
    showContainer(this);
})

console.log(slider) 

document.getElementById('btn-paciente').addEventListener('click', function () {
    console.log("Botão Paciente clicado!"); // Verifica se o evento está sendo acionado
    showContainer('portal-paciente');
});