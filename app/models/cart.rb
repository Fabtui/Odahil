class Cart < ApplicationRecord
  has_many :cart_articles, dependent: :destroy
  has_many :articles, through: :cart_articles
end
