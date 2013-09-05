require 'sinatra'
require 'sass'

get '/' do
  erb :index
end

get '/application.css' do
  scss :application, :format => :compressed
end
