require 'rails_helper'

RSpec.describe Task, type: :model do
  it "is valid with a description" do
    task = Task.new(description: "Example task")
    expect(task).to be_valid
  end

  it "is invalid without a description" do
    task = Task.new(description: nil)
    expect(task).not_to be_valid
  end
end
