
// create and append basic page elements
const container  = document.createElement ('div');
container.className = "container";
container.innerHTML = `<h1 class="title"> Rss Keyboard </h1>
<textarea name="textarea" id="text" class="textarea" autofocus="true"></textarea>
<div class="keyboard"></div>
<p class="text">Для переключения языка комбинация: левыe ctrl + alt</p>
<p class="text">Клавиатура создана в операционной системе Windows</p>
`
document.body.append(container);

const textarea = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard');

 //create buttons in keyboard
let keysArray = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock',  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control',  'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

/*  document.onkeydown = (event) => {
  console.log("key:" + event.key)
  console.log( "code:"+ event.code)
  keysArray.push(event.key);
}*/


//add buttons in keyboard


function createBtns() {
  for (let i=0; i<keysArray.length; i++) {
    let btn = document.createElement('div');
    btn.innerHTML = keysArray[i]
   // btn.innerHTML = keysArray[i].toUpperCase();
      if (keysArray[i] === 'Control') btn.innerHTML = "Ctrl";
      if (keysArray[i] === 'ArrowUp') btn.innerHTML = '▲';
      if (keysArray[i] === "ArrowLeft") btn.innerHTML = '◄';
      if (keysArray[i] === "ArrowDown") btn.innerHTML = '▼';
      if (keysArray[i] === "ArrowRight") btn.innerHTML = '►';

    btn.classList.add('btn');
      if (keysArray[i] ==='Backspace')  btn.classList.add('btn', 'btn_backspace');
      if (keysArray[i] ==='Tab')  btn.classList.add('btn', 'btn_tab');
      if (keysArray[i] ==='Delete')  btn.classList.add('btn', 'btn_del');
      if (keysArray[i] ==='CapsLock')  btn.classList.add('btn', 'btn_caps');
      if (keysArray[i] ==='Enter')  btn.classList.add('btn', 'btn_enter');
      if (keysArray[i] ==='Shift')  btn.classList.add('btn', 'btn_shift');
      if (keysArray[i] ===' ')  btn.classList.add('btn', 'btn_space');
      if (keysArray[i] === 'Control')   btn.classList.add('btn', 'btn_ctrl');
      if (keysArray[i] ==='Alt')  btn.classList.add('btn', 'btn_alt');

      btn.setAttribute('data-btn', keysArray[i]);
      btn.setAttribute('data-big', keysArray[i].toUpperCase());

    keyboard.append(btn);
  }
}

createBtns();

//Add active mode to buttons on PC Keyboard
let btnKey = document.querySelector('.keyboard .btn');
let btnKeys = document.querySelectorAll('.keyboard .btn');

document.addEventListener('keydown', (event) => {
 // console.log("key:" + event.key) //key:f
 // console.log( "code:"+ event.code) //code:KeyF
    btnKeys.forEach(el => {
    el.classList.remove('active');
  })
  document.querySelector('.keyboard .btn[data-btn = "'+ event.key +'"]').classList.add('active');
  textarea.focus()
})

//Add active mode to buttons on virtual Keyboard
btnKeys.forEach(el => {
  el.addEventListener('click', function(event) {
    btnKeys.forEach(el => {
      el.classList.remove('active')
    });
    let code = this.getAttribute('data-btn');
    this.classList.add('active');
    textarea.focus();
    textarea.value += code;
  }
  )
})
















