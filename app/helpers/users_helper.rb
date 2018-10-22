module UsersHelper

  def default_avatar
    if self.male?
      "no-image__man.png"
    else
      "no-image__woman.png"
    end
  end

  def main_avatar
    if self.avatar.present?
      self.avatar
    else
      self.default_avatar
    end
  end

  def default_other_avatar
    if self.male?
      "no-image__woman.png"
    else
      "no-image__man.png"
    end
  end


  def devise_error_messages
    return "" if resource.errors.empty?
    html = ""
    messages = resource.errors.full_messages.each do |msg|
      html += <<-EOF
        <div class="error_field alert alert-danger" role="alert">
          <p class="error_msg">#{msg}</p>
        </div>
      EOF
    end
    html.html_safe
  end

end


