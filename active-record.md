# Active Record 5/19/2023

```
rails new active-record-intro -d postgresql -T
rails db:create
```

### Active Record

- ORM - object relational mapper, translator between rails and sql
- ORM for Rails and Postgresql
- ORM - Ruby-like SQL queries

### Model

- database class
- naming classes - PascalCasing, singular
- each row in the table is an object (instance of the model class)

### "Convention over configuration"

- Rails in very opinionated - tables, files and folders
- Generator commands - build structures within the app

### Goal

- Create a db table, add data, perform CRUD actions on the data

### Active Record

From the docs:  
The types supported by Active Record are :primary_key, :string, :text, :integer, :float, :decimal, :datetime, :timestamp, :time, :date, :binary, :boolean.

### Process

```
rails generate model Schedule day:string date:date event:string
```

- creates a model class and migration
- migration is proposal for db changes
- running the migration creates the table and creates the schema.rb
- schema.rb is representation of the db

```
rails db:migrate
```

### Active Record Console

```
rails c
Schedule.all => SELECT "schedules".\* FROM "schedules" => []
```

### CREATE

```
Schedule.create(day: 'Wednesday', date: '2023-05-17', event: 'white boarding')
```

### READ

```
Schedule.all
Schedule.first
Schedule.last
Schedule.find(2)
Schedule.where(day: 'Wednesday')
```

### UPDATE

Have to know what we are going to update

```
yoga = Schedule.last
yoga.update(event: 'Yoga!')
```

### DELETE

Have to know what we are going to delete

```
y = Schedule.where(day: 'Tuesday').first
y.destroy
```
