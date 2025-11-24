FROM ruby:3.3.0

RUN apt-get update -qq && apt-get install -y \
  build-essential \
  nodejs \
  sqlite3

WORKDIR /rails

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
