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
						<h2 class="cards__title title title-h3">${this.title}</h2>`

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
		constructor(parent, tag, src, alt, title, priceOld, priceNew) {
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
							<div class="products__title title title-md">
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

	let shopItemOne = new productsItem(
		'.products',
		'Vegetable',
		'"/src/img/products/broccoli.png"',
		'"broccoli"',
		'Calabrese Broccoli',
		'$20.00',
		'$13.00',
	)
	shopItemOne.render()

	let shopItemTwo = new productsItem(
		'.products',
		'Fresh',
		'"/src/img/products/banana.png"',
		'"banana"',
		'Fresh Banana Fruites',
		'$20.00',
		'$14.00',
	)
	shopItemTwo.render()

	let shopItemThree = new productsItem(
		'.products',
		'Millets',
		'"/src/img/products/pistaches.png"',
		'"pistaches"',
		'White Nuts',
		'$20.00',
		'$15.00',
	)
	shopItemThree.render()

	let shopItemFour = new productsItem(
		'.products',
		'Vegetable',
		'"/src/img/products/tomato.png"',
		'"tomato"',
		'Vegan Red Tomato',
		'$20.00',
		'$17.00',
	)
	shopItemFour.render()

	let shopItemFive = new productsItem(
		'.products',
		'Health',
		'"/src/img/products/bean.png"',
		'"bean"',
		'Mung Bean',
		'$20.00',
		'$11.00',
	)
	shopItemFive.render()

	let shopItemSix = new productsItem(
		'.products',
		'Nuts',
		'"/src/img/products/hazelnut.png"',
		'"hazelnut"',
		'Brown Hazelnut',
		'$20.00',
		'$12.00',
	)
	shopItemSix.render()

	let shopItemSeven = new productsItem(
		'.products',
		'Fresh',
		'"/src/img/products/eggs.png"',
		'"eggs"',
		'Eggs',
		'$20.00',
		'$17.00',
	)
	shopItemSeven.render()

	let shopItemEight = new productsItem(
		'.products',
		'Fresh',
		'"/src/img/products/bread.png"',
		'"bread"',
		'Zelco Suji Elaichi Rusk',
		'$20.00',
		'$15.00',
	)
	shopItemEight.render()
})
