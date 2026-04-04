import { getImageUrl } from '../utils/getImageURL'

class cardsItem {
	constructor({ parent, src, sub, title, color, subColor }) {
		this.parent = document.querySelector(parent)
		this.src = src
		this.sub = sub
		this.title = title
		this.color = color
		this.subColor = subColor
	}

	render() {
		if (!this.parent) return
		const element = document.createElement('div')
		element.classList.add('cards__item')

		element.innerHTML = `
						<div class="cards__subtitle subtitle">${this.sub}</div>
						<h2 class="cards__title title-blue title-h3">${this.title}</h2>`

		element.style.backgroundImage = `url(${getImageUrl(this.src)})`
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

export function initCards() {
	const cards = [
		{
			parent: '.cards__wrapper',
			src: 'cards_one.png',
			sub: 'Natural!!',
			title: 'Get Garden Fresh Fruits',
			color: '#F9F8F8',
			subColor: '#F9F8F8',
		},
		{
			parent: '.cards__wrapper',
			src: 'cards_two.png',
			sub: 'Offer!!',
			title: 'Get 10% off on Vegetables',
			color: '#274C5B',
			subColor: '#7EB693',
		},
	]
	cards.forEach(item => new cardsItem(item).render())
}
