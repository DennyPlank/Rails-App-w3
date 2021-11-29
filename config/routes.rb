Rails.application.routes.draw do
#resources :books
root "books#app"

# These routes will all render json
 get '/books', to: 'books#index'
 get '/books/:id', to: 'books#show'

 post '/books', to: 'books#create'

 put '/books/:id', to: 'books#update'
 patch '/books/:id', to: 'books#updated'

 delete '/books/:id', to: 'books#destroy'
end
