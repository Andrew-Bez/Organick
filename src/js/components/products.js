import { getImageUrl } from '../utils/getImageURL'

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
		if (!this.parent) return
		const element = document.createElement('li')
		element.classList.add('products__item')
		element.innerHTML = `<div class="products__tag text-sm">${this.tag}</div>
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
							</div>`

		this.parent.append(element)
	}
}

export function initProducts() {
	const categoriesItems = [
		{
			parent: '.categories__list',
			tag: 'Vegetable',
			src: 'broccoli.png',
			alt: 'broccoli',
			title: 'Calabrese Broccoli',
			priceOld: '$20.00',
			priceNew: '$13.00',
		},
		{
			parent: '.categories__list',
			tag: 'Fresh',
			src: 'banana.png',
			alt: '"banana"',
			title: 'Fresh Banana Fruites',
			priceOld: '$20.00',
			priceNew: '$14.00',
		},
		{
			parent: '.categories__list',
			tag: 'Millets',
			src: 'pistaches.png',
			alt: '"pistaches"',
			title: 'White Nuts',
			priceOld: '$20.00',
			priceNew: '$15.00',
		},
		{
			parent: '.categories__list',
			tag: 'Vegetable',
			src: 'tomato.png',
			alt: '"tomato"',
			title: 'Vegan Red Tomato',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.categories__list',
			tag: 'Health',
			src: 'bean.png',
			alt: '"bean"',
			title: 'Mung Bean',
			priceOld: '$20.00',
			priceNew: '$11.00',
		},
		{
			parent: '.categories__list',
			tag: 'Nuts',
			src: 'hazelnut.png',
			alt: '"hazelnut"',
			title: 'Brown Hazelnut',
			priceOld: '$20.00',
			priceNew: '$12.00',
		},
		{
			parent: '.categories__list',
			tag: 'Fresh',
			src: 'eggs.png',
			alt: '"eggs"',
			title: 'Eggs',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.categories__list',
			tag: 'Fresh',
			src: 'bread.png',
			alt: '"bread"',
			title: 'Zelco Suji Elaichi Rusk',
			priceOld: '$20.00',
			priceNew: '$15.00',
		},
	]
	const offerItems = [
		{
			parent: '.offer__products',
			tag: 'Vegetable',
			src: 'mung-bean.png',
			alt: 'mung bean',
			title: 'Mung Bean',
			priceOld: '$20.00',
			priceNew: '$11.00',
		},
		{
			parent: '.offer__products',
			tag: 'Vegetable',
			src: 'brown-hazelnut.png',
			alt: 'Brown Hazelnut',
			title: 'Brown Hazelnut',
			priceOld: '$20.00',
			priceNew: '$12.00',
		},
		{
			parent: '.offer__products',
			tag: 'Vegetable',
			src: 'onion.png',
			alt: 'Onion',
			title: 'Onion',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.offer__products',
			tag: 'Vegetable',
			src: 'cabbage.png',
			alt: 'Cabbage',
			title: 'Cabbage',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
	]
	const shopItems = [
		{
			parent: '.shop__products',
			tag: 'Vegetable',
			src: 'broccoli.png',
			alt: 'broccoli',
			title: 'Calabrese Broccoli',
			priceOld: '$20.00',
			priceNew: '$13.00',
		},
		{
			parent: '.shop__products',
			tag: 'Fresh',
			src: 'banana.png',
			alt: '"banana"',
			title: 'Fresh Banana Fruites',
			priceOld: '$20.00',
			priceNew: '$14.00',
		},
		{
			parent: '.shop__products',
			tag: 'Millets',
			src: 'pistaches.png',
			alt: '"pistaches"',
			title: 'White Nuts',
			priceOld: '$20.00',
			priceNew: '$15.00',
		},
		{
			parent: '.shop__products',
			tag: 'Vegetable',
			src: 'tomato.png',
			alt: '"tomato"',
			title: 'Vegan Red Tomato',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.shop__products',
			tag: 'Health',
			src: 'bean.png',
			alt: '"bean"',
			title: 'Mung Bean',
			priceOld: '$20.00',
			priceNew: '$11.00',
		},
		{
			parent: '.shop__products',
			tag: 'Nuts',
			src: 'hazelnut.png',
			alt: '"hazelnut"',
			title: 'Brown Hazelnut',
			priceOld: '$20.00',
			priceNew: '$12.00',
		},
		{
			parent: '.shop__products',
			tag: 'Fresh',
			src: 'eggs.png',
			alt: '"eggs"',
			title: 'Eggs',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.shop__products',
			tag: 'Fresh',
			src: 'bread.png',
			alt: '"bread"',
			title: 'Zelco Suji Elaichi Rusk',
			priceOld: '$20.00',
			priceNew: '$15.00',
		},
		{
			parent: '.shop__products',
			tag: 'Vegetable',
			src: 'mung-bean.png',
			alt: 'mung bean',
			title: 'Mung Bean',
			priceOld: '$20.00',
			priceNew: '$11.00',
		},
		{
			parent: '.shop__products',
			tag: 'Vegetable',
			src: 'brown-hazelnut.png',
			alt: 'Brown Hazelnut',
			title: 'Brown Hazelnut',
			priceOld: '$20.00',
			priceNew: '$12.00',
		},
		{
			parent: '.shop__products',
			tag: 'Vegetable',
			src: 'onion.png',
			alt: 'Onion',
			title: 'Onion',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
		{
			parent: '.shop__products',
			tag: 'Vegetable',
			src: 'cabbage.png',
			alt: 'Cabbage',
			title: 'Cabbage',
			priceOld: '$20.00',
			priceNew: '$17.00',
		},
	]

	categoriesItems.forEach(item => new productsItem(item).render())
	offerItems.forEach(item => new productsItem(item).render())
	shopItems.forEach(item => new productsItem(item).render())
}
