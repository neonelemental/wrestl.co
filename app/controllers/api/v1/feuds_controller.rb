class Api::V1::FeudsController < ApiController
  def index
    render json: { hello: 'world' }
  end
end