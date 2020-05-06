class SessionsController < ApplicationController
  def new
  end

  def create
  	creds = Credential.where(login: params[:user][:login]).first
    if !creds
      render json: {
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
      return
    end
    @user = User.where(credential: creds.id).first
    if (@user && creds.password == params[:user][:password].to_s)
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: {
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end

  private def session_params
    params.require(:user).permit(:login, :password)
  end
end
