json.extract! email, :id, :title, :body, :supplier_id, :consumer_id, :new, :created_at, :updated_at
json.url email_url(email, format: :json)
