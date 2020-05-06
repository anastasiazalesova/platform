import React from 'react';

const folders = [
  { value: 'income', label: 'Входящие' },
  { value: 'outcome', label: 'Исходящие' },
  { value: 'spam', label: 'Спам' }
];

const messages = new Map([
	['income', [
		{
			title: 'О критериях оценки питча', 
			body: 'В ЛМС, в папке "Материалы" доступна презентация семинара…', 
			author: 'Михайлова А. В.', 
			time: '19 июн 2019, 10:49:44', 
			isNew: true
		},
		{
			title: 'Изменения в расписании 30 мая', 
			body: 'Это личное сообщение было отправлено всем пользователям дисциплины Выход на рынок и продвижение проекта. Добрый день, студенты 3 курса! Обращаем внимание, в связи с командировкой преподавателей Лодышкина и Коновалюк и конференцией у Ярцева, внесены изменения в расписаниие майнора - 30 мая. Обновленное расписание во вложении. В первой вкладке файла расписание Стартапа, во второй вкладке - Тех Пр.Заключительные занятия на майноре пройдут - 6 июня. С уважением, Алёшина Т.А.', 
			author: 'Алёшина Т. А.', 
			time: '28 май 2019, 13:08:28', 
			isNew: false
		},
		{
			title: 'Данные по посещению лекций в весеннем семестре', 
			body: 'Как и договаривались, во вложении высылаем файл с балла…', 
			author: 'Алёшина Т. А.', 
			time: '20 май 2019, 15:16:07', 
			isNew: false
		},
	]],
]);

const authors = [
	{
		name: 'Алешина Татьяна Анатольевна',
		login: 'AleshinaTA'
	},
	{
		name: 'Вавилова Татьяна Сергеевна',
		login: 'VavilovaTS'
	},
	{
		name: 'Гордеева Катерина Георгиевна',
		login: 'GordeevaKG'
	},
	{
		name: 'Демидова Екатерина Павловна',
		login: 'DemidovaEP'
	},
	{
		name: 'Аленина Татьяна Георгиевна',
		login: 'AleninaTG'
	},
	{
		name: 'Волкова Альбина Анатольевна',
		login: 'VolkovaAA'
	},
	{
		name: 'Георгиева Галина Анатольевна',
		login: 'GeorgievaGA'
	},
	{
		name: 'Дубнова Татьяна Алексеевна',
		login: 'DubnovaTA'
	},
	{
		name: 'Ежкова Марина Дмитриевна',
		login: 'EjkhovaMD'
	},
	{
		name: 'Жагрова Елена Николаевна',
		login: 'JagrovaEN'
	}
];

class EmailDataMock {
	getFolders() {
		return folders;
	}

	getAuthors() {
		return authors;
	}

	getMessagesByFolderId(folderId) {
		return messages.get(folderId);
	}
}

export default EmailDataMock;