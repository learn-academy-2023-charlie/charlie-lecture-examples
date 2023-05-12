# Ruby Hashes
# Hash : A specific kind of object in OOP Ruby
  my_pets = { cat1: 'Dexter', cat2: 'Dotty', dog1: 'Tala', dog2: 'Gus'}
  p my_pets
  # {:cat1=>"Dexter", :cat2=>"Dotty", :dog1=>"Tala", :dog2=>"Gus"}
  # (:) is a symbol
  # (=>) is a hash rocket

# Another way to create a new Hash
  # the_people = Hash.new
  # p the_people
  # {}

# Manipulating Hashes
  # Read - to return your data
  # Create - making a new hash
  # Update - can add content
  # Delete/ Destroy - removes content

my_pets = { cat1: 'Dexter', cat2: 'Dotty', dog1: 'Tala', dog2: 'Gus'}
# READ: does not manipulate data just brings to the "front"
  p my_pets
  # {:cat1=>"Dexter", :cat2=>"Dotty", :dog1=>"Tala", :dog2=>"Gus"}
  p my_pets[:cat1]
  # "Dexter"

# Create: 
  the_people = Hash.new
  p the_people
  # {}

# Update: we will add or modify
  my_pets[:dog3] = 'Fooch'
  p my_pets
  # {:cat1=>"Dexter", :cat2=>"Dotty", :dog1=>"Tala", :dog2=>"Gus", :dog3=>"Fooch"}
  my_pets[:hamster1] = 'Neo'
  p my_pets
  # {:cat1=>"Dexter", :cat2=>"Dotty", :dog1=>"Tala", :dog2=>"Gus", :dog3=>"Fooch", :hamster1=>"Neo"}
  my_pets[:hamster1] = 'Onyx'
  p my_pets
  # {:cat1=>"Dexter", :cat2=>"Dotty", :dog1=>"Tala", :dog2=>"Gus", :dog3=>"Fooch", :hamster1=>"Onyx"}

# Delete - removes content
  my_pets.delete(:hamster1)
  p my_pets
  # {:cat1=>"Dexter", :cat2=>"Dotty", :dog1=>"Tala", :dog2=>"Gus", :dog3=>"Fooch"}

# CRUD - Create / Read / Update / Delete

# Enumerables and DUCK typing
# Enumerable : anything that you can iterate over (i.e. array, ranges, hash)
# Duck Typing : if it quacks like a duck, walks like a duck, than it is a duck.
# Modules: a way to group together things that have similar properties

# Each:
  charlie_talents = { juggler: 'Cherry', marathon_runner: 'Aubrey', vocalist: 'Scott', artist: 'Yue-Han', archer: 'Will', engineer: 'Henri' }

  charlie_talents.each do |key, value|
    p "#{value} is a #{key}"
  end
  # "Cherry is a juggler"
  # "Aubrey is a marathon_runner"
  # "Scott is a vocalist"
  # "Yue-Han is a artist"
  # "Will is a archer"
  # "Henri is a engineer"

# Map:
  def talent hash
    hash.map do |key, value|
      "#{value} is a #{key}"
    end
  end
p talent(charlie_talents)
# ["Cherry is a juggler", "Aubrey is a marathon_runner", "Scott is a vocalist", "Yue-Han is a artist", "Will is a archer", "Henri is a engineer"]
p talent charlie_talents
# ["Cherry is a juggler", "Aubrey is a marathon_runner", "Scott is a vocalist", "Yue-Han is a artist", "Will is a archer", "Henri is a engineer"]