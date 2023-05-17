## Database Intro 5/17/23 Charlie

```rb
# class definition - blueprint for the objects
class Developer
  attr_accessor(:name, :cohort, :talent)
  def initialize(name, cohort, talent)
    @name = name
    @cohort = cohort
    @talent = talent
  end
end

# objects - a unique instance of the class
cherry = Developer.new('Cherry', '23C', 'juggler') 
yue_han = Developer.new('Yue Han', '23C', 'artist') 
will = Developer.new('Will', '23C', 'archer') 
```

## Database 
  - place where we can store data
  - relational db: structure data in table with rows and columns
  - Class is similar to the model: structure of the data
  - Instance variables are similar to the columns: header of the table, defines the rules of the table, type of data
  - Each instance(object) is similar to each data entry or row on the table
  - Instead of having variables to store each instance, the database using primary keys (PK): unique identifier for each instance in a database

## SQL (Structured Query Language)
- talk to databases
- domain specific language: HTML, Rspec, SQL
- general purpose languages: JS, Ruby

## POSTGRES
- one of the SQL languages
- open source, object related database management system
- flavor of SQL that is very OOP
