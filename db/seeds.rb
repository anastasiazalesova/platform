# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

roleAdmin = Role.create(:name => 'ROLE_ADMIN')
roleTeacher = Role.create(:name => 'ROLE_TEACHER')
roleStudent = Role.create(:name => 'ROLE_STUDENT')

rightCourseRead = Right.create(:name => 'course_read')
rightCourseUpdate = Right.create(:name => 'course_update')
rightCourseCreate = Right.create(:name => 'course_create')
rightCourseDestroy = Right.create(:name => 'course_destroy')

rightModRead = Right.create(:name => 'mod_read')
rightModUpdate = Right.create(:name => 'mod_update')
rightModCreate = Right.create(:name => 'mod_create')
rightModDestroy = Right.create(:name => 'mod_destroy')

rightDisciplineRead = Right.create(:name => 'discipline_read')
rightDisciplineUpdate = Right.create(:name => 'discipline_update')
rightDisciplineCreate = Right.create(:name => 'discipline_create')
rightDisciplineDestroy = Right.create(:name => 'discipline_destroy')

rightCredentialRead = Right.create(:name => 'credential_read')
rightCredentialUpdate = Right.create(:name => 'credential_update')
rightCredentialCreate = Right.create(:name => 'credential_create')
rightCredentialDestroy = Right.create(:name => 'credential_destroy')

rightUserRead = Right.create(:name => 'user_read')
rightUserUpdate = Right.create(:name => 'user_update')
rightUserCreate = Right.create(:name => 'user_create')
rightUserDestroy = Right.create(:name => 'user_destroy')

rightGroupRead = Right.create(:name => 'group_read')
rightGroupUpdate = Right.create(:name => 'group_update')
rightGroupCreate = Right.create(:name => 'group_create')
rightGroupDestroy = Right.create(:name => 'group_destroy')

rightMarkRead = Right.create(:name => 'mark_read')
rightMarkUpdate = Right.create(:name => 'mark_update')
rightMarkCreate = Right.create(:name => 'mark_create')
rightMarkDestroy = Right.create(:name => 'mark_destroy')
# admin
LinkRoleRight.create([
	{:role => roleAdmin, :right => rightCourseRead},
	{:role => roleAdmin, :right => rightCourseUpdate},
	{:role => roleAdmin, :right => rightCourseCreate},
	{:role => roleAdmin, :right => rightCourseDestroy},

	{:role => roleAdmin, :right => rightModRead},
	{:role => roleAdmin, :right => rightModUpdate},
	{:role => roleAdmin, :right => rightModCreate},
	{:role => roleAdmin, :right => rightModDestroy},

	{:role => roleAdmin, :right => rightDisciplineRead},
	{:role => roleAdmin, :right => rightDisciplineUpdate},
	{:role => roleAdmin, :right => rightDisciplineCreate},
	{:role => roleAdmin, :right => rightDisciplineDestroy},

	{:role => roleAdmin, :right => rightCredentialUpdate},
	{:role => roleAdmin, :right => rightCredentialCreate},
	{:role => roleAdmin, :right => rightCredentialDestroy},

	{:role => roleAdmin, :right => rightUserRead},
	{:role => roleAdmin, :right => rightUserUpdate},
	{:role => roleAdmin, :right => rightUserCreate},
	{:role => roleAdmin, :right => rightUserDestroy},

	{:role => roleAdmin, :right => rightGroupRead},
	{:role => roleAdmin, :right => rightGroupUpdate},
	{:role => roleAdmin, :right => rightGroupCreate},
	{:role => roleAdmin, :right => rightGroupDestroy},

	{:role => roleAdmin, :right => rightMarkRead},
	{:role => roleAdmin, :right => rightMarkUpdate},
	{:role => roleAdmin, :right => rightMarkCreate},
	{:role => roleAdmin, :right => rightMarkDestroy}
])
# teacher
LinkRoleRight.create([
	{:role => roleTeacher, :right => rightCourseRead},
	{:role => roleTeacher, :right => rightCourseUpdate},
	{:role => roleTeacher, :right => rightCourseCreate},
	{:role => roleTeacher, :right => rightCourseDestroy},

	{:role => roleTeacher, :right => rightModRead},
	{:role => roleTeacher, :right => rightModUpdate},
	{:role => roleTeacher, :right => rightModCreate},
	{:role => roleTeacher, :right => rightModDestroy},

	{:role => roleTeacher, :right => rightDisciplineRead},
	{:role => roleTeacher, :right => rightDisciplineUpdate},
	{:role => roleTeacher, :right => rightDisciplineCreate},
	{:role => roleTeacher, :right => rightDisciplineDestroy},

	{:role => roleTeacher, :right => rightGroupRead},
	{:role => roleTeacher, :right => rightGroupUpdate},
	{:role => roleTeacher, :right => rightGroupCreate},
	{:role => roleTeacher, :right => rightGroupDestroy},

	{:role => roleTeacher, :right => rightMarkRead},
	{:role => roleTeacher, :right => rightMarkUpdate},
	{:role => roleTeacher, :right => rightMarkCreate},
	{:role => roleTeacher, :right => rightMarkDestroy}
])
# student
LinkRoleRight.create([
	{:role => roleStudent, :right => rightCourseRead},

	{:role => roleStudent, :right => rightModRead},

	{:role => roleStudent, :right => rightDisciplineRead},

	{:role => roleStudent, :right => rightGroupRead},

	{:role => roleStudent, :right => rightMarkRead}
])

NewsPiece.create([
	{
		:title => 'Студенческая оценка преподавания за 1 модуль у всех студентов',
		:description => 'Внимание!<br/>Стартовала Студенческая оценка преподавания за 1 модуль. Всем студентам необходимо оценить те дисциплины, по которым проводились аудиторные занятия и запланированы зачеты.',
		:time => DateTime.now
	},
	{
		:title => 'Бизнес-инкубатор НИУ ВШЭ приглашает на лекцию «Экосистема»',
		:description => '2 октября с 17:00 до 18:30 в Бизнес-инкубаторе НИУ ВШЭ расскажут про экосистему стартапов в России, США, Англии и Китае. Это шанс узнать о предпринимательстве и стартапах с разных точек зрения: со стороны предпринимателя.',
		:time => DateTime.now
	},
	{
		:title => 'Обратите внимание: используйте бразузеры последних версий!',
		:description => 'Для корректной работы в системе LMS используйте браузер Google Chrome. В браузере должно быть разрешено выполнение JavaScript.',
		:time => DateTime.now
	}
])

credOne = Credential.create(login: 'admin1', password: 'admin1')
credTwo = Credential.create(login: 'admin2', password: 'admin2')
credThree = Credential.create(login: 'admin3', password: 'admin3')
credFour = Credential.create(login: 'admin4', password: 'admin4')
credFive = Credential.create(login: 'admin5', password: 'admin5')
credSix = Credential.create(login: 'admin6', password: 'admin6')

courseOne = Course.create(:name => '1 курс');
courseTwo = Course.create(:name => '2 курс');
courseThree = Course.create(:name => '3 курс');
courseFour = Course.create(:name => '4 курс');
courseFive = Course.create(:name => '5 курс');

Event.create([
	{
		:title => 'День Вышки',
		:description => '4 сентября в &laquo;Парк Горького&laquo;',
		:tag => :event,
		:imageUrl => 'https://images.unsplash.com/photo-1517463859029-c01164a5505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
		:course => courseOne
	},
	{
		:title => 'Просмотр по технологиям дизайна',
		:description => '9 октября в 265 аудитории',
		:tag => :deadline,
		:imageUrl => 'https://images.unsplash.com/photo-1518347257504-c8ff93b3edb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=3368&q=80',
		:course => courseOne
	},
	{
		:title => 'Просмотр по Английскому языку',
		:description => '9 октября в 265 аудитории',
		:tag => :deadline,
		:imageUrl => 'https://images.unsplash.com/photo-1586791910032-5082330c9b00?ixlib=rb-1.2.1&auto=format&fit=crop&w=969&q=80',
		:course => courseOne
	}
])

Event.create([
	{
		:title => 'День студента',
		:description => '25 января в «Парк Горького»',
		:tag => :event,
		:imageUrl => 'https://images.unsplash.com/photo-1588418009089-ae1c5a49138c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
		:course => courseTwo
	},
	{
		:title => 'История и теория дизайна. Экзамен',
		:description => '9 октября в 265 аудитории',
		:tag => :deadline,
		:imageUrl => 'https://images.unsplash.com/photo-1587582345426-bf07f534b063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
		:course => courseTwo
	},
	{
		:title => 'Просмотр по Английскому языку',
		:description => '9 октября в 265 аудитории',
		:tag => :deadline,
		:imageUrl => 'https://images.unsplash.com/photo-1589231925160-83e62edd47de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
		:course => courseTwo
	}
])

Event.create([
	{
		:title => 'Лекция: «Делай круто и круто будет»',
		:description => '9 июня в 265 аудитории в 13.00',
		:tag => :event,
		:imageUrl => 'https://images.unsplash.com/photo-1589225636588-4965876ca134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseThree
	},
	{
		:title => 'Лекция: «Резюме мечты»',
		:description => '14 июня в 456 аудитории в 18.00',
		:tag => :event,
		:imageUrl => 'https://images.unsplash.com/photo-1589212143356-7c06ae2a2a6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseThree
	},
	{
		:title => 'Просмотр по Технологиям дизайна',
		:description => '20 июня в 365 аудитории',
		:tag => :deadline,
		:imageUrl => 'https://images.unsplash.com/photo-1589228698098-d9375afa15db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseThree
	}
])

Event.create([
	{
		:title => 'Лекция: «Приведи голову в порядок»',
		:description => '9 июня в 265 аудитории в 13.00',
		:tag => :event,
		:imageUrl => 'https://images.unsplash.com/photo-1589126057859-1a8e05ccc101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseFour
	},
	{
		:title => 'Лекция: «Не выходи из комнаты»',
		:description => '14 июня в 456 аудитории в 18.00',
		:tag => :event,
		:imageUrl => 'https://images.unsplash.com/photo-1589125703083-2721a2cc8db0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseFour
	},
	{
		:title => 'Диплом',
		:description => '30 мая в 365 аудитории',
		:tag => :deadline,
		:imageUrl => 'https://images.unsplash.com/photo-1589224727174-9b34b6607b06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseFour
	}
])

Event.create([
	{
		:title => 'День Вышки',
		:description => '4 сентября в &laquo;Парк Горького&laquo;',
		:tag => :event,
		:imageUrl => 'https://images.unsplash.com/photo-1589157640692-cd4464f67204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseFive
	},
	{
		:title => 'Просмотр по технологиям дизайна',
		:description => '9 октября в 265 аудитории',
		:tag => :deadline,
		:imageUrl => 'https://images.unsplash.com/photo-1589126291021-6768b7acd0c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseFive
	},
	{
		:title => 'Просмотр по Английскому языку',
		:description => '9 октября в 265 аудитории',
		:tag => :deadline,
		:imageUrl => 'https://images.unsplash.com/photo-1589225529399-8705282f98e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		:course => courseFive
	}
])
u1 = User.create(firstName: 'Анастасия', lastName: 'Залесова', role: roleAdmin, credential: credOne, course: courseFour)
u2 = User.create(firstName: 'Александр', lastName: 'Кутузов', role: roleAdmin, credential: credTwo, course: courseOne)
u3 = User.create(firstName: 'Владимир', lastName: 'Дмитриев', role: roleAdmin, credential: credThree, course: courseTwo)
u4 = User.create(firstName: 'Харитон', lastName: 'Пазенков', role: roleAdmin, credential: credFour, course: courseThree)
u5 = User.create(firstName: 'Анастасия', lastName: 'Фиалкина', role: roleAdmin, credential: credFive, course: courseFive)
u6 = User.create(firstName: 'Полина', lastName: 'Жукова', role: roleAdmin, credential: credSix, course: courseFour)
u7 = User.create(firstName: 'Анна', lastName: 'Осинцева', role: roleAdmin, credential: credSix, course: courseFour)
u8 = User.create(firstName: 'Жанна', lastName: 'Дубровина', role: roleAdmin, credential: credSix, course: courseFour)
u9 = User.create(firstName: 'Даниил', lastName: 'Никифоров', role: roleAdmin, credential: credSix, course: courseFour)

modOne1 = Mod.create(:name => '1 модуль', :course => courseOne)
modTwo1 = Mod.create(:name => '2 модуль', :course => courseOne)
modThree1 = Mod.create(:name => '3 модуль', :course => courseOne)
modFour1 = Mod.create(:name => '4 модуль', :course => courseOne)

discOne1 = Discipline.create(:name => 'Безопасность жизнедеятельности', :mod => modOne1)
discTwo1 = Discipline.create(:name => 'Креативное проектирование', :mod => modOne1)

Mark.create(value: 9, teacher_id: u2.id, student_id: u1.id, discipline: discOne1, date: DateTime.strptime("10/27/2016", "%m/%d/%Y"))
Mark.create(value: 7, teacher_id: u7.id, student_id: u1.id, discipline: discTwo1, date: DateTime.strptime("10/28/2016", "%m/%d/%Y"))

Material.create(name: 'Математика, 1 курс', url: 'https://drive.google.com/file/d/1sBtDeEN_2jwG8WdcfMmWD81RQvC2C6mv/preview', discipline: discOne1)
Material.create(name: 'Дисциплина и Право, 1 курс', url: 'https://drive.google.com/file/d/1JuJ4vcLPheMCbHqR-YWTJ6DOatD2Y26B/preview', discipline: discTwo1)

discOne2 = Discipline.create(:name => 'Социология', :mod => modTwo1)
discTwo2 = Discipline.create(:name => 'Креативное проектирование', :mod => modTwo1)
discThree2 = Discipline.create(:name => 'История', :mod => modTwo1)
discFour2 = Discipline.create(:name => 'Арт-практика', :mod => modTwo1)
discFive2 = Discipline.create(:name => 'Английский язык', :mod => modTwo1)

Mark.create(value: 8, teacher_id: u2.id, student_id: u1.id, discipline: discOne2, date: DateTime.strptime("12/23/2016", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u3.id, student_id: u1.id, discipline: discTwo2, date: DateTime.strptime("12/30/2016", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u4.id, student_id: u1.id, discipline: discThree2, date: DateTime.strptime("12/30/2016", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u5.id, student_id: u1.id, discipline: discFour2, date: DateTime.strptime("12/30/2016", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u6.id, student_id: u1.id, discipline: discFive2, date: DateTime.strptime("12/22/2016", "%m/%d/%Y"))

discOne3 = Discipline.create(:name => 'Креативное проектирование', :mod => modThree1)

Mark.create(value: 9, teacher_id: u2.id, student_id: u1.id, discipline: discOne3, date: DateTime.strptime("03/31/2017", "%m/%d/%Y"))

discOne4 = Discipline.create(:name => 'Философия', :mod => modFour1)
discTwo4 = Discipline.create(:name => 'Технологии дизайна', :mod => modFour1)
discThree4 = Discipline.create(:name => 'Психология', :mod => modFour1)
discFour4 = Discipline.create(:name => 'Креативное проектирование', :mod => modFour1)
discFive4 = Discipline.create(:name => 'История и теория дизайна', :mod => modFour1)
discSix4 = Discipline.create(:name => 'Внутренний экзамен по английскому языку (1 курс)', :mod => modFour1)
discSeven4 = Discipline.create(:name => 'Арт-практика', :mod => modFour1)
discEight4 = Discipline.create(:name => 'Английский язык', :mod => modFour1)

Mark.create(value: 8, teacher_id: u3.id, student_id: u1.id, discipline: discOne4, date: DateTime.strptime("06/22/2017", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u4.id, student_id: u1.id, discipline: discTwo4, date: DateTime.strptime("06/22/2017", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u5.id, student_id: u1.id, discipline: discThree4, date: DateTime.strptime("06/22/2017", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u9.id, student_id: u1.id, discipline: discFour4, date: DateTime.strptime("06/22/2017", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u8.id, student_id: u1.id, discipline: discFive4, date: DateTime.strptime("06/22/2017", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u7.id, student_id: u1.id, discipline: discSix4, date: DateTime.strptime("06/19/2017", "%m/%d/%Y"))
Mark.create(value: 10, teacher_id: u6.id, student_id: u1.id, discipline: discSeven4, date: DateTime.strptime("06/26/2017", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u2.id, student_id: u1.id, discipline: discEight4, date: DateTime.strptime("06/20/2017", "%m/%d/%Y"))

modOne2 = Mod.create(:name => '1 модуль', :course => courseTwo)

c2m1d1 = Discipline.create(:name => 'Веб паблишинг', :mod => modOne2)
c2m1d2 = Discipline.create(:name => 'Специальное проектирование. Дизайн и программирование', :mod => modOne2)

Mark.create(value: 10, teacher_id: u3.id, student_id: u1.id, discipline: c2m1d1, date: DateTime.strptime("10/23/2017", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u4.id, student_id: u1.id, discipline: c2m1d2, date: DateTime.strptime("10/28/2016", "%m/%d/%Y"))

modTwo2 = Mod.create(:name => '2 модуль', :course => courseTwo)

c2m2d1 = Discipline.create(:name => 'Специальное проектирование. Дизайн и программирование', :mod => modTwo2)
c2m2d2 = Discipline.create(:name => 'Перспективы развития науки, техники и технологий', :mod => modTwo2)
c2m2d3 = Discipline.create(:name => 'История и теория дизайна', :mod => modTwo2)
c2m2d4 = Discipline.create(:name => 'Веб прототипирование', :mod => modTwo2)
c2m2d5 = Discipline.create(:name => 'Арт-практика', :mod => modTwo2)
c2m2d6 = Discipline.create(:name => 'Английский язык', :mod => modTwo2)

Mark.create(value: 8, teacher_id: u1.id, student_id: u1.id, discipline: c2m2d1, date: DateTime.strptime("12/28/2017", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u2.id, student_id: u1.id, discipline: c2m2d2, date: DateTime.strptime("12/20/2017", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u4.id, student_id: u1.id, discipline: c2m2d3, date: DateTime.strptime("12/29/2017", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u3.id, student_id: u1.id, discipline: c2m2d4, date: DateTime.strptime("12/25/2017", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u7.id, student_id: u1.id, discipline: c2m2d5, date: DateTime.strptime("12/27/2017", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u8.id, student_id: u1.id, discipline: c2m2d6, date: DateTime.strptime("12/29/2017", "%m/%d/%Y"))

modThree2 = Mod.create(:name => '3 модуль', :course => courseTwo)

c2m3d1 = Discipline.create(:name => 'Английский язык', :mod => modThree2)
c2m3d2 = Discipline.create(:name => 'Интерактивный дизайн 3', :mod => modThree2)
c2m3d3 = Discipline.create(:name => 'Специальное проектирование. Дизайн и программирование', :mod => modThree2)

Mark.create(value: 8, teacher_id: u3.id, student_id: u1.id, discipline: c2m3d1, date: DateTime.strptime("03/29/2018", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u4.id, student_id: u1.id, discipline: c2m3d2, date: DateTime.strptime("03/28/2018", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u9.id, student_id: u1.id, discipline: c2m3d3, date: DateTime.strptime("03/26/2018", "%m/%d/%Y"))

modFour2 = Mod.create(:name => '4 модуль', :course => courseTwo)

c2m4d1 = Discipline.create(:name => 'Арт-практика', :mod => modFour2)
c2m4d2 = Discipline.create(:name => 'Интерактивный дизайн', :mod => modFour2)
c2m4d3 = Discipline.create(:name => 'История и теория дизайна', :mod => modFour2)
c2m4d4 = Discipline.create(:name => 'Независимый экзамен по английскому языку', :mod => modFour2)
c2m4d5 = Discipline.create(:name => 'История и теория дизайна', :mod => modFour2)
c2m4d6 = Discipline.create(:name => 'Проект Проект 2 курс Школа дизайна', :mod => modFour2)
c2m4d7 = Discipline.create(:name => 'Специальное проектирование. Дизайн и программирование', :mod => modFour2)
c2m4d8 = Discipline.create(:name => 'Технологический менеджмент', :mod => modFour2)

Mark.create(value: 10, teacher_id: u1.id, student_id: u1.id, discipline: c2m4d1, date: DateTime.strptime("06/18/2018", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u2.id, student_id: u1.id, discipline: c2m4d2, date: DateTime.strptime("06/26/2018", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u3.id, student_id: u1.id, discipline: c2m4d3, date: DateTime.strptime("06/28/2018", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u4.id, student_id: u1.id, discipline: c2m4d4, date: DateTime.strptime("06/22/2018", "%m/%d/%Y"))
Mark.create(value: 6, teacher_id: u5.id, student_id: u1.id, discipline: c2m4d5, date: DateTime.strptime("06/30/2018", "%m/%d/%Y"))
Mark.create(value: 10, teacher_id: u6.id, student_id: u1.id, discipline: c2m4d6, date: DateTime.strptime("06/19/2018", "%m/%d/%Y"))
Mark.create(value: 10, teacher_id: u7.id, student_id: u1.id, discipline: c2m4d7, date: DateTime.strptime("06/27/2018", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u8.id, student_id: u1.id, discipline: c2m4d8, date: DateTime.strptime("06/20/2018", "%m/%d/%Y"))

modOne3 = Mod.create(:name => '1 модуль', :course => courseThree)

c3m1d1 = Discipline.create(:name => 'Инновационный дизайн', :mod => modOne3)
c3m1d2 = Discipline.create(:name => 'Специальное проектирование. Дизайн и программирование', :mod => modOne3)

Mark.create(value: 9, teacher_id: u3.id, student_id: u1.id, discipline: c3m1d1, date: DateTime.strptime("10/24/2018", "%m/%d/%Y"))
Mark.create(value: 10, teacher_id: u4.id, student_id: u1.id, discipline: c3m1d2, date: DateTime.strptime("10/28/2018", "%m/%d/%Y"))

modTwo3 = Mod.create(:name => '2 модуль', :course => courseThree)

c3m2d1 = Discipline.create(:name => 'Инновационный дизайн', :mod => modTwo3)
c3m2d2 = Discipline.create(:name => 'История и теория дизайна', :mod => modTwo3)
c3m2d3 = Discipline.create(:name => 'Разработка и тестирование новых товаров и услуг', :mod => modTwo3)
c3m2d4 = Discipline.create(:name => 'Современный дизайн', :mod => modTwo3)
c3m2d5 = Discipline.create(:name => 'Специальное проектирование. Дизайн и программирование', :mod => modTwo3)
c3m2d6 = Discipline.create(:name => 'Английский язык', :mod => modTwo3)

Mark.create(value: 8, teacher_id: u7.id, student_id: u1.id, discipline: c3m2d1, date: DateTime.strptime("06/24/2018", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u5.id, student_id: u1.id, discipline: c3m2d2, date: DateTime.strptime("06/28/2018", "%m/%d/%Y"))
Mark.create(value: 10, teacher_id: u3.id, student_id: u1.id, discipline: c3m2d3, date: DateTime.strptime("06/20/2018", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u1.id, student_id: u1.id, discipline: c3m2d4, date: DateTime.strptime("06/25/2018", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u2.id, student_id: u1.id, discipline: c3m2d5, date: DateTime.strptime("06/21/2018", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u4.id, student_id: u1.id, discipline: c3m2d6, date: DateTime.strptime("06/29/2018", "%m/%d/%Y"))

modThree3 = Mod.create(:name => '3 модуль', :course => courseThree)

c3m3d1 = Discipline.create(:name => 'Визуальные коммуникации', :mod => modThree3)
c3m3d2 = Discipline.create(:name => 'Регулирование прав интеллектуальной собственности', :mod => modThree3)
c3m3d3 = Discipline.create(:name => 'Специальное проектирование. Дизайн и программирование', :mod => modThree3)

Mark.create(value: 8, teacher_id: u1.id, student_id: u1.id, discipline: c3m3d1, date: DateTime.strptime("03/30/2019", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u2.id, student_id: u1.id, discipline: c3m3d2, date: DateTime.strptime("03/25/2019", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u3.id, student_id: u1.id, discipline: c3m3d3, date: DateTime.strptime("03/26/2019", "%m/%d/%Y"))

modFour3 = Mod.create(:name => '4 модуль', :course => courseThree)

c3m4d1 = Discipline.create(:name => 'Визуальные коммуникации', :mod => modFour3)
c3m4d2 = Discipline.create(:name => 'Выход на рынок и продвижение проекта', :mod => modFour3)
c3m4d3 = Discipline.create(:name => 'История и теория дизайна', :mod => modFour3)
c3m4d4 = Discipline.create(:name => 'Проект 3 курс', :mod => modFour3)
c3m4d5 = Discipline.create(:name => 'История и теория дизайна', :mod => modFour3)
c3m4d6 = Discipline.create(:name => 'Проект Проект 2 курс Школа дизайна', :mod => modFour3)
c3m4d7 = Discipline.create(:name => 'Специальное проектирование. Дизайн и программирование', :mod => modFour3)
c3m4d8 = Discipline.create(:name => 'Технологический менеджмент', :mod => modFour3)

Mark.create(value: 10, teacher_id: u1.id, student_id: u1.id, discipline: c3m4d1, date: DateTime.strptime("06/18/2019", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u9.id, student_id: u1.id, discipline: c3m4d2, date: DateTime.strptime("06/20/2019", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u2.id, student_id: u1.id, discipline: c3m4d3, date: DateTime.strptime("06/27/2019", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u8.id, student_id: u1.id, discipline: c3m4d4, date: DateTime.strptime("06/30/2019", "%m/%d/%Y"))
Mark.create(value: 6, teacher_id: u3.id, student_id: u1.id, discipline: c3m4d5, date: DateTime.strptime("06/30/2019", "%m/%d/%Y"))
Mark.create(value: 10, teacher_id: u7.id, student_id: u1.id, discipline: c3m4d6, date: DateTime.strptime("06/19/2019", "%m/%d/%Y"))
Mark.create(value: 10, teacher_id: u4.id, student_id: u1.id, discipline: c3m4d7, date: DateTime.strptime("06/27/2019", "%m/%d/%Y"))
Mark.create(value: 8, teacher_id: u6.id, student_id: u1.id, discipline: c3m4d8, date: DateTime.strptime("06/20/2019", "%m/%d/%Y"))

modOne4 = Mod.create(:name => '1 модуль', :course => courseFour)

c4m1d1 = Discipline.create(:name => 'Визуальные коммуникации', :mod => modOne4)

Mark.create(value: 10, teacher_id: u3.id, student_id: u1.id, discipline: c4m1d1, date: DateTime.strptime("10/29/2019", "%m/%d/%Y"))

modTwo4 = Mod.create(:name => '2 модуль', :course => courseFour)

c4m2d1 = Discipline.create(:name => 'Арт-практика', :mod => modTwo4)
c4m2d2 = Discipline.create(:name => 'История и теория дизайна', :mod => modTwo4)
c4m2d3 = Discipline.create(:name => 'История и теория дизайна', :mod => modTwo4)
c4m2d4 = Discipline.create(:name => 'Современный дизайн', :mod => modTwo4)

Mark.create(value: 9, teacher_id: u9.id, student_id: u1.id, discipline: c4m2d1, date: DateTime.strptime("06/23/2019", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u8.id, student_id: u1.id, discipline: c4m2d2, date: DateTime.strptime("06/27/2019", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u7.id, student_id: u1.id, discipline: c4m2d3, date: DateTime.strptime("06/27/2019", "%m/%d/%Y"))
Mark.create(value: 9, teacher_id: u6.id, student_id: u1.id, discipline: c4m2d4, date: DateTime.strptime("06/28/2019", "%m/%d/%Y"))

modThree4 = Mod.create(:name => '3 модуль', :course => courseFour)

c4m3d1 = Discipline.create(:name => 'Арт-практика', :mod => modThree4)
c4m3d2 = Discipline.create(:name => 'Защита концепции выпускной квалификационной работы (на английском языке)', :mod => modThree4)
c4m3d3 = Discipline.create(:name => 'Производственная практика', :mod => modThree4)

Mark.create(value: 6, teacher_id: u1.id, student_id: u1.id, discipline: c4m3d1, date: DateTime.strptime("03/25/2020", "%m/%d/%Y"))
Mark.create(value: 7, teacher_id: u2.id, student_id: u1.id, discipline: c4m3d2, date: DateTime.strptime("04/21/2020", "%m/%d/%Y"))

modFour4 = Mod.create(:name => '4 модуль', :course => courseFour)

c4m4d1 = Discipline.create(:name => 'Защита выпускной квалификационной работы', :mod => modFour4)

modOne5 = Mod.create(:name => '1 модуль', :course => courseFive)
modTwo5 = Mod.create(:name => '2 модуль', :course => courseFive)
modThree5 = Mod.create(:name => '3 модуль', :course => courseFive)
modFour5 = Mod.create(:name => '4 модуль', :course => courseFive)

Email.create(
	title: 'Успеваемость',
	body: 'Уважаемая Анастасия! Ваша успеваемость по Математике в 3 модуле вызывает опасения. Все в порядке? Вы - наша лучшая ученица и надежда всего коллектива. С Уважением, Диана Валерьевна',
	supplier_id: u2.id,
	consumer_id: u1.id,
	new: true
)
Email.create(
	title: 'Поздравления',
	body: 'Уважаемая Анастасия! Поздравляем Вас с успешным прохождением теста на знание React JS. Вы были выбраны участником хакатона по JS "React для самых самых". С Уважением, Петр Григорьевич',
	supplier_id: u6.id,
	consumer_id: u1.id,
	new: true
);
