class GithubUserAccountController < ApplicationController
  def github_user
    @logged_in = params[:logged_in]
    if @logged_in == 'true'
      @user = params[:username]
    else
      @user = 'You are not logged in, please log in to view your Github account.'
    end
  end
end

# params = {username: 'Sarah'}
