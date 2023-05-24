Rails.application.routes.draw do
  get 'github_user/:username/:logged_in' => 'github_user_account#github_user'
end
