class CreateJoinTableCarUpgrade < ActiveRecord::Migration[6.1]
  def change
    create_join_table :cars, :upgrades do |t|
      # t.index [:car_id, :upgrade_id]
      # t.index [:upgrade_id, :car_id]
    end
  end
end
