# Ruby Inheritance  5/12/23 Charlie

# inheritance: allows classes to share characteristics with each other
# superclass/parent class: class that shares its characteristics
# subclass/children: class that receives the characteristics from the parent class

class SoapOpera

  # attr_accessor: combines getter and setter method for instance variables
  attr_accessor(:title, :theme)

  # initialize: automatically runs when creating object
  def initialize(title, theme)
    @title = title
    @theme = theme
  end

  # getter method to retrieve data
  def get_novela
    "#{@title} is about #{@theme}"
  end

end

# create an object from parent class
all_my_children = SoapOpera.new('All My Children', 'suspense')

p all_my_children
#<SoapOpera:0x0000000136036998 @title="All My Children", @theme="suspense">

# Create inheritance
class ABC < SoapOpera
  # initialize on child
  def initialize(title, theme, run_time, rating)
    # super: calls on parent class and borrows parameters from parent class (inheritance)
    super(title, theme)

    # instance variables: control by child class
    @run_time = run_time
    @rating = rating
  end
end

# create object from child class
general_hospital = ABC.new('General Hospital', 'drama', '60 mins', 10)
p general_hospital

#<ABC:0x00000001370434f8 @title="General Hospital", @theme="drama", @run_time="60 mins", @rating="10">

p general_hospital.get_novela
# output: "General Hospital is about drama"

