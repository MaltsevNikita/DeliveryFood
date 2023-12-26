const goodsFunc = () => {
  goodsArray = [
    {
      id: 0,
      image:'acne.jpg',
      title:'Ролл угорь стандарт',
      subTitle:'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      price:'250 ₽'
    },
    {
      id: 1,
      image:'CaliforniaStandart.jpg',
      title:'Калифорния лосось стандарт',
      subTitle:'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      price:'250 ₽'
    },
    {
      id: 2,
      image:'Okkinava.jpg',
      title:'Окинава стандарт',
      subTitle:' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
      price:'250 ₽'
    },
    {
      id: 3,
      image:'Caesar maki xl.jpg',
      title:'Цезарь маки хl',
      subTitle:'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
      price:'250 ₽'
    },
    {
      id: 4,
      image:'Yasai maki.jpg',
      title:'Ясай маки стандарт 185 г',
      subTitle:'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
      price:'250 ₽'
    },
    {
      id: 5,
      image:'shrimp_standart.jpg',
      title:'Ролл с креветкой стандарт',
      subTitle:'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      price:'250 ₽'
    }

  ]

  const container = document.querySelector('.header-box')

  const loading = () => {
    container.innerHTML = '<p>Загрузка ...</p>'
  }

  const renderGoods = () => {
    container.innerHTML = ''
  }
}