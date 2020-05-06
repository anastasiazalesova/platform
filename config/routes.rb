
Rails.application.routes.draw do
  scope(:path => '/railsapp') do
    resources :events
    resources :news_pieces
    post '/log_in', to: 'sessions#create'
    delete '/log_out', to: 'sessions#destroy'
    get '/logged_in', to: 'sessions#is_logged_in?'
    resources :marks
    resources :groups
    resources :users
    resources :credentials
    resources :roles
    resources :rights
    resources :materials
    resources :disciplines
    resources :mods
    resources :courses
    resources :emails

    resources :sessions, only: [:new, :create, :destroy]
    get 'signup', to: 'users#new', as: 'signup'
    get 'login', to: 'sessions#new', as: 'login'
    get 'logout', to: 'sessions#destroy', as: 'logout'
  end
  get '*other', to: 'static#index'

end
