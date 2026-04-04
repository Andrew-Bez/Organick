import { getImageUrl } from '../utils/getImageURL'

class TeamCards {
	constructor({ parent, src, alt, name, subtitle }) {
		this.parent = document.querySelector(parent)
		this.src = src
		this.alt = alt
		this.name = name
		this.subtitle = subtitle
	}

	render() {
		if (!this.parent) return

		const element = document.createElement('li')
		element.classList.add('team__item')

		element.innerHTML = `<img
								src="${getImageUrl(this.src)}"
								alt="${this.alt}"
								class="team__img"
							/>
							<div class="team__block">
								<h5 class="team__name title-lg title-blue">${this.name}</h5>
							<div class="team__subinfo">
								<div class="team__profession subtitle-min text-green">${this.subtitle}</div>
								<ul class="team__links">
									<li>
										<a><img src="/src/img/facebook.svg" alt="facebook" /></a>
									</li>
									<li>
										<a><img src="/src/img/twitter.svg" alt="facebook" /></a>
									</li>
								</ul>
							</div>
							</div>`

		this.parent.append(element)
	}
}

export function initTeam() {
	const teamItemsSmall = [
		{
			parent: '.team__list_small',
			src: 'giovanni@2x.png',
			alt: 'giovanni',
			name: 'Giovani Bacardo',
			subtitle: 'Farmer',
		},
		{
			parent: '.team__list_small',
			src: 'masha@2x.png',
			alt: 'Marianne Loreno',
			name: 'Marianne Loreno',
			subtitle: 'Designer',
		},
		{
			parent: '.team__list_small',
			src: 'zariga@2x.png',
			alt: 'Riga Pelore',
			name: 'Riga Pelore',
			subtitle: 'Farmer',
		},
	]

	const teamItemsBig = [
		{
			parent: '.team__list_big',
			src: 'zariga@2x.png',
			alt: 'Riga Pelore',
			name: 'Riga Pelore',
			subtitle: 'Farmer',
		},
		{
			parent: '.team__list_big',
			src: 'giovanni@2x.png',
			alt: 'giovanni',
			name: 'Giovani Bacardo',
			subtitle: 'Farmer',
		},
		{
			parent: '.team__list_big',
			src: 'masha@2x.png',
			alt: 'Marianne Loreno',
			name: 'Marianne Loreno',
			subtitle: 'Designer',
		},
		{
			parent: '.team__list_big',
			src: 'giovanni@2x.png',
			alt: 'giovanni',
			name: 'Giovani Bacardo',
			subtitle: 'Farmer',
		},
		{
			parent: '.team__list_big',
			src: 'masha@2x.png',
			alt: 'Marianne Loreno',
			name: 'Marianne Loreno',
			subtitle: 'Designer',
		},
		{
			parent: '.team__list_big',
			src: 'zariga@2x.png',
			alt: 'Riga Pelore',
			name: 'Riga Pelore',
			subtitle: 'Farmer',
		},
	]

	teamItemsSmall.forEach(item => new TeamCards(item).render())
	teamItemsBig.forEach(item => new TeamCards(item).render())
}
