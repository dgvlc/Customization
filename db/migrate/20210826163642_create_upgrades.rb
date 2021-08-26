class CreateUpgrades < ActiveRecord::Migration[6.1]
  def change
    create_table :upgrades do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.text :image_url
      t.string :type

      t.timestamps
    end
  end
end
