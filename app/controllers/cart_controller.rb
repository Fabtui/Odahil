class CartController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    if session[:cart]
      @cart_articles = session[:cart].map { |id| Article.find(id) }
      @total = @cart_articles.map { |article| article.price }.sum
    else
      @cart_articles = []
    end
  end
end
