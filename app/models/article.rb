class Article < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
  validates :quantity, presence: true, numericality: { greater_than: 0 }
  has_many :order_articles
  has_many :orders, through: :order_articles
  has_many :article_categories, dependent: :destroy
  has_many :categories, through: :article_categories
end
