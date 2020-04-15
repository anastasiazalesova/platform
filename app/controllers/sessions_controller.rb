class SessionsController < ApplicationController
  def new
  end

  def create
  	creds = Credential.where(login: params[:login]).first
    user = User.where(credential: creds.id).first
    if (user && creds.password == params[:password].to_s)
      session[:user_id] = user.id
      redirect_to root_url, notice: "Logged in!"
    else
      flash.now[:alert] = "Email or password is invalid"
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end
end