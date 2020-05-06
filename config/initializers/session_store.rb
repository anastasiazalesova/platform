if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_platform', domain: 'your-frontend-domain'
else
  Rails.application.config.session_store :cookie_store, key: '_platform', expire_after: 5.minutes
end
