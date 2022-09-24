class MessagesController < ApplicationController

    def create
        message = Message.create!(message_params)
        render json: message, status 201
    end

    private

    def message_params
        params.permit(:name, :phone, :email, :message)
    end
end
