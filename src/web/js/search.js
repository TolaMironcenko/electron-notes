const searchInput = document.querySelector('.search-input')
searchInput.onkeyup = (event) => {
	event.preventDefault();
	// обьявляем переменные переменные
	var input = event.target.value.toLowerCase();
	const articles = document.querySelectorAll('.note')
	var articlestexts = notes_square.querySelectorAll('.notetitle')

	// Прокручиваем все элементы списка и скрываем те, которые не соответствуют поисковому запросу
	for (var i = 0; i < articles.length; i++) {
		if (articlestexts[i].innerHTML.toLowerCase().indexOf(input) > -1) {
			articles[i].style.display = "";
		} else {
			articles[i].style.display = "none";
		}
	}
}