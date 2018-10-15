Rails.application.routes.draw do

  devise_for :users
  root 'users#index'

  resources :groups, only: [:index, :new, :create] do
    resources :messages, only: [:index, :create]
  end

  resources :relationships, only: [:create, :destroy]
  resources :users do
    member do
     get :followings, :followedes, :matches
     post :user_edit
    end
  end

  get "search", to: "users#search"

end
