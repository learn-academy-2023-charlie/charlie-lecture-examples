# require the rspec tools
require 'rspec'
# pass the file path of the file that will be tested
require_relative 'book.rb'

describe 'Book' do
  it 'has to be real' do
    expect{Book.new}.to_not raise_error
  end

  it 'has a title' do
    # creating an instance of Book
    my_book = Book.new
    # setter method to give my_book
    my_book.title = 'Catch 22'
    # expecting
    expect(my_book.title).to be_a String
    expect(my_book.title).to eq 'Catch 22'
  end

  it 'has an author' do
    # instance of Book
    my_book = Book.new
    # Anonymous author
    expect(my_book.author).to eq 'anonymous'
    expect(my_book.author).to be_a String
    # updating author
    catch22 = Book.new 'Joseph Heller'
    expect(catch22.author).to eq 'Joseph Heller'
  end

  it 'has a current page' do
    my_book = Book.new
    expect(my_book.page).to eq 1
    expect(my_book.page).to be_a Integer
  end

  it 'can count pages read' do
    my_book = Book.new
    expect{ my_book.read 10}.to change{my_book.page}.from(1).to(11)
  end

end

# AAA - standard philosophy for writing specs
# Arrange : inputs / targets
# Act : calling methods / interactions
# Assert : outcomes /outputs
# *Some tests won't have all attributes*