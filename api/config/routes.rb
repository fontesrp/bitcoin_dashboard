Rails.application.routes.draw do

  resources :tokens, only: :create
  resources :users, except: :destroy
end
