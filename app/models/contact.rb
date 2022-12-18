class Contact < ApplicationRecord
  validates :name, presence: true
  # attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  validates :email, presence: true, format: { with: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i, message: " invalide" }
  validates :message, presence: true
  validates_confirmation_of :email, :on => :create, :message => "should match confirmation"

  scope :sorted_by_date, -> { order(created_at: :desc) }

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: "My Contact Form",
      to: "fabrice.tuitui@gmail.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
