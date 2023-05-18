# Rails Intro 5/17/2023

### Rails is:

- a full-stack web development framework
- written in Ruby
- created by DHH
- "convention over configuration"
- open-source

### MVC

- architecture philosophy
- model, view, controller
- view - HTML, CSS, JSX, JavaScript
- model - database layer, business logic
- controller - traffic flow manager
- only model and controller - API
- React - view only

### Rails version

- managed by rvm
- `rails -v`
- `rails new my-first-rails-app -d postgresql -T`
- `-d`: drops the SQLite db
- `postgres`: specify what db you want
- `-T`: drops the minitest testing suite

### ActiveRecord::NoDatabaseError

- requires a db
- db only live on an individual computer
- `rails db:create`
