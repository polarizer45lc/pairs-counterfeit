json.array! @new_messages do |new_message|
  json.id     new_message.id
  json.created_at l(new_message.created_at, format: :long)
  json.text  new_message.text
  json.image  new_message.image.url
end
