Rails.application.routes.draw do
  resources :users, only: :create
  resources :cars
  resources :upgrades
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/cars/:car_id/upgrades/:id', to: 'upgrades#add_to_car'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
