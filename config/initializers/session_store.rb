if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_platform', domain: 'up-platform.herokuapp.com', expire_after: 5.minutes
else
  Rails.application.config.session_store :cookie_store, key: '_platform', expire_after: 5.minutes
end
