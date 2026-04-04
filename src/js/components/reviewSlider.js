import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination, Autoplay } from 'swiper/modules'

export function initReviewSlider() {
  const reviewSwiper = new Swiper('.review__slider', {
		direction: 'horizontal',
		loop: true,
		speed: 1500,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 3000, 
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		modules: [Pagination, Autoplay],
	})
}