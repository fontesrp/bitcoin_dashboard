class CreateExchangeRates < ActiveRecord::Migration[5.2]
  def change
    create_table :exchange_rates do |t|
      t.integer :buying_currency_id, index: true
      t.integer :selling_currency_id, index: true
      t.float :rate

      t.timestamps
    end
    add_foreign_key :exchange_rates, :currencies, column: :buying_currency_id
    add_foreign_key :exchange_rates, :currencies, column: :selling_currency_id
  end
end
