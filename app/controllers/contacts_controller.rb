class ContactsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    if user_signed_in?
      @contacts = Contact.sorted_by_date
    else
      redirect_to :root
    end
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      flash.now[:notice] = "Message envoyé"
      ContactMailer.contact(@contact.email).deliver_now
      ContactMailer.user(@contact).deliver_now
    else
      flash.now[:error] = "Erreur"
      render :new
    end
    # @contact = Contact.new(params[:contact])
    # @contact.request = request
    # if @contact.deliver
    #   flash.now[:notice] = "Message envoyé"
    # else
    #   flash.now[:error] = "Erreur"
    #   render :new
    # end
  end

  private

  def contact_params
    params.require(:contact).permit(:id, :name, :message, :email)
  end
end
