class App < Sinatra::Base
  register Sinatra::AssetPack

  assets {
    serve '/css',    { :from => 'assets/css' }
    serve '/images', { :from => 'assets/images' }

    css :application, [ 'css/application.css' ]

    css_compression :yui
  }

  set :scss, { :load_paths => [ "#{App.root}/assets/css" ] }

  get '/' do
    erb :index
  end
end
