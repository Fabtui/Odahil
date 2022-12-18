class ArtsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]

  def index
    @arts = Art.sorted_by_created_at
  end

  def show
    @art = Art.find(params[:id])
  end

  def new
    @art = Art.new
  end

  def create
    @art = Art.new(art_params)
    if @art.save
      redirect_to pages_dashboard_path
    else
      render :new
    end
  end

  def edit
    @art = Art.find(params[:id])
  end

  def update
    @art = Art.find(params[:id])
    @art.update(art_params)
    if @art.save
      redirect_to pages_dashboard_path
    else
      render :edit
    end
  end

  def destroy
    @art = Art.find(params[:id])
    @art.destroy
    redirect_to pages_dashboard_path
  end

  private

  def art_params
    params.require(:art).permit(:id, :name, :description, photos: [])
  end
end
