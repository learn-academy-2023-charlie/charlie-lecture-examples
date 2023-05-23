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
Created a file inside of our app/views/home folder with '.html.erb' extension
> `charlie_cohort.html.erb`


 - ERB : Embedded Ruby