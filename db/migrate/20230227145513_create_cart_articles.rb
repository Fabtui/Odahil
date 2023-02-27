class CreateCartArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_articles do |t|
      t.references :article, null: false, foreign_key: true
      t.references :cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
