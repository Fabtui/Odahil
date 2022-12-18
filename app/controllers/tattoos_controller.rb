class TattoosController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]

  def index
    @styles = Style.all.select { |m| m.tattoo_ids.count > 0 }.pluck(:name)
    @tattoos = Tattoo.sorted_by_created_at
  end

  def show
    @tattoo = Tattoo.find(params[:id])
  end

  def new
    @tattoo = Tattoo.new
  end

  def create
    @tattoo = Tattoo.new(tattoo_params)
    if @tattoo.save
      ids = params[:tattoo][:style_ids]
      create_style(ids)
      redirect_to pages_dashboard_path
    else
      render :new
    end
  end

  def edit
    @tattoo = Tattoo.find(params[:id])
  end

  def update
    @tattoo = Tattoo.find(params[:id])
    @tattoo.update(tattoo_params)
    if @tattoo.save
      ids = params[:tattoo][:style_ids]
      create_style(ids)
      redirect_to pages_dashboard_path
    else
      render :edit
    end
  end

  def destroy
    @tattoo = Tattoo.find(params[:id])
    @tattoo.destroy
    redirect_to pages_dashboard_path
  end

  private

  def tattoo_params
    params.require(:tattoo).permit(:id, :date, :name, :description, :customer, :on_home_slider, :style_id, photos: [])
  end

  def create_style(ids)
    styles = TattooStyle.where(tattoo_id: @tattoo.id)
    styles.each(&:destroy)
    ids.reject!{ |element| element == "" }
    ids.each do |id|
      if TattooStyle.where(tattoo_id: @tattoo.id, style_id: id).empty?
        TattooStyle.create!(tattoo_id: @tattoo.id, style_id: id)
      end
    end
  end
end
