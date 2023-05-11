# Ruby Classes 5/11/23 Charlie

# Ruby classes: blueprints for objects, naming convention is PascalCase

# Object: an instance of a class

# Create a Ruby Class
  # keyword class: starts the Ruby class
  # keyword end: indicates where the scope of the class ends
class PokemonTrainer
end

# Create an object
  # use the new method to create a unique instance of the Class, which is tracked by an alphanumeric id
# crod = PokemonTrainer.new
# p crod
#<PokemonTrainer:0x000000013e8a42f8>

# henri = PokemonTrainer.new
# p henri
#<PokemonTrainer:0x000000012f847b98>

# Adding data to the Class
# setter and getter methods

# Setter: gives values in the class
# Getter: retrieves those values

class PokemonTrainer
  def set_trainer(trainer_name)
    @trainer_name = trainer_name
  end
end

# crod = PokemonTrainer.new
# p crod
# #<PokemonTrainer:0x000000013d03af28>

# crod.set_trainer('CRod')
# p crod
# #<PokemonTrainer:0x000000013d03af28 @trainer_name="CRod">

# henri = PokemonTrainer.new
# henri.set_trainer('Henri')
# p henri
#<PokemonTrainer:0x000000013480c408 @trainer_name="Henri">

# Getter method
class PokemonTrainer
  def set_trainer(trainer_name)
    @trainer_name = trainer_name
  end

  def get_trainer
    p @trainer_name
  end
end

# ramgel = PokemonTrainer.new
# ramgel.set_trainer('RomoCop')
# p ramgel
#<PokemonTrainer:0x000000014186bd88 @trainer_name="RomoCop">
# p ramgel.get_trainer
# ramgel.get_trainer
# "RomoCop"

# Initialize method
class PokemonTrainer

  def initialize(trainer_name, poke_ball)
    @trainer_name = trainer_name
    @poke_ball = poke_ball
  end

  def set_trainer(trainer_name)
    @trainer_name = trainer_name
  end

  def get_trainer
    p @trainer_name
  end
end

# bea = PokemonTrainer.new('BeATrainer', 3)
# p bea
#<PokemonTrainer:0x0000000155111dd0 @trainer_name="BeATrainer", @poke_ball=3>

# Additional setter methods

class PokemonTrainer

  def initialize(trainer_name, poke_ball)
    @trainer_name = trainer_name
    @poke_ball = poke_ball
    @poke_dex = []
  end

  def set_trainer(trainer_name)
    @trainer_name = trainer_name
  end

  def get_trainer
    p @trainer_name
  end

  # setter method
  def catch_pokemon pokemon
    @poke_dex << pokemon
    @poke_ball = @poke_ball - 1
  end

  # getter method
  def trainer_info
    p "#{@trainer_name} has #{@poke_dex.length} pokemons and only #{@poke_ball} pokeball(s) remaining"
  end
end

# tucker = PokemonTrainer.new('Mac', 5)
# p tucker
#<PokemonTrainer:0x000000015b131508 @trainer_name="Mac", @poke_ball=5, @poke_dex=[]>

# tucker.catch_pokemon('Squirtle')
# p tucker
#<PokemonTrainer:0x00000001220911e0 @trainer_name="Mac", @poke_ball=4, @poke_dex=["Squirtle"]>

# tucker.trainer_info
# "Mac has 1 pokemons and only 4 pokeball(s) remaining"

# attr_accessor
class PokemonTrainer
  attr_accessor(:trainer_name, :poke_ball)
  
  def initialize(trainer_name, poke_ball)
    @trainer_name = trainer_name
    @poke_ball = poke_ball
    @poke_dex = []
  end

  # setter method
  def catch_pokemon pokemon
    @poke_dex << pokemon
    @poke_ball = @poke_ball - 1
    p "You have caught a #{pokemon}" 
  end

  # getter method
  def trainer_info
    p "#{@trainer_name} has #{@poke_dex.length} pokemons and only #{@poke_ball} pokeball(s) remaining"
  end
end

jessica = PokemonTrainer.new('Jess', 7)
p jessica
#<PokemonTrainer:0x00000001268aeb08 @trainer_name="Jess", @poke_ball=7, @poke_dex=[]>

jessica.catch_pokemon('JigglyPuff')
p jessica
#<PokemonTrainer:0x000000015807e9b0 @trainer_name="Jess", @poke_ball=6, @poke_dex=["JigglyPuff"]>

jessica.trainer_info
# "Jess has 1 pokemons and only 6 pokeball(s) remaining"

jessica.catch_pokemon('Pikachu')
p jessica

