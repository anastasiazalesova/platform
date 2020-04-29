import React from 'react';

const options = [
  { value: 'course-one', label: '1 курс' },
  { value: 'course-two', label: '2 курс' },
  { value: 'course-three', label: '3 курс' },
  { value: 'course-four', label: '4 курс' },
  { value: 'course-five', label: '5 курс' },
];

const personData = {
	faculty: 'Факультет коммуникаций, медиа и дизайна : Дизайн',
	firstName: 'Анастасия',
	lastName: 'Залесова',
	midName: 'Дмитриевна',
	roleDescription: 'Студент бакалавриата',
	course: 4
};

const courseStats = {
	rateCurrent: 18,
	rateMax: 308,
	percentile: 'P 5.52',
	pointAvg: 9.29
};

const mapCourseModules = new Map([
	['course-one', ['one-module-one', 'one-module-two', 'one-module-three', 'one-module-four']],
	['course-two', ['two-module-one', 'two-module-two', 'two-module-three', 'two-module-four']],
	['course-three', ['three-module-one', 'three-module-two', 'three-module-three', 'three-module-four']],
	['course-four', ['four-module-one', 'four-module-two', 'four-module-three', 'four-module-four']],
	['course-five', ['five-module-one', 'five-module-two', 'five-module-three', 'five-module-four']]
]);

const mapModuleDisciplines = new Map([
	['four-module-one', ['one-art-practic', 'one-art-theory', 'one-sub-atom-practic', 'one-sub-atom-theory']],
	['four-module-two', ['two-art-practic', 'two-art-theory', 'two-sub-atom-practic', 'two-sub-atom-theory']],
	['four-module-three', ['three-art-practic', 'three-art-theory', 'three-sub-atom-practic', 'three-sub-atom-theory']],
	['four-module-four', ['four-art-practic', 'four-art-theory', 'four-sub-atom-practic', 'four-sub-atom-theory']],
]);

const mapModuleNames = new Map([
	['one-module-one', '1 модуль'],
	['one-module-two', '2 модуль'],
	['one-module-three', '3 модуль'],
	['one-module-four', '4 модуль'],
	['two-module-one', '1 модуль'],
	['two-module-two', '2 модуль'],
	['two-module-three', '3 модуль'],
	['two-module-four', '4 модуль'],
	['three-module-one', '1 модуль'],
	['three-module-two', '2 модуль'],
	['three-module-three', '3 модуль'],
	['three-module-four', '4 модуль'],
	['four-module-one', '1 модуль'],
	['four-module-two', '2 модуль'],
	['four-module-three', '3 модуль'],
	['four-module-four', '4 модуль'],
	['five-module-one', '1 модуль'],
	['five-module-two', '2 модуль'],
	['five-module-three', '3 модуль'],
	['five-module-four', '4 модуль']
]);

const mapDisciplineData = new Map([
	['one-art-practic', {name: 'Арт-практика', tenPointSystem: 10, fivePointSystem: 5, retries: 0, lastTry: '29-10-2019', teacher: 'Харитонов З.Н.'}],
	['one-art-theory', {name: 'Арт-теория', tenPointSystem: 9, fivePointSystem: 5, retries: 1, lastTry: '29-09-2019', teacher: 'Харитонова З.Н.'}],
	['one-sub-atom-practic', {name: 'Субатом-практика', tenPointSystem: 8, fivePointSystem: 4, retries: 2, lastTry: '29-08-2019', teacher: 'Харитонов З.Н.'}],
	['one-sub-atom-theory', {name: 'Субатом-теория', tenPointSystem: 7, fivePointSystem: 4, retries: 3, lastTry: '29-07-2019', teacher: 'Харитоновав З.Н.'}],
	['two-art-practic', {name: 'Арт-практика', tenPointSystem: 10, fivePointSystem: 5, retries: 0, lastTry: '29-10-2019', teacher: 'Харитонов З.Н.'}],
	['two-art-theory', {name: 'Арт-теория', tenPointSystem: 9, fivePointSystem: 5, retries: 1, lastTry: '29-09-2019', teacher: 'Харитонова З.Н.'}],
	['two-sub-atom-practic', {name: 'Субатом-практика', tenPointSystem: 8, fivePointSystem: 4, retries: 2, lastTry: '29-08-2019', teacher: 'Харитонов З.Н.'}],
	['two-sub-atom-theory', {name: 'Субатом-теория', tenPointSystem: 7, fivePointSystem: 4, retries: 3, lastTry: '29-07-2019', teacher: 'Харитоновав З.Н.'}],
	['three-art-practic', {name: 'Арт-практика', tenPointSystem: 10, fivePointSystem: 5, retries: 0, lastTry: '29-10-2019', teacher: 'Харитонов З.Н.'}],
	['three-art-theory', {name: 'Арт-теория', tenPointSystem: 9, fivePointSystem: 5, retries: 1, lastTry: '29-09-2019', teacher: 'Харитонова З.Н.'}],
	['three-sub-atom-practic', {name: 'Субатом-практика', tenPointSystem: 8, fivePointSystem: 4, retries: 2, lastTry: '29-08-2019', teacher: 'Харитонов З.Н.'}],
	['three-sub-atom-theory', {name: 'Субатом-теория', tenPointSystem: 7, fivePointSystem: 4, retries: 3, lastTry: '29-07-2019', teacher: 'Харитоновав З.Н.'}],
	['four-art-practic', {name: 'Арт-практика', tenPointSystem: 10, fivePointSystem: 5, retries: 0, lastTry: '29-10-2019', teacher: 'Харитонов З.Н.'}],
	['four-art-theory', {name: 'Арт-теория', tenPointSystem: 9, fivePointSystem: 5, retries: 1, lastTry: '29-09-2019', teacher: 'Харитонова З.Н.'}],
	['four-sub-atom-practic', {name: 'Субатом-практика', tenPointSystem: 8, fivePointSystem: 4, retries: 2, lastTry: '29-08-2019', teacher: 'Харитонов З.Н.'}],
	['four-sub-atom-theory', {name: 'Субатом-теория', tenPointSystem: 7, fivePointSystem: 4, retries: 3, lastTry: '29-07-2019', teacher: 'Харитоновав З.Н.'}],
]);

class StudentBookMock {

	getPersonData() {
		return personData;
	}

	getCourseStats() {
		return courseStats;
	}

	options() {
		return options;
	}

	getModulesByCourseId(courseId) {
		return mapCourseModules.get(courseId);
	}

	getDisciplinesByModuleId(moduleId) {
		return mapModuleDisciplines.get(moduleId);
	}

	getDisciplineDataByDisciplineId(disciplineId) {
		return mapDisciplineData.get(disciplineId);
	}

	getModuleNamebyModuleId(moduleId) {
		return mapModuleNames.get(moduleId);
	}
}

export default StudentBookMock;