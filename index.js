const moveDodgerLeft = () => {
  const dodger = document.getElementID ('dodger')
  console.log (dodger.style.left)
}

const moveDodgerRight = () => {
  
}

const moveDodgerHelper = (event) => {
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } 
}

document.addEventListener('keydown', moveDodgerHelper)