Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }

  root to: 'users#index'

  resources :relationships, only: [:create, :destroy]
  resources :users do
    resources :groups, only: [:index, :new, :create] do
      resources :messages, only: [:index, :create]
    end
    member do
      get :follow, :follower
      post :user_edit, :continuous_user_edit, :character_update, :region_update
    end
    collection do
      get :search
    end
  end
end
