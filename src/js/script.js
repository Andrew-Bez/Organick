import '/src/sass/style.scss'

window.addEventListener('DOMContentLoaded', () => {
	class cardsItem {
		constructor(parent, src, sub, title, color, subColor) {
			this.parent = document.querySelector(parent)
			this.src = src
			this.sub = sub
			this.title = title
			this.color = color
			this.subColor = subColor
		}

		render() {
			const element = document.createElement('div')
			element.classList.add('cards__item')

			element.innerHTML = `
						<div class="cards__subtitle subtitle">${this.sub}</div>
						<h2 class="cards__title title-blue title-h3">${this.title}</h2>`

			element.style.backgroundImage = `url(${this.src})`
			element.style.backgroundPosition = 'center'
			element.style.backgroundRepeat = 'no-repeat'
			element.style.backgroundSize = 'cover'

			this.parent.append(element)

			const titleColor = element.querySelector('.cards__title'),
				subColor = element.querySelector('.cards__subtitle')

			titleColor.style.color = `${this.color}`
			subColor.style.color = `${this.subColor}`
		}
	}

	let cardOne = new cardsItem(
		'.cards__wrapper',
		'/src/img/cards_one.png',
		'Natural!!',
		'Get Garden Fresh Fruits',
		'#F9F8F8',
		'#F9F8F8',
	)
	cardOne.render()

	let cardTwo = new cardsItem(
		'.cards__wrapper',
		'/src/img/cards_two.png',
		'Offer!!',
		'Get 10% off on Vegetables',
		'#274C5B',
		'#7EB693',
	)
	cardTwo.render()

	class productsItem {
		constructor({ parent, tag, src, alt, title, priceOld, priceNew }) {
			this.parent = document.querySelector(parent)
			this.tag = tag
			this.src = src
			this.alt = alt
			this.title = title
			this.priceOld = priceOld
			this.priceNew = priceNew
		}

		render() {
			const element = document.createElement('li')
			element.classList.add('products__item')
			element.innerHTML = `<div class="products__tag text-sm">${this.tag}</div>
							<img
								src=${this.src}
								alt=${this.alt}
								class="products__img"
							/>
							<div class="products__title title-blue title-md">
								${this.title}
							</div>
							<div class="products__divider"></div>
							<div class="products__block">
								<div class="products__price">
									<div class="products__price-old">${this.priceOld}</div>
									<div class="products__price-new title">${this.priceNew}</div>
								</div>
								<img
									src="/src/img/products/star.png"
									alt="five stars"
									class="products__rating"
								/>
							</div>`

			this.parent.append(element)
		}
	}

	const shopItems = [
		{
			parent: '.categories__list',
			tag: 'Vegetable',
			src: '/src/img/products/broccoli.png',
			alt: 'broccoli',
			title: 'Calabrese Broccoli',
			priceOld: '$20.00',
			priceNew: '$13.00',
		},
		{
			parent: '.categories__list',
			tag: 'Fresh',
			src: '"/src/img/products/banana.png"',
			alt: '"banana"',
			title: 'Fresh Banana Fruites',
			priceOld: '$20.00',
			priceNew: '$14.00',
		},
		{
			parent: '.categories__list',
			tag: 'Millets',
			src: '"/src/img/products/pistaches.png"',
			alt: '"pistaches"',
			title: 'White Nuts',
			priceOld: '$20.00',
			priceNew: '$15.00',
		},
		{
			parent: '.categories__list',
			tag: 'Vegetable',
			src: '"/src/img/products/tomato.png"',
			alt: '"tomato"',
			title: 'Vegan Red Tomato',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.categories__list',
			tag: 'Health',
			src: '"/src/img/products/bean.png"',
			alt: '"bean"',
			title: 'Mung Bean',
			priceOld: '$20.00',
			priceNew: '$11.00',
		},
		{
			parent: '.categories__list',
			tag: 'Nuts',
			src: '"/src/img/products/hazelnut.png"',
			alt: '"hazelnut"',
			title: 'Brown Hazelnut',
			priceOld: '$20.00',
			priceNew: '$12.00',
		},
		{
			parent: '.categories__list',
			tag: 'Fresh',
			src: '"/src/img/products/eggs.png"',
			alt: '"eggs"',
			title: 'Eggs',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.categories__list',
			tag: 'Fresh',
			src: '"/src/img/products/bread.png"',
			alt: '"bread"',
			title: 'Zelco Suji Elaichi Rusk',
			priceOld: '$20.00',
			priceNew: '$15.00',
		},
	]

	shopItems.forEach(item => {
		const product = new productsItem(item)
		product.render()
	})

	const offerItems = [
		{
			parent: '.offer__products',
			tag: 'Vegetable',
			src: '/src/img/products/mung-bean.png',
			alt: 'mung bean',
			title: 'Mung Bean',
			priceOld: '$20.00',
			priceNew: '$11.00',
		},
		{
			parent: '.offer__products',
			tag: 'Vegetable',
			src: '/src/img/products/brown-hazelnut.png',
			alt: 'Brown Hazelnut',
			title: 'Brown Hazelnut',
			priceOld: '$20.00',
			priceNew: '$12.00',
		},
		{
			parent: '.offer__products',
			tag: 'Vegetable',
			src: '/src/img/products/onion.png',
			alt: 'Onion',
			title: 'Onion',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.offer__products',
			tag: 'Vegetable',
			src: '/src/img/products/cabbage.png',
			alt: 'Cabbage',
			title: 'Cabbage',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
	]

	offerItems.forEach(item => {
		const product = new productsItem(item)
		product.render()
	})
})

class GalleryItem {
	constructor({ parent, src, linkTitle }) {
		this.parent = document.querySelector(parent)
		this.src = src
		this.linkTitle = linkTitle
	}

	render() {
		const element = document.createElement('li')
		element.classList.add('gallery__item')
		
		element.style.backgroundImage = `url(${this.src})`

		element.innerHTML = `<a href="#" class="gallery__link">${this.linkTitle}</a>`

		this.parent.append(element)
	}
}

const galleryItems = [
	{
		parent: '.gallery__list',
		src: '/src/img/organic__juice.png',
		linkTitle: 'Organic Juice',
	},
	{
		parent: '.gallery__list',
		src: '/src/img/organick__food.jpg',
		linkTitle: 'Organic Food',
	},
	{
		parent: '.gallery__list',
		src: '/src/img/nuts__cookies.png',
		linkTitle: 'Nuts Cookis',
	},
]

galleryItems.forEach(item => {
	const galleryItem = new GalleryItem(item)
	galleryItem.render()
})
