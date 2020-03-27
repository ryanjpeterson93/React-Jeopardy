class Api::CatergoriesController < ApplicationController
  def index
    render json: Catergory.all
  end

  def create
    cat = Catergory.create(cat_params)
    render json: cat
  end

  def update
    cat = Catergory.find(params[:id])
    render json: cat
  end

  def destroy
    Catergory.find(params[:id]).destroy
  end
 
  private

  def cat_params
    params.require(:catergories).permit(:name)
  end

end