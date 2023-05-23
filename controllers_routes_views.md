# Controllers, Routes, and Views

### Controller:
 coordinates the interaction between the user, the model, and views (directs our app)

### Route:
 how the user gets somewhere in our application

### View:
 what the user sees

### URL:
 Uniform Resource Locator

 --------------------------------

```bash
  $ rails generate controller Home
```
Generated a home_controller.rb file for us
```ruby
  class HomeController < ApplicationController
  end
```
And a views/home folder for us
```ruby
  app/views/home
```

Created a method that's purpose is to render some HTML
```ruby
  home_controller.rb
  def greeter
    render html: 'Yo!'
  end
```

Made a route that will trigger the method
```ruby
  # HTTP verb / url (location) / hash rocket / name_of_controller#method
  get '/greeter' => 'home#greeter'
```
### Views
After creating a method named charlie_cohort
```ruby
  def charlie_cohort 
    @charlie = 'Charlie is a pretty awesome cohort in 2023'
    @students = ['CRod', 'Aubrey', 'Ernesto', 'Kyle', 'Will', 'Ramgel']
  end
```

Create a file inside of our app/views/home folder with `.html.erb` extension
> `charlie_cohort.html.erb`
- ERB : Embedded Ruby

```ruby
  <h1> Hello </h1>
  <h2> <%= @charlie %> </h2>
  <ul>
    <% @students.each do |value| %> 
      <li> <%= value %> </li>
    <% end %>
  </ul>
```

Create a route that will trigger our method
```ruby
  config/routes.rb
  # HTTP verb, url (location),  hashrocket,  controller, methods 
  get '/charlie' => 'home#charlie_cohort'
```

My landing page will be a view that will have links to my other views
```ruby
/views/home/landing.html.erb
  <h1>Welcome to this App!</h1>
  <%= link_to 'Greeter', '/greeter' %>
  <br/> 
  <%= link_to 'Joke', '/joke' %>
  <br/>
  <%= link_to 'Current Cohort', '/current' %>
```

- link_to method will take a title/text (words displayed for user to click on), and then the path
> ` <%= link_to 'title', '/path' %> `

Go Charlie!