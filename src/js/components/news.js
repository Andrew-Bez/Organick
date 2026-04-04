class NewsCards {
	constructor({ parent, date, author, title, text }) {
		this.parent = document.querySelector(parent)
		this.date = date
		this.author = author
		this.title = title
		this.text = text
	}

	render() {
		if (!this.parent) return

		const element = document.createElement('li')
		element.classList.add('news__blog-item')

		element.innerHTML = `
			<span class="news__blog-tag title-lg title-blue">${this.date}</span>
			<div class="news__blog-info">
				<div class="news__blog-author title-md title-blue">
					${this.author}
				</div>
				<h3 class="news__blog-title title-lg title-blue">
					${this.title}
				</h3>
				<div class="news__blog-text text-md">
					${this.text}
				</div>
				<button class="news__blog-btn button-yellow">
					Read More<img src="/src/img/btn_arrow.svg" alt="" />
				</button>
			</div>
			`

		this.parent.append(element)
	}
}

export function initNews() {
	const newsCards = [
		{
			parent: '.recent__blog',
			date: '30 oct',
			author: 'By Andrii Bezuhlyi',
			title: 'The Benefits of Vitamin D & How to Get It',
			text: 'Simply dummy text of the printing and typesetting industry.Lorem Ipsum',
		},
		{
			parent: '.recent__blog',
			date: '30 oct',
			author: 'By Andrii Bezuhlyi',
			title: 'The Benefits of Vitamin D & How to Get It',
			text: 'Simply dummy text of the printing and typesetting industry.Lorem Ipsum',
		},
		{
			parent: '.recent__blog',
			date: '30 oct',
			author: 'By Andrii Bezuhlyi',
			title: 'The Benefits of Vitamin D & How to Get It',
			text: 'Simply dummy text of the printing and typesetting industry.Lorem Ipsum',
		},
		{
			parent: '.recent__blog',
			date: '30 oct',
			author: 'By Andrii Bezuhlyi',
			title: 'The Benefits of Vitamin D & How to Get It',
			text: 'Simply dummy text of the printing and typesetting industry.Lorem Ipsum',
		},
		{
			parent: '.recent__blog',
			date: '30 oct',
			author: 'By Andrii Bezuhlyi',
			title: 'The Benefits of Vitamin D & How to Get It',
			text: 'Simply dummy text of the printing and typesetting industry.Lorem Ipsum',
		},
		{
			parent: '.recent__blog',
			date: '30 oct',
			author: 'By Andrii Bezuhlyi',
			title: 'The Benefits of Vitamin D & How to Get It',
			text: 'Simply dummy text of the printing and typesetting industry.Lorem Ipsum',
		},
	]

	newsCards.forEach(item => new NewsCards(item).render())
}
