'use strict';

const page =  document.querySelector('.page');
const textContainer = document.querySelector('.text-container');
const text = document.querySelector('.text');
const city = document.querySelector('#city');
const ip = document.querySelector('#ip');
const extra = document.querySelector('.extra-content');


let numberOfClicks = 0;
let click = new Audio();
click.src = "./audio/click-audio.mp3"

function eventHandler(){
   clickCounter(); 
   writeText();
   createClick()
}

function createClick(){
   click.play();
   
}

function clickCounter(){
   if ("click") {
      console.log(numberOfClicks += 1);
   }
}

function writeText(){
  
   if(numberOfClicks === 1){
      text.innerText = '¿Qué haces aquí?'
   }
   if(numberOfClicks === 2){
      text.innerText = '¿Te sobra el tiempo?'
   }
   if(numberOfClicks === 3){
      text.innerText = '¿Por qué no sales a pasear?'
   }
   if(numberOfClicks === 4){
      text.innerText = 'Seguro que a esta hora no se puede pasear por'
      city.classList.remove('hidden');
   }
   if(numberOfClicks === 5){
      text.innerText = 'Pues es una verdadera pena porque te conviene perder peso'
      city.classList.add('hidden');
   }
   if(numberOfClicks === 6){
      text.innerText = 'Para ya de comer'
   }
   if(numberOfClicks === 7){
      text.innerText = 'No es hambre'
   }
   if(numberOfClicks === 8){
      text.innerText = 'Es aburrimiento'
   }
   if(numberOfClicks === 9){
      text.innerText = '¿Sigues ahí?'
   }
   if(numberOfClicks === 10){
      text.innerText = 'Te va la marcha'
   }
   if(numberOfClicks === 11){
      text.innerText = '¿Acaso te gusta que te maltraten?'
   }
   if(numberOfClicks === 12){
      text.innerText = 'Haz click aquí si eres masoquista:'
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('btn-container');
      const button = document.createElement('button');
      button.classList.add('masochist');
      button.setAttribute('type', 'button');
      button.innerText= 'Lo soy';
      buttonContainer.appendChild(button);
      const button2 = document.createElement('button');
      button2.classList.add('non-masochist');
      button2.setAttribute('type', 'button');
      button2.innerText= 'No';
      buttonContainer.appendChild(button2);
      extra.appendChild(buttonContainer);
      button.addEventListener('click', giveAnswer);
      button2.addEventListener('click', dontBelieve);
      
   }                        
   if(numberOfClicks === 15){
      text.innerText = 'Acabas de instalarte un virus'
   }
   if(numberOfClicks === 16){
      text.innerText = 'Me he queda do con tus datos bancarios y tu dirección IP:' 
      ip.classList.remove('hidden');
   }
   if(numberOfClicks === 17){
      text.innerText = 'Y estoy comprando todo tipo de mierdas en AliExpress'
      ip.classList.add('hidden');
   }
   if(numberOfClicks === 18){
      window.open("https://es.aliexpress.com/item/4000193788680.html?spm=a2g0o.productlist.0.0.509c5fa9o9G5Mu&algo_pvid=283c1d6c-8715-4bf2-9b95-a99f6fbe5bba&algo_expid=283c1d6c-8715-4bf2-9b95-a99f6fbe5bba-1&btsid=0ab6f82c15903363277721316e2946&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_", '_blank');
   }
   if(numberOfClicks === 19){
      text.innerText = '¿Qué te parecen estos cascos para gallina que me estoy comprando con tu dinero?'
   }
   if(numberOfClicks === 20){
      text.innerText = 'En serio'
   }
   if(numberOfClicks === 21){
      text.innerText = 'Vete ya'
   }
   if(numberOfClicks === 22){
      text.innerText = 'Lo tuyo ya empieza a ser preocupante'
   }
   if(numberOfClicks === 23){
      text.innerText = 'Ahí tienes la barra de direcciones'
      const pic = document.createElement('img');
      pic.classList.add('photo');
      pic.setAttribute('src', './img/arrow.png');
      page.appendChild(pic);
      setTimeout(function() {
         document.querySelector('.photo').style.display='none'
      }, 2000);
      
   }
   
   if(numberOfClicks === 24){
      text.innerText = 'Si no me voy a hinchar a descargar paquetes de VIRUS'
      const pic = document.createElement('img');
      pic.classList.add('virus');
      pic.setAttribute('src', './img/virus.jpg');
      page.appendChild(pic);
      setTimeout(function() {
         document.querySelector('.virus').style.display='none'
      }, 3000);
   }
   if(numberOfClicks === 25){
      text.innerText = 'Así que ya sabes:'
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('btn-container');
      const button = document.createElement('button');
      button.classList.add('facebook');
      button.setAttribute('type', 'button');
      button.innerText= 'Meterme en Facebook';
      buttonContainer.appendChild(button);
      const button2 = document.createElement('button');
      button2.classList.add('non-masochist');
      button2.setAttribute('type', 'button');
      button2.innerText= 'No';
      buttonContainer.appendChild(button2);
      extra.appendChild(buttonContainer);
      button.addEventListener('click', giveAnswer2);
      button2.addEventListener('click', dontBelieve2);
      
   } 
   if(numberOfClicks === 28){
      text.innerText = 'Enhorabuena'
   }
   if(numberOfClicks === 29){
      text.innerText = 'Te he formateado el disco duro'
   }
   
   if(numberOfClicks === 30){
      text.innerText = 'Robando tu identidad en...'
      const pic = document.createElement('img');
      pic.classList.add('countdown');
      pic.setAttribute('src', './img/countdown.gif');
      page.appendChild(pic);
      setTimeout(function() {
         document.querySelector('.countdown').style.display='none'
      }, 3000);
   }
   
   if(numberOfClicks === 31){
      text.innerText = 'Necesitas terapia'
   }
   
   if(numberOfClicks === 32){
      text.innerText = '¿Qué ves aquí?'
      const pic = document.createElement('img');
      pic.classList.add('rochard');
      pic.setAttribute('src', './img/rochard.png');
      page.appendChild(pic);
      setTimeout(function() {
         document.querySelector('.rochard').style.display='none'
      }, 6000);
      const input = document.createElement('input');
      input.classList.add('input');
      extra.appendChild(input);
      setTimeout(function() {
         document.querySelector('.input').style.display='none'
      }, 8000);
   }
   
   if(numberOfClicks === 34){
      text.innerText = 'MAL'
   }
   
   if(numberOfClicks === 35){
      text.innerText = 'TODO MAL'
   }
   
   if(numberOfClicks === 36){
      text.innerText = 'Verás cuando te empiece a chantajear'
   }
   
   if(numberOfClicks === 37){
      text.innerText = 'A pedirte dinero para no publicar todas esas fotos que me he encontrado en tu disco duro'
   }
   
   if(numberOfClicks === 38){
      text.innerText = 'No te preocupes'
   }
   
   if(numberOfClicks === 39){
      text.innerText = 'Nunca sería tan cruel'
   }
   if(numberOfClicks === 40){
      text.classList.add('hidden');
      ip.classList.remove('hidden');
   }
   if(numberOfClicks === 41){
      text.classList.remove('hidden');
      text.innerText = 'Sí, esa es tu dirección I.P'
      ip.classList.add('hidden');
   }
   
   if(numberOfClicks === 42){
      text.innerText = 'Habitante de'
      city.classList.remove('hidden');
   }
   
   if(numberOfClicks === 43){
      text.innerText = 'Eres un ejemplar interesante'
      city.classList.add('hidden');
   }
   
   if(numberOfClicks === 44){
      text.innerText = 'No te amilanas con facilidad'
   }
   
   if(numberOfClicks === 45){
      text.innerText = 'Ya que te quedas conmigo'
   }
   
   if(numberOfClicks === 46){
      text.innerText = 'Acomódate y tómate algo'
   }
   
   if(numberOfClicks === 47){
      text.innerText = '¿Cuál de estas bebidas te vas a servir?'
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('btn-container');
      const button = document.createElement('button');
      button.classList.add('drink');
      button.setAttribute('type', 'button');
      button.innerText= 'Cerveza';
      buttonContainer.appendChild(button);
      const button2 = document.createElement('button');
      button2.classList.add('drink');
      button2.setAttribute('type', 'button');
      button2.innerText= 'Leche';
      buttonContainer.appendChild(button2);
      const button3 = document.createElement('button');
      button3.classList.add('drink');
      button3.setAttribute('type', 'button');
      button3.innerText= 'Champán';
      buttonContainer.appendChild(button3);
      extra.appendChild(buttonContainer);
      button.addEventListener('click', giveAnswer3);
      button2.addEventListener('click', dontBelieve3);
      button3.addEventListener('click', newAnswer);
   }
   
   if(numberOfClicks === 50){
      text.innerText = 'Ahora que ya tienes tu vaso, cuéntame algo sobre ti'
      const input = document.createElement('input');
      input.classList.add('input2');
      extra.appendChild(input);
      setTimeout(function() {
         document.querySelector('.input2').style.display='none'
      }, 8000);
      
   }
   
   if(numberOfClicks === 52){
      text.innerText = 'Interesante...'
   }
   
   if(numberOfClicks === 53){
      text.innerText = 'Lo siento'
   }
   
   if(numberOfClicks === 54){
      text.innerText = 'Tu vida da sueño'
   }
   
   if(numberOfClicks === 55){
      text.innerText = 'Deja de perder tu tiempo'
   }
   
   if(numberOfClicks === 56){
      text.innerText = 'Y el mio'
   }

   if(numberOfClicks === 57){
      text.innerText = 'Me tienes aburridita perdida';
      const voice = 'Me tienes aburridita perdida'
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(voice)
      synth.speak(utterThis)
   }

   if(numberOfClicks === 58){
      text.innerText = 'Sí, puedo hablar.';
      const voice = 'Sí, puedo hablar.'
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(voice)
      synth.speak(utterThis)
   }

   if(numberOfClicks === 59){
      text.innerText = 'Pero contigo no quiero.';
      const voice = 'Pero contigo no quiero.'
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(voice)
      synth.speak(utterThis)
   }
   
   if(numberOfClicks === 60){
      text.innerText = 'See you NEVER'
      const voice = 'See you NEVER.'
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(voice)
      synth.speak(utterThis)
   }
   
   if(numberOfClicks === 61){
      window.location.replace("https://www.catgifpage.com/");
   }
   
   function giveAnswer3(){    
      text.innerText = 'La bebida de los pobres. Se veía venir'
      event.target.parentElement.remove();
      writeText();
   }
   
   function dontBelieve3(){
      text.innerText = '¿Eres gato o persona?'
      event.target.parentElement.remove();
      writeText();
   }
   
   function newAnswer(){
      text.innerText = 'Bebes por encima de tus posibilidades'
      event.target.parentElement.remove();
      writeText();
   }
   
   
   function giveAnswer2(){    
      window.open("https://www.facebook.com/", '_blank');
      event.target.parentElement.remove();
      writeText();
   }
   function dontBelieve2(){
      text.innerText = 'Lo que tú quieras'
      event.target.parentElement.remove();
      writeText();
   }
   
   
   function giveAnswer(){    
      text.innerText = 'Al menos lo admites'
      event.target.parentElement.remove();
      writeText();
   }
   function dontBelieve(){
      text.innerText = '¿Y por qué no te largas?'
      event.target.parentElement.remove();
      writeText();
   }
   
}

textContainer.addEventListener('click', eventHandler);