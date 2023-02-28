class Article < ApplicationRecord
  validates :name, presence: true
  monetize :price_cents
  validates :price_cents, presence: true, numericality: { greater_than: 0 }
  validates :quantity, presence: true, numericality: { greater_than: 0 }
end
