var a = Math.floor(Math.random() * 2); /*константа для генерации рандомного числа для генерации фамилии, имени, отчества, пола, профессии */
var b = Math.floor(Math.random() * 3); /*константа для генерации рандомного числа для генерации месяца */
const personGenerator = {  // объект, в который вкладываются JSON строки 
	//строка JSON с фамилиями
	surnameJson: `{
        "count": 16, 
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
	//строка JSON с мужскими именами
	firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
	//строка JSON с женскими именами
	firstNameFemaleJson: `{
		"count": 10,
		"list": {     
			 "id_1": "Александрa",
			 "id_2": "Елена",
			 "id_3": "Галина",
			 "id_4": "Людмила",
			 "id_5": "Любовь",
			 "id_6": "Таисия",
			 "id_7": "Агата",
			 "id_8": "Карина",
			 "id_9": "Евгения",
			 "id_10": "Екатерина"
		}
		}`,
	//строка JSON с мужскими профессиями
	professionMaleJson: `{
			"count": 10,
			"list": {     
				 "id_1": "слесарь",
				 "id_2": "столяр",
				 "id_3": "маляр",
				 "id_4": "штукатур",
				 "id_5": "машинист",
				 "id_6": "учитель",
				 "id_7": "парикмахер",
				 "id_8": "повар",
				 "id_9": "официант",
				 "id_10": "программист"
			}
  }`,
	//строка JSON с женскими профессиями
	professionFemaleJson: `{
	"count": 10,
	"list": {     
		 "id_1": "швея",
		 "id_2": "доярка",
		 "id_3": "медсестра",
		 "id_4": "стюардесса",
		 "id_5": "балерина",
		 "id_6": "няня",
		 "id_7": "горничная",
		 "id_8": "манекенщица",
		 "id_9": "официантка",
		 "id_10": "программист"
	}
}`,
	//строка JSON с заготовкой для отчества
	fatherNameJson: `{
	"count": 10,
	"list": {     
		 "id_1": "Григорьев",
		 "id_2": "Геннадьев",
		 "id_3": "Николаев",
		 "id_4": "Петров",
		 "id_5": "Сидоров",
		 "id_6": "Витальев",
		 "id_7": "Валерьев",
		 "id_8": "Олегов",
		 "id_9": "Федоров",
		 "id_10": "Леонидов"
	}
}`,

//переменные мужского и женского пола
	GENDER_MALE: "Мужчина,",
	GENDER_FEMALE: "Женщина,",

	randomIntNumber: (max = 1, min = 0) =>
		Math.floor(Math.random() * (max - min + 1) + min), //случайная генерация данных для дальнейшего получения id 

	randomValue: function (json) { //метод с функцией, преобразующей строки JSON в объекты JavaScript благодаря свойству parse
		const obj = JSON.parse(json);
		const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
		return obj.list[prop];
	},

	randomFirstName: function () { /* метод с анонимной функцией, в которой происходит возврат объкта personGenerator в котором вызывается метод randomValue*/
		if (a === 1) { /*в зависимости от рандомно сгенерированного числа*/
			return this.randomValue(this.firstNameMaleJson); /*принимается personGenerator с вызовом мужских имен*/
		} else {
			return this.randomValue(this.firstNameFemaleJson); /*принимается personGenerator с вызовом женских имен*/
		}
	},

	randomFatherName: function () { /* метод с анонимной функцией, в которой происходит возврат объкта personGenerator в котором вызывается метод randomValue*/
		if (a === 1) { /*в зависимости от рандомно сгенерированного числа*/
			return this.randomValue(this.fatherNameJson) + "ич"; /*принимается personGenerator с вызовом отчества и добавлением окончания в мужском роде*/
		} else {
			return this.randomValue(this.fatherNameJson) + "на"; /*принимается personGenerator с вызовом отчества и добавлением окончания в женском роде*/
		}
	},

	randomSurname: function () { /* метод с анонимной функцией, в которой происходит возврат объкта personGenerator в котором вызывается метод randomValue*/
		if (a === 1) { /*в зависимости от рандомно сгенерированного числа*/
			return this.randomValue(this.surnameJson); /*принимается personGenerator с вызовом фамилии в мужском роде*/
		} else {
			return this.randomValue(this.surnameJson) + "a"; /*принимается personGenerator с вызовом фамилии и добавлением окончания "а" в женском роде*/
		}
	},

	randomGender: function () { /* метод с анонимной функцией, в которой происходит возврат объкта personGenerator в котором вызывается метод randomValue*/
		if (a === 1) { /*в зависимости от рандомно сгенерированного числа*/
			return this.GENDER_MALE; /*присваивается мужской пол*/
		} else {
			return this.GENDER_FEMALE; /*присваивается женский пол*/
		}
	},

	randomBirthYear: function getRandomInt(min, max) {  /*функция, принимающая аргументы для генерации случайного года рождения*/
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	randomBirthDay: function getRandomInt(min, max) { /*функция, принимающая аргументы для генерации случайного дня рождения*/
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	randomBirthMonth31: function getRandomMonth() { /*функция, рандомно генерирующая месяц  с количеством дней 31*/
		let months = [
			`января`,
			`марта`,
			`мая`,
			`июля`,
			`августа`,
			`октября`,
			`декабря`,
		];
		let month = months[Math.floor(Math.random() * 7)];
		return month;
	},

	randomBirthMonth30: function getRandomMonth() { /*функция, рандомно генерирующая месяц  с количеством дней 30*/
		let months = [
			`апреля`,
			`июня`,
			`сентября`,
			`ноября`,
		];
		let month = months[Math.floor(Math.random() * 4)];
		return month;
	},

	randomBirthMonthFebruary: function getRandomMonth() { /*функция возвращающая только февраль*/
		let month = `февраля`
		return month;
	},

	randomProfession: function () { /* метод с анонимной функцией, в которой происходит возврат объкта personGenerator в котором вызывается метод randomValue*/
		if (a === 1) { /*в зависимости от рандомно сгенерированного числа*/
			return this.randomValue(this.professionMaleJson); /*принимается personGenerator с вызовом мужской професии*/
		} else {
			return this.randomValue(this.professionFemaleJson); /*принимается personGenerator с вызовом женской професии*/
		}
	},

	getPerson: function () {
		this.person = {}; /*к объекту personGenerator добавляется новый пустой объект person*/
		this.person.gender = this.randomGender(); /*к объекту person вкладывается свойство gender содержащее результат метода randomGender()*/
		this.person.firstName = this.randomFirstName();
		this.person.surname = this.randomSurname();
		this.person.fatherName = this.randomFatherName();
		this.person.birthYear = this.randomBirthYear(1924, 2012) + ' года,';
		if (b === 0) {
			this.person.birthMonth = this.randomBirthMonth31();
			this.person.birthDay = this.randomBirthDay(1, 31);
		} else if (b === 1) {
			this.person.birthMonth = this.randomBirthMonth30();
			this.person.birthDay = this.randomBirthDay(1, 30);
		} else if (b === 2) {
			this.person.birthMonth = this.randomBirthMonthFebruary();
			this.person.birthDay = this.randomBirthDay(1, 29);
		}
		this.person.profession = this.randomProfession();
		return this.person; /*к объект personGenerator возвращается объект person с записанными данными*/
	},
};