class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @articles = Article.all
  end

  def add_to_cart
    article = Article.find(params[:id])
    if session[:cart]
      session[:cart].push(article.id)
      redirect_to articles_path, notice: 'Article ajouté à votre panier'
    else
      session[:cart] = [article.id]
      redirect_to articles_path, notice: 'Article ajouté à votre panier'
    end
  end
end
