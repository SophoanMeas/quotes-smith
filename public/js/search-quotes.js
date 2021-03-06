//SEARCHBAR and search button in navbar.handlebars
async function resultQuotes(event) {
	event.preventDefault();

	const value = document.querySelector('#text-query').value.trim();
	const authorSelected = document.querySelector('#option-author');
	const keyWordSelected = document.querySelector('#option-keyword');

	if (authorSelected.checked === true) {
		console.log('Author Query =' + value);
		const response = await fetch(`/api/quotes/author/${value}`);

		if (response.ok) {
			document.location.replace(`/api/quotes/author/${value}`);
			console.log(`data was fetched form ${value} AUTHOR`);
		} else {
			alert(response.statusText);
		}
	} else if (keyWordSelected.checked === true) {
		console.log('Keyword Query =' + value);
		const response = await fetch(`/api/quotes/keyword/${value}`);

		if (response.ok) {
			document.location.replace(`/api/quotes/keyword/${value}`);
			console.log(`data was fetched form ${value} KEYWORD`);
		} else {
			alert(response.statusText);
		}
	} else {
		window.alert('Make a choice');
	}
}

document.querySelector('#search-btn').addEventListener('click', resultQuotes);
