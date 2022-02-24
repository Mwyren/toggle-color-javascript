const btnToggle = document.querySelector('.btn')
let changeColor = 0

btnToggle.addEventListener('click', () => {

  if(changeColor === 0) {
    document.documentElement.style.setProperty('--background-color', '#333')
    document.documentElement.style.setProperty('--color', 'rgb(216, 186, 186)')
    document.documentElement.style.setProperty('--background-btn', 'rgb(216, 186, 186)')
    document.documentElement.style.setProperty('--color-btn', '#333')

    changeColor++

  } else {
    document.documentElement.style.setProperty('--background-color', 'rgb(216, 186, 186)')
    document.documentElement.style.setProperty('--color', '#333')
    document.documentElement.style.setProperty('--background-btn', '#333')
    document.documentElement.style.setProperty('--color-btn', 'rgb(216, 186, 186)')

    changeColor--

  }
})