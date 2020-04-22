
Rails.application.routes.draw do
  scope(:path => '/railsapp') do
    resources :events
    resources :news_pieces
    get 'sessions/new'
    get 'sessions/create'
    get 'sessions/destroy'
    resources :marks
    resources :groups
    resources :users
    resources :credentials
    resources :roles
    resources :rights
    resources :disciplines
    resources :mods
    resources :courses

    resources :sessions, only: [:new, :create, :destroy]
    get 'signup', to: 'users#new', as: 'signup'
    get 'login', to: 'sessions#new', as: 'login'
    get 'logout', to: 'sessions#destroy', as: 'logout'
  end
  get '*other', to: 'static#index'

end
