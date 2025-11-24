# Task Tracker Backend

This project is a **Ruby on Rails API** for managing tasks. It provides endpoints to create and list tasks, and includes RSpec tests for both models and requests.

---

## Requirements

* Ruby 3.3.0
* Rails 7.1.6
* SQLite3 (or another database if configured)

## Setup

1. Install dependencies:

```bash
bundle install
```

2. Prepare the database and seed it:

```bash
rails db:create
rails db:migrate
rails db:seed
```

3. Start the Rails server (if not already running):

```bash
rails s
```

* The API will be available at: `http://localhost:3000`

## API Endpoints

* **GET /tasks**

  * Returns all tasks in descending order (newest first)

* **POST /tasks**

  * Creates a new task
  * Request body (JSON):

  ```json
  {
    "task": {
      "description": "My new task"
    }
  }
  ```

## Running Tests

The backend uses **RSpec** for testing.

1. Install development and test gems:

```bash
bundle install
```

2. Run all tests:

```bash
bundle exec rspec
```

* Tests include:

  * Model tests: `spec/models/task_spec.rb`
  * Request tests: `spec/requests/tasks_spec.rb`

## Notes

* Ensure CORS is configured for frontend access in `config/initializers/cors.rb`:

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001' # React frontend URL
    resource '*', headers: :any, methods: [:get, :post, :patch, :put, :delete, :options, :head]
  end
end
```

* Rails API runs by default on port 3000.

## Project Structure

```
app/               # Rails app source code
  controllers/     # TasksController
  models/          # Task model
  serializers/     # TaskSerializer
config/            # Configuration (database, initializers, routes)
db/                # Database files and migrations
spec/              # RSpec tests
Dockerfile         # Rails container image
docker-compose.yml # Docker compose setup
Gemfile            # Gem dependencies
```
