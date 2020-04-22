json.extract! news_piece, :id, :title, :description, :time, :created_at, :updated_at
json.url news_piece_url(news_piece, format: :json)
