json.extract! event, :id, :title, :description, :tag, :imageUrl, :course_id, :created_at, :updated_at
json.url event_url(event, format: :json)
