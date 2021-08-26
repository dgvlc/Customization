class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :make
      t.string :model
      t.integer :year
      t.text :description
      t.string :color
      t.text :image_url
      t.integer :base_price
      t.integer :upgrade_price
      t.integer :total_price
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
