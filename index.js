const moveDodgerLeft = () => {
  const dodger = document.getElementById ('dodger')
  const currentLeft = dodger.style.left
  let currentLeftNumber = currentLeft.replace('px', '')
  currentLeft - parseInt(currentLeftNumber, 10)
  dodger.left.style = currentLeftNumber - 1 + 'px'
}

const moveDodgerRight = () => {
  
}

const moveDodgerHelper = (event) => {
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } 
}

document.addEventListener('keydown', moveDodgerHelper)