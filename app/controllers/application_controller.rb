class ApplicationController < ActionController::Base

  def require_current_user
    redirect_to(:root, :notice => "you must be logged in") unless current_user
  end

  helper_method :current_user
  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user = nil
    end
  end
end
