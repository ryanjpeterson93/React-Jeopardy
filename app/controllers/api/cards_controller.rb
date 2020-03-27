class Api::CardsController < ApplicationController

  def index

  end

  def show

  end

  def create

  end

  def update

  end

private

  def card_params
    params.require(:cards).permit(:name, :points, :flipped)
  end

end
