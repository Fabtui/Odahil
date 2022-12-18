class CreateTattooStyles < ActiveRecord::Migration[7.0]
  def change
    create_table :tattoo_styles do |t|
      t.references :tattoo, null: false, foreign_key: true
      t.references :style, null: false, foreign_key: true

      t.timestamps
    end
  end
end
