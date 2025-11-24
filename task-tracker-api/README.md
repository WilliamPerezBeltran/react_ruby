# README
Construir la imagen
 - docker compose build 
Crear la base de datos (necesario SOLO la primera vez)
 - docker compose run api rails db:prepare
Levantar el servidor Rails
- docker compose up


TODO sucede dentro del contenedor

Para correr RSpec:

docker exec -it task-tracker-api bash
bundle exec rspec


Para instalar una gema:

docker exec -it task-tracker-api bash
bundle add nombre_gema


Para instalar dependencias nuevas:

docker exec -it task-tracker-api bash
bundle install