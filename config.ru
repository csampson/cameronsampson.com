require 'sinatra'
require 'sinatra/assetpack'
require 'sass'
require 'yui/compressor'

require './app'
App.set :run, false
run App
