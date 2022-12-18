class Tattoo < ApplicationRecord
  has_many_attached :photos
  has_many :tattoo_styles, dependent: :destroy
  has_many :styles, through: :tattoo_styles

  scope :sorted_by_created_at, -> { order(created_at: :desc) }

  validates_presence_of :name
end
