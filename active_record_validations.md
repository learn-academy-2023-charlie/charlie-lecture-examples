# Active Record Validations 5/22/23 Charlie

## github repo
- cd into the github repo
- create a branch
- create a markdown file to store your notes

## Generate a rails app
- Generate rails app in a separate space, temporary rails app
- Will not be push to github repo
- $ `rails new charlie_network -d postgresql -T`
- $ `cd charlie_network`
- $ `rails db:create`
- $ `rails s`

## Add rspec dependencies
- introduce testing framework before models
- `rspec-rails` is an extension of rspec which automatically generate test files for each model
- `spec/` - this spec directory is where all of the tests are stored
- $ `bundle add rspec-rails`
- $ `rails generate rspec:install`

## Generate a model
- $ `rails g model ServicePlan plan:string price:integer`
- $ `rails db:migrate`

## Rspec Testing
- testing framework for ruby code
- Red/Green/Refactor process of TDD
  - Create a test
  - See it fail
  - Create validations
  - See the pass
- run test suite with file path that is storing the test
- $ `rspec spec/models/service_plan_spec.rb`

## 1. Create a test
- spec/models/service_plan_spec.rb
```rb
  # helper gem that loads on the dependencies that the rspec test needs
  require 'rails_helper'

  # describe method that groups all the tests for the ServicePlan model
  RSpec.describe ServicePlan, type: :model do
    # nested in the describe block, it method takes in a string that describes what attribute is being
    # testing for an entry missing the plan attribute
    it 'is not valid without a plan' do
      # create a data entry
      basic = ServicePlan.create(price: 175)

      # for note purposes to see data that we are creating for the tests
      # p "basic entry", basic
        # Output: "basic entry"
        #<ServicePlan id: nil, plan: nil, price: 175, created_at: nil, updated_at: nil>
      # p "errors", basic.errors.full_messages
        # Output: "errors"
        # ["Plan can't be blank"]

      # nested in the it block, the expect statement takes in the error method for the missing attribute with the rspec matcher .to_not be_empty
      # errors are automatically collected with rails. To verify whether or not a particular attribute of an object is valid, you can use errors[:attribute]
      # .to_not be_empty is a false value, which asks the question is the errors empty? 
      expect(basic.errors[:plan]).to_not be_empty
    end

  end

```

## 2. See the test fail
- $ `rspec spec/models/service_plan_spec.rb`
- Good failure when failure is on the error message for the attribute missing
```bash
  # Output in the terminal for rspec testing suite

  # model passed to describe method
  ServicePlan

    # string passed to it method with failure message
    is not valid without a plan (FAILED - 1)

  # list of failures display the code that failed
  Failures:

    1) ServicePlan is not valid without a plan
      Failure/Error: expect(basic.errors[:plan]).to_not be_empty
        expected `[].empty?` to be falsey, got true
      # ./spec/models/service_plan_spec.rb:8:in `block (2 levels) in <top (required)>'

  # shows how long it took the test to run
  Finished in 0.06943 seconds (files took 1.1 seconds to load)
  # displays how many tests are in the describe method and how many failed
  1 example, 1 failure

  # display the line of code that failed
  Failed examples:

  rspec ./spec/models/service_plan_spec.rb:4 # ServicePlan is not valid without a plan
```

## 3. Create validations
- app/models/service_plan.rb
- Validations: ensure that data cannot be created without the required attributes
- use validation helpers with this process
```rb
  class ServicePlan < ApplicationRecord
    # keyword validates with the attribute as a symbol, validation helper
    validates :plan, presence: true
    has_many :customers
  end
```

## Rspec testing with associations
### 1. Create a model with a foreign key attribute
- $ `rails g model Customer name:string account:integer paid:boolean service_plan_id:integer`
### 2. Setup the relationship on the applicable classes for each model
- app/models
```rb
  class ServicePlan < ApplicationRecord
    has_many :customers
  end

  # class for model with foreign key
  class Customer < ApplicationRecord
    belongs_to :service_plan
  end
```
- $ `rails db:migrate`
### 3. Create test
```rb
  require 'rails_helper'

  RSpec.describe Customer, type: :model do
    it 'is not valid without a name attribute' do
      # create an entry for the table whose model establishes the has_many relationship
      basic = ServicePlan.create(plan: 'Basic', price: 175)
      # create an entry for the table whose model establishes the belongs_to relationship, this model has the foreign key
      aubrey = basic.customers.create(account: 183312345, paid: true)
      expect(aubrey.errors[:name]).to_not be_empty
    end

  end
```
### 4. See the test fail
- $ `rspec spec/models/customer_spec.rb`
***
***Good failure***
### Error messages in the rspec test suite
```bash
  Failures:

    1) Customer is not valid without a name attribute
      Failure/Error: expect(aubrey.errors[:name]).to_not be_empty
        expected `[].empty?` to be falsey, got true
      # ./spec/models/customer_spec.rb:11:in `block (2 levels) in <top (required)>'
```
***
***Bad failure***  
### Error messages in the rspec test suite
```bash
  Failures:

    1) Customer is not valid without a name attribute
      Failure/Error: aubrey = basic.customers.create(account: 183312345, paid: true)
      
      NameError:
        Rails couldn't find a valid model for Plan association. Please provide the :class_name option on the association declaration. If :class_name is already provided, make sure it's an ActiveRecord::Base subclass.
      # ./spec/models/customer_spec.rb:6:in `block (2 levels) in <top (required)>'
      # ------------------
      # --- Caused by: ---
      # NameError:
      #   uninitialized constant Customer::Plan
      #   ./spec/models/customer_spec.rb:6:in `block (2 levels) in <top (required)>'
```
### 5. Create validations
```rb
  # modify class of the model with belongs_to relationship
  class Customer < ApplicationRecord
    belongs_to :service_plan
    validates :name, presence: true
  end
```
### 6. See the test pass
- $ `rspec spec/models/customer_spec.rb`
