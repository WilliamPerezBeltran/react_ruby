FROM ruby:3.3.0

RUN apt-get update -qq && apt-get install -y nodejs sqlite3

WORKDIR /rails

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

CMD ["rails", "server", "-b", "0.0.0.0"]
