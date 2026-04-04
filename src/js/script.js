import { initCards } from './components/cards'
import { initGallery } from './components/gallery'
import { initNews } from './components/news'
import { initProducts } from './components/products'
import { initReviewSlider } from './components/reviewSlider'
import { initTeam } from './components/team'

import '/src/sass/style.scss'

window.addEventListener('DOMContentLoaded', () => {
	initProducts()
	initReviewSlider()
	initCards()
	initGallery()
	initTeam()
	initNews()
})
