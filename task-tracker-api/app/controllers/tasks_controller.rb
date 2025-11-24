class TasksController < ApplicationController
  # POST /tasks
  def create
    task = Task.new(task_params)

    if task.save
      render json: task, status: :created
    else
      render json: { errors: task.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # GET /tasks
  def index
    tasks = Task.order(created_at: :desc)
    render json: tasks
  end

  private

  def task_params
    params.require(:task).permit(:description)
  end
end
