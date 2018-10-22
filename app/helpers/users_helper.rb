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


  def image_preview1
    if self.sub_image1.present?
      self.sub_image1
    else
      "no_image.jpg"
    end
  end

    def image_preview2
    if self.sub_image2.present?
      self.sub_image2
    else
      "no_image.jpg"
    end
  end

  def image_preview3
    if self.sub_image3.present?
      self.sub_image3
    else
      "no_image.jpg"
    end
  end

  def image_preview4
    if self.sub_image4.present?
      self.sub_image4
    else
      "no_image.jpg"
    end
  end

end


