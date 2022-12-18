class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home profile shop]

  def home
    visit = Visit.new
    visit.date = Time.now
    visit.save
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
