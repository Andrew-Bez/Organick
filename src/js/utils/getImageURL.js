// src/js/utils/getImageUrl.js
export function getImageUrl(filename) {
	// filename — це відносний шлях від папки img
	return new URL(`/src/img/${filename}`, import.meta.url).href
}
