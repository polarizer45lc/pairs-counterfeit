module UsersHelper
  def main_avatar
    if current_user.sex == "male" && current_user.avatar.file.nil?
       @image = "no-image__man.png"
    elsif current_user.sex == "female" && current_user.avatar.file.nil?
       # @image = "no-image__woman.png"
       "no-image__woman.png"
    else
       @image = current_user.avatar
    end
  end
end
