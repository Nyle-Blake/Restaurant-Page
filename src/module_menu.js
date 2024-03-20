const createMenu = () => {

  const container = document.createElement('div')
  container.classList.add('container')

  const logo = document.createElement('h1')
  logo.textContent = 'The Honey Badger'

  const btn1 = document.createElement('button')
  btn1.setAttribute('id', 'main')
  btn1.textContent = 'Main'

  const btn2 = document.createElement('button')
  btn2.setAttribute('id', 'menu')
  btn2.textContent = 'Menu'

  const btn3 = document.createElement('button')
  btn3.setAttribute('id', 'contacts')
  btn3.textContent = 'Contacts'

  container
    .appendChild(document.createElement('header'))
    .appendChild(logo)
    .insertAdjacentElement('afterend', document.createElement('nav'))
    .appendChild(btn1)
    .insertAdjacentElement('afterend', btn2)
    .insertAdjacentElement('afterend', btn3)

  const box1 = document.createElement('div')
  const box2 = document.createElement('div')
  box1.classList.add('box1')
  box2.classList.add('box2')

  const box1H3 = document.createElement('h3')
  const box2H3 = document.createElement('h3')
  const box1P = document.createElement('p')
  const box2P = document.createElement('p')

  box1H3.textContent = 'Lorem Ipsum'
  box2H3.textContent = 'Lorem Ipsum'
  box1P.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  box2P.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  box1
    .appendChild(box1H3)
    .insertAdjacentElement('afterend', box1P)
  
  box2
    .appendChild(box2H3)
    .insertAdjacentElement('afterend', box2P)

  container
    .appendChild(document.createElement('main'))
    .appendChild(box1)
    .insertAdjacentElement('afterend', box2)
  
  document.body.appendChild(container);

  console.log('menuModule')

  return;
  
}

export { createMenu }