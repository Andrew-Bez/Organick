import '/src/sass/style.scss'

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
