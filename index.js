
const modalFunc = () => {
  const modal = document.querySelector('.cart-modal__overlay')
const cartBtn = document.querySelector('#cart-button')
const overlay = document.querySelector('.cart-modal__overlay')

const openModal = () => {
  modal.classList.add('open')
}

const closeModal = () => {
  modal.classList.remove('open')
}

cartBtn.addEventListener('click', () => {
  console.log(cartBtn);
  modal.classList.add('open')
})


modal.addEventListener('click', (event) => {
   if 
   ((
      event.target.classList.contains('cart-modal__overlay')) ||  (
      event.target.classList.contains('cart-modal__header--close'))
    ) {
         closeModal() 
  }

})
}

const restsFunc = () => {
  const container = document.querySelector('#rests-container')

  const restsArray = [
    {
      id: 0,
      title:'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'pizzaPlus.jpg'
    },
    {
      id: 1,
      title:'Тануки',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'tanuki.jpg'
    },
    {
      id: 2,
      title:'FoodBand',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'FoodBand.jpg'
    },
    {
      id: 3,
      title:'Жадина-пицца',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'greedy.jpg'
    },
    {
      id: 4,
      title:'Точка еды',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'FoodPoint.jpg'
    },
    {
      id: 5,
      title:'PizzaBurger',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'pizzaBurger.jpg'
    },

  ]
    
  const loading = () => {
    container.innerHTML = '<p>Загрузка ...</p>'
  }

  const renderRests = (array) => {
    container.innerHTML = ''

    array.forEach(card => {
      container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html?id=${id=card.id}" class="products-card">
              <div class="products-card__image">
                <img src="/images/rests/${card.image}" alt="pizzaPlus">
              </div>
              <div class="products-card__description">
                  <h4 class="products-card__description--title">${card.title}</h4>
                  <div class="products-card__description--bage">${card.time}</div>
              </div>
              <div class="products-card__description--row">
                    <div class="products-card__description-info">
                      <div class="products-card__description-info--rating">
                        <img src="./images/icons/star.svg" alt="star">
                        ${card.rating}
                      </div>
                      <div class="products-card__description-info--price">
                        От ${card.price} ₽
                      </div>
                      <div class="products-card__description-info--group">
                        ${card.type} 
                      </div>

                    </div>
                      
              </div>

            </a>
       `)
    });
  }

  if (container) {
  loading()
  
  setTimeout(() => {
    renderRests(restsArray)
  }, 1000)
}
  }


modalFunc()
restsFunc()