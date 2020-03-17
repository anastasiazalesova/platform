class Ability
  include CanCan::Ability

  ROLE_ADMIN = 'ADMIN'
  ROLE_STUDENT = 'STUDENT'
  ROLE_TEACHER = 'TEACHER'

  def initialize(user)
    alias_action :create, :read, :update, :destroy, :to => :manage
    # Define abilities for the passed in user here. For example:
    if (!user) 
      logger.debug "user is undefined"
      return
    end
    role = Role.find(user.role_id)
    role ||= Role.new
    if role.name == ROLE_ADMIN
      can :manage, :all
      logger.debug "user is ROLE_ADMIN"
    elsif role.name == ROLE_STUDENT
      can :read, Course
      can :read, Mod
      can :read, Mark
      can :read, Discipline
      can :read, Group
      logger.debug "user is ROLE_STUDENT"
    elsif role.name == ROLE_TEACHER
      can :manage, Mark
      can :manage, Discipline
      can :manage, User
      can :manage, Group
      can :manage, Course
      can :manage, Mod
    end
    #
    # The first argument to `can` is the action you are giving the user 
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on. 
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/ryanb/cancan/wiki/Defining-Abilities
  end
end
