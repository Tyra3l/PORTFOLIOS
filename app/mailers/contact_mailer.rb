class ContactMailer < ApplicationMailer
  def send_contact_email(contact)
    @contact = contact
    mail(to: 'guillaume.ingrin@gmail.com', subject: 'Nouveau message de contact')
  end
end
