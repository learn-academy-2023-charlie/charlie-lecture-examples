## Active Record Associations
# Concepts:
- Primary Key
  > id
  > Unique identifier
  > Rails handles creating each id upon creation
  > has_many

- Foreign Key
  > associates one table with another (connects two tables)
  > provides the relationship
  > developers create the foreign key as a column
  > belongs_to

```bash
$ rails g model Student name:string cohort_id:integer
```

```rb
  # Cohort.rb
class Cohort < ApplicationRecord
  has_many :students
end
```
```rb
  # Student.rb  
class Student < ApplicationRecord
  belongs_to :cohort
end
```