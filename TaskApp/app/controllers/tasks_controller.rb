class TasksController < ApplicationController
	def index
		@tasks = Task.all
		render json: @tasks	
	end

	def show
		@task = Task.find(params[:id])
		render json: @task
	end

	def new
		@task = Task.new
	end

	def create
		@task = Task.create(task_params)
		redirect_to tasks_path
	end

	def update
		@task = Task.find(params[:id])
		@task.subject = params[:subject]
		@task.detail = params[:detail]
		@task.save
		redirect_to tasks_path
	end
	
	def destroy
  		@task = Task.find(params[:id])
  		@task.destroy
  		redirect_to tasks_path
	end

	private
		def task_params
			params.permit(:subject, :detail)
		end
end
