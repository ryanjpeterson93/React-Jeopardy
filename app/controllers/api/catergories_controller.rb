class Api::CatergoriesController < ApplicationController
  def index
    render json: Catergorie.all
  end

  def create
    cat = Catergorie.create(name: params[:name])
    render json: cat
  end

  def update
    cat = Catergorie.find(params[:id])
    render json: cat
  end

  def destroy
    Catergorie.find(params[:id]).destroy
  end

end



