class Article < ApplicationRecord
  has_many :cart_articles
  has_many :carts, through: :cart_articles
end
