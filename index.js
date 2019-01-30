const moveDodgerLeft = () => {
  const dodger = document.getElementById ('dodger')
  dodger.style.left
}

const moveDodgerRight = () => {
  
}

const moveDodgerHelper = (event) => {
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } 
}

document.addEventListener('keydown', moveDodgerHelper)