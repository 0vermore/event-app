Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  namespace :api do
    namespace :v1 do
      resource :authentication, only: %i[show create destroy],  path: 'auth'
      resources :users, only: :create
      resources :events do
        resources :messages
      end
    end
  end
end
