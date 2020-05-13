class Event < ApplicationRecord
	belongs_to :course
	enum tag: [ :event, :deadline ]
end
