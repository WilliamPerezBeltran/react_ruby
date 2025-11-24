FROM ruby:3.3.0

# Instala dependencias necesarias
RUN apt-get update -qq && apt-get install -y nodejs sqlite3

# Establece la carpeta donde vivirá la app
WORKDIR /rails

# Copia solo Gemfile para aprovechar cache
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copia el resto del proyecto
COPY . .

# Mantener abierta la terminal
CMD ["rails", "server", "-b", "0.0.0.0"]
