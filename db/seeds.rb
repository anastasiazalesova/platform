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

u1 = User.create(firstName: 'Анастасия', lastName: 'Залесова', role: roleAdmin, credential: credOne)
u2 = User.create(firstName: 'Диана', lastName: 'Латыговская', role: roleAdmin, credential: credTwo)
u3 = User.create(firstName: 'Дмитрий', lastName: 'Зражевский', role: roleAdmin, credential: credThree)
u4 = User.create(firstName: 'Виталий', lastName: 'Петров', role: roleAdmin, credential: credFour)
u5 = User.create(firstName: 'Людмила', lastName: 'Слепакова', role: roleAdmin, credential: credFive)
u6 = User.create(firstName: 'Петр', lastName: 'Всеволод', role: roleAdmin, credential: credSix)

courseOne = Course.create(:name => '1 курс');
courseTwo = Course.create(:name => '2 курс');
courseThree = Course.create(:name => '3 курс');
courseFour = Course.create(:name => '4 курс');
courseFive = Course.create(:name => '5 курс');

modOne1 = Mod.create(:name => '1 модуль', :course => courseOne)
modTwo1 = Mod.create(:name => '2 модуль', :course => courseOne)
modThree1 = Mod.create(:name => '3 модуль', :course => courseOne)
modFour1 = Mod.create(:name => '4 модуль', :course => courseOne)

discOne1 = Discipline.create(:name => 'Математика', :mod => modOne1)
discTwo1 = Discipline.create(:name => 'Дисциплина и Право', :mod => modOne1)
discThree1 = Discipline.create(:name => 'АРТ-практика', :mod => modOne1)
discFour1 = Discipline.create(:name => 'Математика лекции', :mod => modOne1)
discFive1 = Discipline.create(:name => 'Астрономия', :mod => modOne1)

Mark.create(value: 10, teacher_id: u2.id, student_id: u1.id, discipline: discOne1, date: DateTime.now)
Mark.create(value: 10, teacher_id: u3.id, student_id: u1.id, discipline: discTwo1, date: DateTime.now)
Mark.create(value: 10, teacher_id: u4.id, student_id: u1.id, discipline: discThree1, date: DateTime.now)
Mark.create(value: 10, teacher_id: u5.id, student_id: u1.id, discipline: discFour1, date: DateTime.now)
Mark.create(value: 10, teacher_id: u6.id, student_id: u1.id, discipline: discFive1, date: DateTime.now)

Material.create(name: 'Математика, 1 курс', url: 'https://drive.google.com/file/d/1sBtDeEN_2jwG8WdcfMmWD81RQvC2C6mv/preview', discipline: discOne1)
Material.create(name: 'Дисциплина и Право, 1 курс', url: 'https://drive.google.com/file/d/1JuJ4vcLPheMCbHqR-YWTJ6DOatD2Y26B/preview', discipline: discTwo1)
Material.create(name: 'АРТ-практика, 1 курс', url: 'https://drive.google.com/file/d/1Zvi1l0hvCynYJhPXt8nRcW6FTKTT7X7k/preview', discipline: discThree1)

discOne2 = Discipline.create(:name => 'Математика', :mod => modTwo1)
discTwo2 = Discipline.create(:name => 'Дисциплина и Право', :mod => modTwo1)
discThree2 = Discipline.create(:name => 'АРТ-практика', :mod => modTwo1)
discFour2 = Discipline.create(:name => 'Математика лекции', :mod => modTwo1)
discFive2 = Discipline.create(:name => 'Астрономия', :mod => modTwo1)

Mark.create(value: 9, teacher_id: u2.id, student_id: u1.id, discipline: discOne2, date: DateTime.now)
Mark.create(value: 8, teacher_id: u3.id, student_id: u1.id, discipline: discTwo2, date: DateTime.now)
Mark.create(value: 7, teacher_id: u4.id, student_id: u1.id, discipline: discThree2, date: DateTime.now)
Mark.create(value: 6, teacher_id: u5.id, student_id: u1.id, discipline: discFour2, date: DateTime.now)
Mark.create(value: 5, teacher_id: u6.id, student_id: u1.id, discipline: discFive2, date: DateTime.now)

discOne3 = Discipline.create(:name => 'Математика', :mod => modThree1)
discTwo3 = Discipline.create(:name => 'Дисциплина и Право', :mod => modThree1)
discThree3 = Discipline.create(:name => 'АРТ-практика', :mod => modThree1)
discFour3 = Discipline.create(:name => 'Математика лекции', :mod => modThree1)
discFive3 = Discipline.create(:name => 'Астрономия', :mod => modThree1)

Mark.create(value: 2, teacher_id: u2.id, student_id: u1.id, discipline: discOne3, date: DateTime.now)
Mark.create(value: 10, teacher_id: u2.id, student_id: u1.id, discipline: discOne3, date: DateTime.now)
Mark.create(value: 3, teacher_id: u3.id, student_id: u1.id, discipline: discTwo3, date: DateTime.now)
Mark.create(value: 4, teacher_id: u4.id, student_id: u1.id, discipline: discThree3, date: DateTime.now)
Mark.create(value: 5, teacher_id: u5.id, student_id: u1.id, discipline: discFour3, date: DateTime.now)

discOne4 = Discipline.create(:name => 'Математика', :mod => modFour1)
discTwo4 = Discipline.create(:name => 'Дисциплина и Право', :mod => modFour1)
discThree4 = Discipline.create(:name => 'АРТ-практика', :mod => modFour1)
discFour4 = Discipline.create(:name => 'Математика лекции', :mod => modFour1)
discFive4 = Discipline.create(:name => 'Астрономия', :mod => modFour1)

Mark.create(value: 10, teacher_id: u3.id, student_id: u1.id, discipline: discTwo4, date: DateTime.now)
Mark.create(value: 8, teacher_id: u4.id, student_id: u1.id, discipline: discThree4, date: DateTime.now)
Mark.create(value: 9, teacher_id: u5.id, student_id: u1.id, discipline: discFour4, date: DateTime.now)

modOne2 = Mod.create(:name => '1 модуль', :course => courseTwo)
modTwo2 = Mod.create(:name => '2 модуль', :course => courseTwo)
modThree2 = Mod.create(:name => '3 модуль', :course => courseTwo)
modFour2 = Mod.create(:name => '4 модуль', :course => courseTwo)

discOne1 = Discipline.create(:name => 'Математика', :mod => modOne2)
discTwo1 = Discipline.create(:name => 'Дисциплина и Право', :mod => modOne2)
discThree1 = Discipline.create(:name => 'АРТ-практика', :mod => modOne2)
discFour1 = Discipline.create(:name => 'Математика лекции', :mod => modOne2)
discFive1 = Discipline.create(:name => 'Астрономия', :mod => modOne2)

modOne3 = Mod.create(:name => '1 модуль', :course => courseThree)
modTwo3 = Mod.create(:name => '2 модуль', :course => courseThree)
modThree3 = Mod.create(:name => '3 модуль', :course => courseThree)
modFour3 = Mod.create(:name => '4 модуль', :course => courseThree)

modOne4 = Mod.create(:name => '1 модуль', :course => courseFour)
modTwo4 = Mod.create(:name => '2 модуль', :course => courseFour)
modThree4 = Mod.create(:name => '3 модуль', :course => courseFour)
modFour4 = Mod.create(:name => '4 модуль', :course => courseFour)

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
