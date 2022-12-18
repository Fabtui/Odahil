Rails.application.routes.draw do
  root to: 'pages#home'
  get 'visits/index'
  get 'posts/new'
  post 'insta_posts/create'
  get 'index/new'
  get 'index/create'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  get 'pages/profile'
  get 'pages/dashboard'
  get 'pages/shop'
  get 'pages/react'
  resources "contacts", only: %i[new create index]

  resources :tattoos

  resources :arts

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tattoos, only: [ :index, :create ]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
