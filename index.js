let screen = document.querySelector('.display')
let buttons = document.querySelectorAll('button')

let screenValue = '';
for (item of buttons) {
   item.addEventListener('click', (e)=>{
    let buttonText = e.target.innerText

    if(buttonText == 'on'){
       if(screen.style.backgroundColor != 'red'){
         screen.style.backgroundColor = 'red'
       }else{
         screen.style.backgroundColor = 'white'
       }
   }

    else if(buttonText == 'Clear'){
       screenValue = '' ;
      screen.value = screenValue;
    }
    else if(buttonText == '='){
         screen.value = eval(screenValue)
    }
    else{
       screenValue += buttonText
       screen.value = screenValue
    }  console.log(buttonText);
   })
   
}