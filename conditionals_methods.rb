# Ruby conditionals and methods

  # In Ruby we define our methods
  # Custom methods will need an input to produce an output
  # def - define
  # end - similar to closing curly brackets

  # def greeter
  # implicit return here
  #   'Hello Charlie'
  # end
  # # invoking my method here with p
  # p greeter

# Arguments:
  # def greeter name
  #   'Hello Charlie #{name}'
  # end
  # p greeter
  # `greeter': wrong number of arguments (given 0, expected 1) (ArgumentError)

  # def greeter name
  #   "Hello Charlie's #{name}"
  # end
  # p greeter'Suri'

# Multiple Arguments!
  # def multiply(num1, num2)
  #   num1 * num2
  # end
  # p multiply(7,10)
  # # 70
  # p multiply(77,10)
  # # 770

# Conditionals with our methods:
  # def is_this_greater(num1, num2)
  #   # every def has an end, every IF has an end
  #   if num1 > num2
  #     "#{num1} is greater than #{num2}"
  #   elsif num2 > num1
  #     "#{num2} is greater than #{num1}"
  #   else
  #     "#{num1} is greater than #{num2}"
  #   # end goes at the END of our conditional logic
  #   end
  # end
  # p is_this_greater(10,15)
  # "15 is greater than 10"

# Gathering user input
# gets - will stop execution until user has provided input

  # my_name = gets
  # p my_name
  # # "Nicole\n"
  # # \n - line breaks

  # p 'What is your name?'
  # your_name = gets.chomp
  # p your_name
  # # "Ernesto"

  # my_name = gets.chomp
  # if my_name == 'Nicole'
  #   p 'Hey, welcome back Nicole'
  # else 
  #   p "C'mon in the waters great #{my_name}"
  # end
  # Nicole 
  # "Hey, welcome back Nicole"
  # Halie
  # "C'mon in the waters great Halie"

# User Inputs and conditional logic
  # puts 'Enter your name:'
  # user_name = gets.chomp
  # p user_name
  # puts 'Enter your age:'
  # user_age = gets.chomp.to_i
  # p user_age

  # def can_you_vote(name, age)
  #   if age >= 18
  #     "Hello #{name}. At this time you can vote at #{age}"
  #   elsif age < 18
  #     "#{name} you are not old enough to vote at #{age}"
  #   end
  # end

  # p can_you_vote(user_name, user_age)
  # `>=': comparison of String with 18 failed (ArgumentError)
  # p user_age.class
  # "26"
  # String
  # passing my users age .to_i will convert the string to an integer