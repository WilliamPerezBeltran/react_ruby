# README

## Build the image

``` bash
docker compose build
```

## Create the database (only needed the first time)

``` bash
docker compose run api rails db:prepare
```

## Start the Rails server

``` bash
docker compose up
```

Rails must always be executed inside the container, not on your local
machine.

## Enter the container

``` bash
docker exec -it task-tracker-api bash
```

## Generate the Task model

Inside the container:

``` bash
rails generate model Task description:string
rails db:migrate
rails s -b 0.0.0.0
```

## Test the endpoints using curl

### Create a task (POST /tasks)

``` bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"task": {"description": "Buy milk"}}'
```

### Expected response (status 201)

``` json
{
  "id": 1,
  "description": "Buy milk",
  "created_at": "2025-11-24T12:34:56.000Z",
  "updated_at": "2025-11-24T12:34:56.000Z"
}
```

### List tasks (GET /tasks)

``` bash
curl http://localhost:3000/tasks
```

### Expected response (ordered by created_at desc)

``` json
[
  {
    "id": 2,
    "description": "Another task",
    "created_at": "...",
    "updated_at": "..."
  },
  {
    "id": 1,
    "description": "Buy milk",
    "created_at": "...",
    "updated_at": "..."
  }
]
```

## Load seeds

### Without Docker

``` bash
rails db:seed
```

### With Docker

``` bash
docker compose run api rails db:seed
```



rails db:drop db:create db:migrate db:seed
bundle exec rspec

