class ChangeSomeName < ActiveRecord::Migration[6.1]
  def change
    rename_column :upgrades, :type, :upgrade_type
  end
end
