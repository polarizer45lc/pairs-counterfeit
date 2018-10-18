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

  # def default_avatar
  #   if self.male?
  #     "no-image__woman.png"
  #   else
  #     "no-image__man.png"
  #   end
  # end

  # def main_avatar
  #   if self.avatar.present?
  #     self.avatar
  #   else
  #     self.default_avatar
  #   end
  # end

end


