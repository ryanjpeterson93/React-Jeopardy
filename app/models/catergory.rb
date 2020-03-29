class Catergory < ApplicationRecord
  has_many :cards, dependent: :destroy
end
