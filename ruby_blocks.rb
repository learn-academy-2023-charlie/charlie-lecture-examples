# Ruby Blocks 5/10/23 Charlie

# Iteration: repeating an action until a condition is met

# While
# Blocks
# Range

# While: method that requires a starting value and runs until a particular condition is met
# NOTE: include an incrementor to prevent an infinite loop aka stack overflow

# number = 0
# while number < 5
#   p number
#   number += 1
# end

# output ->
# 0
# 1
# 2
# 3
# 4

# long hand: number = number + 1
# short hand: number += 1

# BLOCKS
# Block - code statement that is grouped together
  # can grouped inside curly braces {}
  # between do and end keywords     do ... end
  # functionality that gets passed to a method

  # structure
    # object.method do ---> start of the block
      # code statement ---> what will be executed
      # code statement ---> what will be executed
    # end              ---> end of the block

    # object.method {code statement}  ---> inline block

  # TIMES - repeat this code a certain number of times as indicated by the object
  # 4.times do
  #   p 'polyglots'
  # end

  # output ->
  # "polyglots"
  # "polyglots"
  # "polyglots"
  # "polyglots"

  # EACH - method requires an object to determine the ending condition
    # pass parameters through pipes ||
    # bbq = ['chicken wings', 'beer', 'potato salad', 'ribs'] 

    # bbq.each do |value|
    #   p "Kyle will be buying #{value} for the bbq"
    # end

    # output ->
    # "Kyle will be buying chicken wings for the bbq"
    # "Kyle will be buying beer for the bbq"
    # "Kyle will be buying potato salad for the bbq"
    # "Kyle will be buying ribs for the bbq"

    # associate = ['Nicole', 'Gene', 'Will']

    # associate.each do |value|
    #   p "Thank you, #{value} 🍺"
    # end

    # output ->
    # "Thank you, Nicole 🍺"
    # "Thank you, Gene 🍺"
    # "Thank you, Will 🍺"

# RANGE
    # Range: Ruby class that creates a sequence
    # Structure: starting value..ending value

    # nums_range = 25..45
    # p nums_range
    # output -> 25..45

    # nums_range.each do |value|
    #   p value 
    # end
    # output -> printed numbers from 25 to 25

    # nums_range.each do |value|
    #   if value.even?
    #     p value
    #   end 
    # end

    # output -> 
    # 26
    # 28
    # 30
    # 32
    # 34
    # 36
    # 38
    # 40
    # 42
    # 44

    # ('a'..'g').each do |value|
    #   p value
    # end
    # output ->
    # "a"
    # "b"
    # "c"
    # "d"
    # "e"
    # "f"
    # "g"

# MAP
jump_start = ['Gene', 'Will']

# jump_start.map do |value|
#   p "#{value} taught me js, html, and css."
# end

# output:
# "Gene taught me js, html, and css."
# "Will taught me js, html, and css."

# p jump_start
# store in a variable to see the array from the map
# js_instructor = jump_start.map do |value|
#   p "#{value} taught me js, html, and css."
# end

# p js_instructor
# output -> 
# ["Gene taught me js, html, and css.", "Will taught me js, html, and css."]

# p jump_start
# ["Gene", "Will"]

# bang operator on the map
jump_start.map! do |value|
  p "#{value} taught me js, html, and css."
end

p jump_start
# output ->
["Gene taught me js, html, and css.", "Will taught me js, html, and css."]