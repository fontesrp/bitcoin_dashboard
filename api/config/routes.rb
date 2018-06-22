Rails.application.routes.draw do

  resources :tokens, only: :create
  resources :currencies, only: :index
  resources :exchange_rates, only: :index

  resources :users, except: :destroy, shallow: true do
    resources :user_currencies, except: [:show, :update]
  end
end
