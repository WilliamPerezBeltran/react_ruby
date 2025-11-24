-# README
-Construir la imagen
- docker compose build 
-Crear la base de datos (necesario SOLO la primera vez)
- docker compose run api rails db:prepare
-Levantar el servidor Rails
- docker compose up
+Ejecutar SIEMPRE Rails dentro del contenedor, no en tu laptop.
 
-
-TODO sucede dentro del contenedor
-
-Para correr RSpec:
+Entra al contenedor:
 
 docker exec -it task-tracker-api bash
-bundle exec rspec
 
 
-Para instalar una gema:
-
-docker exec -it task-tracker-api bash
-bundle add nombre_gema
+Adentro del contenedor, ejecuta:
 
-
-Para instalar dependencias nuevas:
-
-docker exec -it task-tracker-api bash
-bundle install
\ No newline at end of file
+rails generate model Task description:string
\ No newline at end of file



docker compose up -d
docker exec -it task-tracker-api bash
rails generate model Task description:string
rails db:migrate
rails s -b 0.0.0.0