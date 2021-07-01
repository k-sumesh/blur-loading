const laodText = document.querySelectorAll('.loading-text')[0]
const bg = document.querySelectorAll('.bg')[0]
let load = 0
let interval = setInterval(bluring, 30)
function bluring() {
  load++
  if (load > 99) {
    clearInterval(interval)
  }
  laodText.innerHTML = `${load}%`
  laodText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (number, inMin, inMax, outMin, outMax) =>
  ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
console.log(scale(5, 0, 10, -50, 50))
