class Api::CatergoriesController < ApplicationController
  def index
    render json: Catergory.all
  end

  def create
    catergory = Catergory.create(cat_params)
    render json: catergory
  end

  def update
    catergory = Catergory.find(params[:id])
    render json: catergory
  end

  def destroy
    Catergory.find(params[:id]).destroy
  end
 
  private

  def cat_params
    params.require(:catergory).permit(:name)
  end

end