# Rspec is a Domain Specific Language
# Specialized to test Ruby code
# Rspec is a Ruby gem
# Gems are a package manager for Ruby
# TDD - Test Driven Development
# Similar Red-Green-Refactor philosophy
# A title, an author, and pages -> data
# reading the book (i.e. turning pages) -> behavior / action
# rspec rspec_spec.rb - will return pass or fail no extra info
# rspec rspec_spec.rb -f d (format) (documentation)
# In our expect for our tests : parenthesis is for outcomes that are data // curlies are for outcomes that are behavior

class Book
  attr_accessor :title, :author, :page
  def initialize(author = 'anonymous')
    @title = title
    @author = author
    @page = 1
  end
  def read pages_read
    @page += pages_read
  end 
end