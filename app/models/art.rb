class Art < ApplicationRecord
  has_many_attached :photos

  scope :sorted_by_created_at, -> { order(created_at: :desc) }

  validates_presence_of :name
end
