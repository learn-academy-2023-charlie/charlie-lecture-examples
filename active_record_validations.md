## Generate a rails app

## Generate a model

## Rspec
- testing framework for ruby code
- Red/Green/Refactor process of TDD
  - Create a test
  - See it fail
  - Create validations
  - See the pass

## Validations
- ensure that data cannot be created without the required attributes
- use helpers with this process


## Error messages in the rspec test suite
```bash
Customer
  is not valid without a name attribute (FAILED - 1)

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