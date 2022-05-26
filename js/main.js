const id = document.getElementById.bind(document)

const contentFlipper = id('color-content-flipper')
const btnChangeColor = id('btn-change-color')


function randomColor(){
  return Math.floor(Math.random()*256)
}

function changeColor(){
  let r = randomColor(), g = randomColor(), b = randomColor()

  let elGlobal = document.documentElement
  elGlobal.style.setProperty('--background-color', `rgb(${r}, ${g}, ${b})`)

  contentFlipper.textContent = `rgb(${r}, ${g}, ${b})`

}


btnChangeColor.addEventListener('click', changeColor)