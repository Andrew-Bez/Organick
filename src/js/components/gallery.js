import { getImageUrl } from '../utils/getImageURL'

class GalleryItem {
	constructor({ parent, src, linkTitle }) {
		this.parent = document.querySelector(parent)
		this.src = src
		this.linkTitle = linkTitle
	}

	render() {
		if (!this.parent) return
		const element = document.createElement('li')
		element.classList.add('gallery__item')

		element.style.backgroundImage = `url(${getImageUrl(this.src)})`

		element.innerHTML = `<a href="#" class="gallery__link link title-blue">${this.linkTitle}</a>`

		this.parent.append(element)
	}
}

export function initGallery() {
	const galleryItems = [
		{
			parent: '.gallery__list',
			src: 'organic__juice.png',
			linkTitle: 'Organic Juice',
		},
		{
			parent: '.gallery__list',
			src: 'organick__food.jpg',
			linkTitle: 'Organic Food',
		},
		{
			parent: '.gallery__list',
			src: 'nuts__cookies.png',
			linkTitle: 'Nuts Cookis',
		},
	]

	galleryItems.forEach(item => new GalleryItem(item).render())
}
