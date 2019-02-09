Rails.application.routes.draw do
	root 'tasks#index'
	#resources :tasks
	get 'tasks/', to: 'tasks#index'
	post 'tasks/', to: 'tasks#create'
	post 'tasks/:id/delete', to: 'tasks#destroy'
	post 'tasks/:id/edit', to: 'tasks#update'
	
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
