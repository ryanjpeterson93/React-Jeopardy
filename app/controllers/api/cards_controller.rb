class Api::CardsController < ApplicationController
  before_action :set_catergory 
  before_action :set_card, only: [:show, :update, :destroy]

  def index
    render json: @catergory.cards
  end

  def show
    render json: @catergory.cards.find(params[:id])
  end

  def create
    card = @catergory.cards.new(card_params)
    if card.save
      render json: card
    else
      render json: {message: 'catastrophic failure'}
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: {message: 'the pandemic has taken you'}
    end
  end

  def destroy
    @card.destroy 
  end
  
private

  def card_params
    params.require(:card).permit(:name, :points, :flipped, :answer_1, :answer_2, :answer_3, :answer_4, :correct_answer)
  end

  def set_catergory
    @catergory = Catergory.find(params[:catergory_id])
  end

  def set_card
    @card = @catergory.cards.find(params[:id])
  end

end