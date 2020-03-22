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