class Article < ApplicationRecord
  has_many :orders
  validates :name, presence: true
  validates :price_cents, presence: true, numericality: { greater_than: 0 }
  validates :quantity, presence: true, numericality: { greater_than: 0 }
end
