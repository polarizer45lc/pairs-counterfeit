module ApplicationHelper

  def age(birthday)
    date_format = "%Y%m%d"
    (Date.today.strftime(date_format).to_i - birthday.strftime(date_format).to_i) / 10000
  end

  def pagination_info(items)
    items.present? ? "#{items.total_count}人中 #{items.offset_value + 1}〜#{items.offset_value + items.length}人表示" : "該当するユーザーがいません"
  end

end
