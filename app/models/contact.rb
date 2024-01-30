class Contact < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, format: { with: /\A[^@\s]+@[^@\s]+\z/ }
  validates :title, presence:true
  validates :message, presence: true
  attr_accessor :recaptcha
  validate :recaptcha_validation

  private

  def recaptcha_validation
    errors.add(:base, 'Captcha verification failed') unless verify_recaptcha(secret_key: ENV['RECAPTCHA_SECRET_KEY'])
  end
end
