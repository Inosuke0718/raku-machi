Rails.application.routes.draw do

  root to: "products#index"

  # resources :products do
  # end

  resources :products do
    collection do
      get 'show1', to: 'products#show1'
      get 'index1', to: 'products#index1'
    end
  end

end
