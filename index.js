const moveDodgerLeft = () => {
  const dodger = document.getElementById ('dodger')
  const currentLeft = dodger.style.left
  let currentLeftNumber = currentLeft.replace('px', '')
  currentLeft - parseInt(currentLeftNumber, 10)
  dodger.style.left = currentLeftNumber - 5 + 'px'
}

const moveDodgerRight = () => {
  const dodger = document.getElementById ('dodger')
  const currentRight = dodger.style.left
  let currentRightNumber = currentLeft.replace('px', '')
  currentRight - parseInt(currentRightNumber, 10)
  dodger.style.left = currentRightNumber + 5 + 'px'
}

const moveDodgerHelper = (event) => {
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } if (event.keyCode === 39){
    moveDodgerRight()
  }
}

document.addEventListener('keydown', moveDodgerHelper)