class UsersController < ApplicationController
  before_action :require_current_user, except: [:new, :index, :show, :create]
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    authorize! :user_read, User
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
    authorize! :user_read, @user
  end

  # GET /users/new
  def new
    # authorize! :create, @user
    @user = User.new
  end

  # GET /users/1/edit
  def edit
    authorize! :user_update, @user
  end

  # POST /users
  # POST /users.json
  def create
    role = Role.where(:name => 'ROLE_ADMIN').first
    if !role
      render json: { errors: @user.errors, status: :unprocessable_entity }
      return
    end
    credential = Credential.new(:login => user_params[:login], :password => user_params[:password])

    @user = User.new(:firstName => user_params[:firstName], :lastName => user_params[:lastName], :role => role, :credential => credential)

    if @user.save
      render json: { status: :created, location: @user }
    else
      render json: { errors: @user.errors, status: :unprocessable_entity }
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    authorize! :user_update, @user
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    authorize! :user_destroy, @user
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:firstName, :lastName, :role, :login, :password, :password_confirmation)
    end
end
