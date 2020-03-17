json.extract! credential, :id, :login, :password, :created_at, :updated_at
json.url credential_url(credential, format: :json)
