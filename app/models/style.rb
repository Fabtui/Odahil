class Style < ApplicationRecord
  has_many :tattoo_styles
  has_many :tattoos, through: :tattoo_styles
end
