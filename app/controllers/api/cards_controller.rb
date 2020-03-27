class Api::CardsController < ApplicationController
  before_action :set_catergory 
  before_action :set_card, only: [:show, :update, :destory]

  def index
    render json: @catergory.cards
  end

  def show
    render json: @catergory.cards.find(params[:id])
  end

  def create
    card = @category.cards.new(card_params)
    if cards.save
      render json: card
    else
      render json: {message: 'things and stuff'}
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: {message: 'the pandemic has taken you'}
    end
  end

  def destory
    @card.destory 
  end
  
private

  def card_params
    params.require(:cards).permit(:name, :points, :flipped)
  end

  def set_catergory
    @catergory = Catergory.find(params[:catergory_id])
  end

  def set_card
    @card = @category.cards.find(params[:id])
  end

end