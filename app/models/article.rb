class Article < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  validates :quantity, presence: true, numericality: { greater_than: 0 }
end
