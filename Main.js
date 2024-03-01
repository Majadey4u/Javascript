const openshopping = document.querySelector('.shopping');
const closeshoping = document.querySelector('.closeShoping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const body = doument.querySelector ('body');
const quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', () =>{
  body.classList.add('active')
})
closeShopping.addEventListener('click',() => {
  body.classList.remove('active')
})

let products =[
  {
    id:1,
    name:'PRODUCT 1',
    images: '1.jpg'
    price: 2000
  },
  {
    id:2,
    name:'PRODUCT 2',
    images: '2.jpg'
    price: 2200
  },
  {
    id:3,
    name:'PRODUCT 3',
    images: '3.jpg'
    price: 2300
  },
  {
    id:4,
    name:'PRODUCT 4',
    images: '4.jpg',
    price: 2400
  },
  {
    id:5,
    name:'PRODUCT 5',
    images: '5.jpg',
    price: 2500
  },
  {
    id:6,
    name:'PRODUCT 6',
    images: '6.jpg'
    price: 2600
  },
]

let listCards = [];

const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src = 'img/${value.images}'>
      <div class ='title'>${value.name}</div>

    ` 
  })
    
}