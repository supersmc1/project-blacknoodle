const cooks = document.querySelector('.cooks')
const tangs = document.querySelector('.tang')
const gos = document.querySelector('.gos')
const jjas = document.querySelector('.jjas')
const dinks = document.querySelector('.dinks')

const newDiv = document.createElement('div')
const closebtn = document.createElement('div')

function newDivstyle(){
  newDiv.style.width = '60vw'
  newDiv.style.height = '40vh'
  newDiv.style.border = '2px solid rgb(170, 18, 18)'
  newDiv.style.backgroundRepeat = 'no-repeat'
  newDiv.style.backgroundSize = '60vw 40vh'
  newDiv.style.backgroundPosition = 'center'
  newDiv.style.position = 'absolute'
  newDiv.style.display = 'flex'
  newDiv.style.justifyContent = 'flex-end'
  newDiv.style.alignItems = 'center'
}

function closeBtnbotton(){
  closebtn.style.width = '3vw'
  closebtn.style.height = '3vw'
  closebtn.textContent = '<'
  closebtn.style.fontSize = '3vw'
  closebtn.style.color = 'rgb(170, 18, 18)'
  closebtn.style.cursor = 'pointer'
}

function maxwidth(){
  if(matchMedia("screen and (max-width:1060px)").matches){
    newDiv.style.width = '70vw'
    newDiv.style.height = '40vh'
    newDiv.style.border = '2px solid rgb(170, 18, 18)'
    newDiv.style.backgroundRepeat = 'no-repeat'
    newDiv.style.backgroundSize = '70vw 40vh'
    newDiv.style.backgroundPosition = 'center'
    newDiv.style.position = 'absolute'
    newDiv.style.display = 'flex'
    newDiv.style.justifyContent = 'flex-end'
    newDiv.style.alignItems = 'center'
    console.log('hello')
  }
  if(matchMedia("screen and (max-width:750px)").matches){
    console.log('hoho')
    newDiv.style.width = '70vw'
    newDiv.style.height = '30vh'
    newDiv.style.border = '2px solid rgb(170, 18, 18)'
    newDiv.style.backgroundRepeat = 'no-repeat'
    newDiv.style.backgroundSize = '70vw 30vh'
    newDiv.style.backgroundPosition = 'center'
    newDiv.style.position = 'absolute'
    newDiv.style.display = 'flex'
    newDiv.style.justifyContent = 'flex-end'
    newDiv.style.alignItems = 'center'
    console.log('hello')
  }
  if(matchMedia("screen and (max-width:500px)").matches){
    console.log('hoho')
    newDiv.style.width = '70vw'
    newDiv.style.height = '28vh'
    newDiv.style.border = '2px solid rgb(170, 18, 18)'
    newDiv.style.backgroundRepeat = 'no-repeat'
    newDiv.style.backgroundSize = '70vw 28vh'
    newDiv.style.backgroundPosition = 'center'
    newDiv.style.position = 'absolute'
    newDiv.style.display = 'flex'
    newDiv.style.justifyContent = 'flex-end'
    newDiv.style.alignItems = 'center'
    console.log('hello')
  }
}


tangs.addEventListener('click',function(){
  cooks.appendChild(newDiv)
  newDivstyle()
  newDiv.style.backgroundImage = 'url(./image/튀김.png)'
  newDiv.appendChild(closebtn)
  closeBtnbotton()
  maxwidth()
})

gos.addEventListener('click',function(){
  cooks.appendChild(newDiv)
  newDivstyle()
  newDiv.style.backgroundImage = 'url(./image/볶음요리.png)'
  newDiv.appendChild(closebtn)
  closeBtnbotton()
  maxwidth()

})

jjas.addEventListener('click',function(){
  cooks.appendChild(newDiv)
  newDivstyle()
  newDiv.style.backgroundImage = 'url(./image/식사류.png)'
  newDiv.appendChild(closebtn)
  closeBtnbotton()
  maxwidth()
})

dinks.addEventListener('click',function(){
  cooks.appendChild(newDiv)
  newDivstyle()
  newDiv.style.backgroundImage = 'url(./image/음료.png)'
  newDiv.appendChild(closebtn)
  closeBtnbotton()
  maxwidth()
})

closebtn.addEventListener('click',function(){
  cooks.removeChild(newDiv)
  
})
