window.onload = function () { /*при загрузке страницы запускается безымянная функция*/
	const initPerson = personGenerator.getPerson(); /*объявляется константа initPerson которой присваевается запуск метода getPerson() из объекта personGenerator*/
	/*поиск идентификаторов в которые выводятся случайные данные полученные от работы цепочки методов по генерации и вставка данных по innerText*/
	document.getElementById('firstNameOutput').innerText = initPerson.firstName;
	document.getElementById('surnameOutput').innerText = initPerson.surname;
	document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
	document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
	document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
	document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
	document.getElementById('genderOutput').innerText = initPerson.gender;
	document.getElementById('professionOutput').innerText = initPerson.profession;

};

document.getElementById('btnUpdate').addEventListener('click', function () { /*запуск кнопки генерации*/
	window.location.reload();
});

document.getElementById('btnRetry').addEventListener('click', function () { /*запуск кнопки сброса данных*/
		document.getElementById('firstNameOutput').innerText = '';
		document.getElementById('surnameOutput').innerText = '';
		document.getElementById('fatherNameOutput').innerText = '';
		document.getElementById('birthYearOutput').innerText = '';
		document.getElementById('birthDayOutput').innerText = '';
		document.getElementById('birthMonthOutput').innerText = '';
		document.getElementById('genderOutput').innerText = '';
		document.getElementById('professionOutput').innerText = '';

	}

);