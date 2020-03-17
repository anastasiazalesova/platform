
Rails.application.routes.draw do
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
  get 'welcome/index'

  root 'welcome#index'

  resources :sessions, only: [:new, :create, :destroy]
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
end
