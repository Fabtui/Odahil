class CartsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    if session[:cart]
      @cart_articles = session[:cart].map { |id| Article.find(id) }
      @total = @cart_articles.map(&:price).sum.round(2)
    else
      @cart_articles = []
    end
  end

  def purchase
    session[:cart].each do |id|
      article = Article.find(id)
      unless article.quantity.zero?
        article.quantity -= 1
        article.save
      end
    end
    session[:cart] = []
    redirect_to carts_path, notice: 'Merci pour votre achat'
  end
end
