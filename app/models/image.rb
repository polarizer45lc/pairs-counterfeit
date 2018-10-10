class Image < ApplicationRecord
  belongs_to :user

  mount_uploader :content ##ここにアップローダーファイルの名前を記述

  enum status: %i(main sub)  #メインorサブのステータス記述(「%i」は後ろの括弧の中の要素をシンボルとした配列を作る記述。ここではmain: 0、sub: 1を表す。)

end
