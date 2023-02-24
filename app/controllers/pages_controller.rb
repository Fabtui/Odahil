class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home profile shop]

  def home
    unless session[:visit]
      Visit.create(date: Time.now)
      session[:visit] = true
    end
    @tattoos = Tattoo.all
  end

  def profile
  end

  def shop
  end

  def dashboard
    @tattoos = Tattoo.sorted_by_created_at
    @arts = Art.sorted_by_created_at
  end
end
