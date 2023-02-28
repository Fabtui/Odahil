RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  config.authorize_with do
    unless current_user.admin?
      flash[:alert] = 'Sorry, no admin access for you.'
      redirect_to main_app.root_path
    end
  end
  ## == CancanCan ==
  # config.authorize_with :cancancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true
  config.included_models = [ "Art", "Tattoo", "Contact", 'Style', "Contact", 'Visit', "Article" ]
  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new do
      only [ "Art", "Tattoo", 'Style', "Article"]
    end
    export
    bulk_delete
    edit do
      only [ "Art", "Tattoo", 'Style', "Article"]
    end
    delete do
      only [ "Art", "Tattoo", "Contact", 'Style', "Article"]
    end
    # show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
