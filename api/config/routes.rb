Rails.application.routes.draw do

  resources :tokens, only: :create
  resources :currencies, only: :index
  resources :users, except: :destroy
end
