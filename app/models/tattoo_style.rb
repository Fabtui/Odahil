class TattooStyle < ApplicationRecord
  belongs_to :tattoo
  belongs_to :style

  validates_uniqueness_of :style_id, scope: :tattoo_id, message: "Style already attributed to this tattoo."
end
