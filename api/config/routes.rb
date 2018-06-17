Rails.application.routes.draw do

  resources :tokens, only: :create
end
