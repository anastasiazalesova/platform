json.extract! user, :id, :firstName, :lastName, :role_id, :credential_id, :created_at, :updated_at
json.url user_url(user, format: :json)
