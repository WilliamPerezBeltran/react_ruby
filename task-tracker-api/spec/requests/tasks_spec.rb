require 'rails_helper'

RSpec.describe "Tasks API", type: :request do
  describe "GET /tasks" do
    it "returns tasks ordered by newest first" do
      task1 = Task.create!(description: "Task 1")
      task2 = Task.create!(description: "Task 2")

      get "/tasks", as: :json

      expect(response).to have_http_status(:ok)

      json = JSON.parse(response.body)
      expect(json.length).to eq(2)
      expect(json.first["id"]).to eq(task2.id)
    end
  end

  describe "POST /tasks" do
    it "creates a task successfully" do
      post "/tasks", params: { task: { description: "New task" } }, as: :json

      expect(response).to have_http_status(:created)

      json = JSON.parse(response.body)
      expect(json["description"]).to eq("New task")
      expect(Task.count).to eq(1)
    end

    it "returns an error when description is missing" do
      post "/tasks", params: { task: { description: "" } }, as: :json

      expect(response).to have_http_status(:unprocessable_entity)

      json = JSON.parse(response.body)
      expect(json["errors"]).to include("Description can't be blank")
    end
  end
end
