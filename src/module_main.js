const createMain = () => {

  const container = document.createElement('div')
  container.classList.add('container')

  const logo = document.createElement('h1')
  logo.textContent = 'The Honey Badger'

  const btn1 = document.createElement('button')
  btn1.textContent = 'Main'

  const btn2 = document.createElement('button')
  btn2.textContent = 'Menu'

  const btn3 = document.createElement('button')
  btn3.textContent = 'Contacts'

  container
    .appendChild(document.createElement('header'))
    .appendChild(logo)
    .insertAdjacentElement('afterend', document.createElement('nav'))
    .appendChild(btn1)
    .insertAdjacentElement(btn2)
    .insertAdjacentElement(btn3)

  const box1 = document.createElement('div')
  const box2 = document.createElement('div')
  box1.classList.add('box1')
  box2.classList.add('box2')

  box1
    .appendChild(document.createElement('h3'))
    .insertAdjacentElement('afterend', document.createElement('p'))
  
  box2
    .appendChild(document.createElement('h3'))
    .insertAdjacentElement('afterend', document.createElement('p'))

  container
    .appendChild(document.createElement('main'))
    .appendChild(box1)
    .insertAdjacentElement('afterend', box2)
  
  document.appendChild(container)

  return;

}

export { createMain }