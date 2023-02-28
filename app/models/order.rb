class Order < ApplicationRecord
  belongs_to :user
  has_many :order_articles
  has_many :articles, through: :order_articles

  monetize :amount_cents
end
