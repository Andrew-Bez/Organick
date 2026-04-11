import { getImageUrl } from '../utils/getImageURL'

class productsItem {
	constructor({ tag, src, alt, title, priceOld, priceNew }) {
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
		element.innerHTML = `<a href='/shop-single.html'>
		<div class="products__tag text-sm">${this.tag}</div>
							<img
								src=${getImageUrl(this.src)}
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
									src="${getImageUrl('star.png')}"
									alt="five stars"
									class="products__rating"
								/>
							</div></a>`
		return element
	}
}

async function renderProducts(containerSelector, limit = 8) {
	const container = document.querySelector(containerSelector)
	if (!container) return

	container.innerHTML = ''

	try {
		const response = await fetch('http://localhost:3000/products')
		const data = await response.json()

		const productsToShow = data.slice(0, limit)

		productsToShow.forEach(product => {
			const card = new productsItem(product)
			container.appendChild(card.render())
		})
	} catch (error) {
		console.error('Помилка завантаження товарів:', error)
	}
}

export function initProducts() {
	renderProducts('.categories__list', 8)
	renderProducts('.offer__products', 4)
	renderProducts('.shop-single__list', 4)
	renderProducts('.shop__products', 12)
}
