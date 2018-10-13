Rails.application.routes.draw do

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'users#index'

  resources :groups, only: [:index, :new, :create] do
    resources :messages, only: [:index, :create]
  end

  resources :relationships, only: [:create, :destroy]
  resources :users do
    member do
     get :followings, :followedes, :matches
    end
  end
end
