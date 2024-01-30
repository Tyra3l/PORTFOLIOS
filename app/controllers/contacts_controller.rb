class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      # Envoyer l'email ici
      ContactMailer.send_contact_email(@contact).deliver_now

      flash[:success] = "Votre message a été envoyé avec succès!"
      redirect_to new_contact_path
    else
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :title, :message, :recaptcha)
  end
end
