## Restful Routes and Crud Actions 5/24/23 Charlie

## Crud Actions
C - create: saving a new instance into the database
R - read: displaying instance(s) from the database
U - update: modifying an existing instance in the database
D - delete: removing an instance from the database

## HTTP Verbs
read --> get - retrieves instance(s) 
create --> post - sends a new instance to the database
update --> patch - modifies one or more values of an instance in the database
update --> put - overrides an existing instance in the database
delete --> delete - removes an existing instance from the database

## Restful routes
- representational state transfer: standards and conventions for all web developers when creating http requests
index
show
new
create
edit
update
destroy

## Read --> Get -->
  > index: displays all the instances available from the model that is being queried
  > show: displays only one instance of the model that is being queried
  > new: displays an HTML form that allows the user to input data that will be used to create an instance in the database
  > edit: displays an HTML form that allows the user to modify data that will be used to update an instance in the database

## Create --> Post -->
  > create: takes the data from the new html form and saves a new instance in the database

## Update --> Put or Patch -->
  > update: takes the data from the edit html form and modifies an existing instance in the database

## Delete --> Delete -->
  > destroy: removes an instance from the database

- Due to Rails convention over configuration, there are strict guidelines for controller methods and routes.

## Routes
- define the url and calls the appropriate method for the request
```ruby
  # http_verb '/table_name' => 'controller_name#method_name'
  get '/recipes' => 'recipe#index'
```

## Rails controllers
- methods will be named as the restful routes
- hold the active record queries
```ruby
  def index
    @recipes = Recipe.all
  end
```
