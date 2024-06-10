Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :authentication, only: %i[show create destroy],  path: 'auth'
      resources :users, only: :create
    end
  end
end
