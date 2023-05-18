## Active Record Migrations 5/18/23 Charlie

### setup
### lecture notes are stored on a separate markdown file
- $ `git checkout -b migrations`
- $ `touch active-record-migrations.md`

### Create rails app in a separate space
- $ `rails new circus_act -d postgresql -T`
- $ `cd circus_act`
- $ `code .`
- $ `rails s`
- $ `rails db:create`

## Migrations
- keep track of changes in the structure of your database by providing version control, reproducibility, and data integrity

## Process
- Generate a model to setup the structure of the database
- Migrate to update db schema
- Add data entries in the rails console
- Generate a migration to add columns to database
- Migrate to update db schema

## Generate a model
- $ `rails g model Performer name:string routine:string`  
Save the changes to the database schema
- $ `rails db:migrate`  
Now a schema is created, which is a file that maintains the database structure.

## Interact with the database
- $ `rails c`
- CRUD Actions to interact with the database
  - CREATE: Add data entries  
    > Performer.create(name:'Tucker', routine:'dunk tank')

  - READ: Show all the data entries  
    > Performer.all

  - UPDATE : Change the value of one of the properties  
    > vance = Performer.find 2  
    > vance.update(routine:'rollerskate')

## Add new columns to the database
- exit out of rails console
- Two options to generate migration files
  1. generator migration command in PascalCase
      - $ `rails g migration AddColumnTitleToPerformer`  
  2. generator migration command in snake_case
      - $ `rails g migration add_column_title_to_performer`

- Add change definition to the migration file
```rb
  def change
    add_column :performers, :title, :string
  end
```
- Migrate to update db schema
  - $ `rails db:migrate`
