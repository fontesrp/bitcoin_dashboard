class CreateUserCurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :user_currencies do |t|
      t.references :user, foreign_key: true
      t.references :currency, foreign_key: true

      t.timestamps
    end
  end
end
