class Event < ApplicationRecord
	enum tag: [ :event, :deadline ]
end
