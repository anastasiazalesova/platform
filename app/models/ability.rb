class Ability
  include CanCan::Ability

  ROLE_ADMIN = 'ROLE_ADMIN'
  ROLE_STUDENT = 'ROLE_STUDENT'
  ROLE_TEACHER = 'ROLE_TEACHER'

  def initialize(user)
    alias_action :create, :read, :update, :destroy, :to => :manage
    Rails.logger.info "Processing the request..."
    # Define abilities for the passed in user here. For example:
    if (!user) 
      Rails.logger.info "User not found!"
      return
    end
    Rails.logger.info "Process role abilities"
    role = Role.find(user.role_id)
    role ||= Role.new
    Rails.logger.info "Process role abilities " + role.rights.map { |right| right.to_json }.to_s
    role.rights.each do |right|
        Rails.logger.info right
        if right.name.start_with?("course")
            can right.name.to_sym, Course
        elsif right.name.start_with?("mod")
            can right.name.to_sym, Mod
        elsif right.name.start_with?("mark")
            can right.name.to_sym, Mark
        elsif right.name.start_with?("discipline")
            can right.name.to_sym, Discipline
        elsif right.name.start_with?("group")
            can right.name.to_sym, Group
        elsif right.name.start_with?("user")
            can right.name.to_sym, User
        elsif right.name.start_with?("credential")
            can right.name.to_sym, Credential
        end
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
