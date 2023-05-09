# Ruby! 5/9/2023

Matz - MINASWAN

Ruby is:

- Dynamic - dynamically-typed language
- Interpreted - code is read line by line
- Open-source - available to everyone
- Scripting language - makes evaluation and executes logic
- Object-oriented programming (OOP) - everything is an instance of a class

Data Types are Classes:

- Integers - whole numbers
- Floats - partial numbers
- String - single quotes
- Boolean
  - equality ==
  - relational < > <= >=
  - logical AND &&
  - logical OR ||
- Nil

```bash
➜  charlie-lecture-examples git:(ruby-intro) ✗ ruby -v
ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [arm64-darwin21]
➜  charlie-lecture-examples git:(ruby-intro) ✗ irb
3.0.0 :001 > exit
➜  charlie-lecture-examples git:(ruby-intro) ✗ irb
3.0.0 :001 > 7 + 6
 => 13
3.0.0 :002 > 5 - 3
 => 2
3.0.0 :003 > 5 * 3
 => 15
3.0.0 :004 > 6 / 2
 => 3
3.0.0 :005 > 4 ** 4
 => 256
3.0.0 :006 > 5 % 2
 => 1
3.0.0 :007 > 5 / 2
 => 2
3.0.0 :008 > 5.3
 => 5.3
3.0.0 :009 > 5.0 / 2
 => 2.5
3.0.0 :010 > 5 / 2.0
 => 2.5
3.0.0 :011 > 6 / 2.0
 => 3.0
3.0.0 :012 > 'hello'
 => "hello"
3.0.0 :013 > "hey y'all"
 => "hey y'all"
3.0.0 :014 > true
 => true
3.0.0 :015 > false
 => false
3.0.0 :016 > 5 == 5
 => true
3.0.0 :017 > 5 == '5'
 => false
3.0.0 :018 > 5 > 6
 => false
3.0.0 :019 > 5 < 9
 => true
3.0.0 :020 > 5 <= 9
 => true
3.0.0 :021 > 4 >= 2+2
 => true
3.0.0 :022 > 4 != 3
 => true
3.0.0 :023 > 'hi' == 'hi' && 4 == 2+2
 => true
3.0.0 :024 > 'hi' == 'hi' && 4 == 2+5
 => false
3.0.0 :025 > 'hi' == 'hi' || 4 == 2+2
 => true
3.0.0 :026 > 'hi' == 'hi' || 4 == 2+5
 => true
3.0.0 :027 > nil
 => nil
3.0.0 :028 > my_name = 'sarah'
 => "sarah"
3.0.0 :029 > "hey there, #{my_name}"
 => "hey there, sarah"
3.0.0 :030 > my_name.length
 => 5
3.0.0 :031 > my_name.upcase
 => "SARAH"
3.0.0 :032 > my_name.capitalize
 => "Sarah"
3.0.0 :033 > my_name.reverse
 => "haras"
3.0.0 :034 > my_name
 => "sarah"
3.0.0 :035 > my_name.delete('h')
 => "sara"
3.0.0 :036 > my_name.delete'h'
 => "sara"
3.0.0 :037 > my_name.include?('s')
 => true
3.0.0 :038 > my_name
 => "sarah"
3.0.0 :039 > my_name = my_name.reverse
 => "haras"
3.0.0 :040 > my_name
 => "haras"
3.0.0 :041 > my_name.capitalize!
 => "Haras"
3.0.0 :042 > my_name
 => "Haras"
3.0.0 :043 > my_name.class
 => String
3.0.0 :044 > true.class
 => TrueClass
3.0.0 :045 > false.class
 => FalseClass
3.0.0 :046 > 6.class
 => Integer
3.0.0 :047 > 4.2.class
 => Float
3.0.0 :048 > nil.class
 => NilClass
3.0.0 :049 > '9' == 9
 => false
3.0.0 :050 > '9'.to_i == 9
 => true
3.0.0 :051 > 'hi'.to_i
 => 0
3.0.0 :052 > 90.to_s
 => "90"
3.0.0 :053 > my_array = [4, 5, 6, 7]
 => [4, 5, 6, 7]
3.0.0 :054 > my_array.length
 => 4
3.0.0 :055 > my_array[0]
 => 4
3.0.0 :056 > my_array[3]
 => 7
3.0.0 :057 > my_array[-1]
 => 7
3.0.0 :058 > my_array[-2]
 => 6
3.0.0 :059 > my_array.first
 => 4
3.0.0 :060 > my_array.last
 => 7
3.0.0 :061 > my_array.reverse
 => [7, 6, 5, 4]
3.0.0 :062 > my_arrat
(irb):62:in `<main>': undefined local variable or method `my_arrat' for main:Object (NameError)
Did you mean?  my_array
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.6.4/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :063 > my_array
 => [4, 5, 6, 7]
3.0.0 :064 > my_array.reverse.first
 => 7
3.0.0 :065 > my_array.first.reverse
(irb):65:in `<main>': undefined method `reverse' for 4:Integer (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.6.4/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :066 > my_array[3] = 'hello'
 => "hello"
3.0.0 :067 > my_array
 => [4, 5, 6, "hello"]
3.0.0 :068 > my_array << 7
 => [4, 5, 6, "hello", 7]
3.0.0 :069 > my_array
 => [4, 5, 6, "hello", 7]
```
