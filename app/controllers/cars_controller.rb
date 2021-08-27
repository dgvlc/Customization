class CarsController < ApplicationController
  before_action :set_car, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index 
    @cars = Car.all

    render json: cars
  end

  def show 
    render json: @car, include: :upgrades  
  end

  def create
    @car = Car.new(car_params)
    @car.user = @current_user

    if @car.save
      render json: @car, status: :created, location: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @car.update(car_params)
      render json: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @car.destroy
  end

  private
    
    def set_car
      @car = Car.find(params[:id])
    end

    def car_params
      params.require(:car)
    end
end
end
