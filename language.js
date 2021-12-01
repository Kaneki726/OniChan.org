let lang='RU'

function changeLanguage(argument) {
	lang=document.getElementById('languages').value
	if (lang=='RU') {
		document.getElementById('mainPage').innerHTML='главная'
	} else if (lang=='EN') {
		document.getElementById('mainPage').innerHTML='main-page'
	}
}