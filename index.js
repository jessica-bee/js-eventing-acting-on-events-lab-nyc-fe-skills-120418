const moveDodgerLeft = () => {
  const dodger = document.getElementById ('dodger')
  const currentLeft = dodger.style.left
  const currentLeftNumber = currenLeft.replace('px', '')
}

const moveDodgerRight = () => {
  
}

const moveDodgerHelper = (event) => {
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } 
}

document.addEventListener('keydown', moveDodgerHelper)