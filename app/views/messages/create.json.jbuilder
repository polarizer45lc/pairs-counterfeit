json.id     @message.id
json.created_at  l(@message.created_at, format: :long)
json.text  @message.text
json.image  @message.image.url
