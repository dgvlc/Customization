class UpgradesController < ApplicationController
  before_action :set_upgrade, only: [:add_to_car, :destroy]


  def index
    @upgrades = Upgrade.all

    render json: @upgrades
  end

  def add_to_car
    @car = Car.find(params[:car_id])
    @car.upgrades << @upgrade

    render json: @car, include: :upgrades
  end

  def create 
    @upgrade = Upgrade.new(upgrade_params)

    if @upgrade.save
      render json: @upgrade, status: :created, location: @post
    else
      render json: @upgrade.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    @upgrade.destroy 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_upgrade
      @upgrade = Upgrade.find(params[:id])
    end

    def upgrade_params
      params.require(:upgrade)
    end
  end
