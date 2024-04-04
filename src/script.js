const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnProx = document.getElementById('prox-button')

// const home = document.querySelectorAll('.home-container')
const btnHome = document.getElementById('btn-home')
const btnPaciente = document.getElementById('btn-paciente')
// const portalDoPaciente = document.querySelectorAll('portal-paciente')
const apoio = document.getElementById('btn-apoio')
const btnContato = document.getElementById('btn-contato')
const btnExameSangue = document.getElementById('btnHome-examedesangue')
const btnExameUltrassom = document.getElementById('btnHome-ultrassom')
const btnExameTomo = document.getElementById('btnHome-tomo')
const btnCheckBoxExame = document.getElementById('checkbox-box-exame')
const btnCheckBoxConsulta = document.getElementById('check-box-consulta')
const btnAvaliation = document.getElementById('btn-avaliation')

const form = document.getElementById('form-box')




let currentSlide = 0

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

function show(id){
    var conteudos = document.querySelectorAll('.content'); 
    conteudos.forEach(function (conteudo) {
        var conteudo = document.getElementById(id);
        conteudo.style.display = 'block'; 
    });
}

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

function resetTexto(){
    btnAvaliation.innerHTML = '';
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
    showContainer('apoio-portal');
})

btnContato.addEventListener('click', ()=> {
    showContainer(this);
})

btnExameSangue.addEventListener('click', ()=>{
    show('procedimento-examesangue')
    
})
btnExameUltrassom.addEventListener('click', ()=>{
    show('procedimento-ultrassom')
})
btnExameTomo.addEventListener('click',()=>{
    show('procedimento-tomo')
})
btnCheckBoxExame.addEventListener('click', ()=> {
    show('exame-container')
})
btnCheckBoxConsulta.addEventListener('click', ()=>{
    show('checkbox-consultas')
})

btnAvaliation.addEventListener('click', ()=>{
    show('agradecimento')
})
btnAvaliation.addEventListener('mouseover', ()=>{
    show('btn-sentimento')
})
console.log(slider) 

document.getElementById('btn-paciente').addEventListener('click', function () {
    console.log("Botão Paciente clicado!"); // Verifica se o evento está sendo acionado
    showContainer('portal-paciente');
});