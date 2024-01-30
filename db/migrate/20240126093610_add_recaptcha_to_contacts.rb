class AddRecaptchaToContacts < ActiveRecord::Migration[7.1]
  def change
    add_column :contacts, :recaptcha, :string
  end
end
