# coding: utf-8

Region.create(name: '北海道', overseas: 0)
Region.create(name: '青森県', overseas: 0)
Region.create(name: '岩手県', overseas: 0)
Region.create(name: '宮城県', overseas: 0)
Region.create(name: '秋田県', overseas: 0)
Region.create(name: '山形県', overseas: 0)
Region.create(name: '福島県', overseas: 0)
Region.create(name: '茨城県', overseas: 0)
Region.create(name: '栃木県', overseas: 0)
Region.create(name: '群馬県', overseas: 0)
Region.create(name: '埼玉県', overseas: 0)
Region.create(name: '千葉県', overseas: 0)
Region.create(name: '東京都', overseas: 0)
Region.create(name: '神奈川県', overseas: 0)
Region.create(name: '新潟県', overseas: 0)
Region.create(name: '富山県', overseas: 0)
Region.create(name: '石川県', overseas: 0)
Region.create(name: '福井県', overseas: 0)
Region.create(name: '山梨県', overseas: 0)
Region.create(name: '長野県', overseas: 0)
Region.create(name: '岐阜県', overseas: 0)
Region.create(name: '静岡県', overseas: 0)
Region.create(name: '愛知県', overseas: 0)
Region.create(name: '三重県', overseas: 0)
Region.create(name: '滋賀県', overseas: 0)
Region.create(name: '京都府', overseas: 0)
Region.create(name: '大阪府', overseas: 0)
Region.create(name: '兵庫県', overseas: 0)
Region.create(name: '奈良県', overseas: 0)
Region.create(name: '和歌山県', overseas: 0)
Region.create(name: '鳥取県', overseas: 0)
Region.create(name: '島根県', overseas: 0)
Region.create(name: '岡山県', overseas: 0)
Region.create(name: '広島県', overseas: 0)
Region.create(name: '山口県', overseas: 0)
Region.create(name: '徳島県', overseas: 0)
Region.create(name: '香川県', overseas: 0)
Region.create(name: '愛媛県', overseas: 0)
Region.create(name: '高知県', overseas: 0)
Region.create(name: '福岡県', overseas: 0)
Region.create(name: '佐賀県', overseas: 0)
Region.create(name: '長崎県', overseas: 0)
Region.create(name: '熊本県', overseas: 0)
Region.create(name: '大分県', overseas: 0)
Region.create(name: '宮崎県', overseas: 0)
Region.create(name: '鹿児島県', overseas: 0)
Region.create(name: '沖縄県', overseas: 0)
Region.create(name: '北アメリカ大陸', overseas: 1)
Region.create(name: '南アメリカ大陸', overseas: 1)
Region.create(name: 'ユーラシア大陸', overseas: 1)
Region.create(name: 'アフリカ大陸', overseas: 1)
Region.create(name: 'オーストラリア大陸', overseas: 1)
Region.create(name: '南極大陸', overseas: 1)


53.times do |n|
  nickname = Faker::Pokemon.name
  email = "test-#{n+1}@gmail.com"
  password = "password"
  tell = "#{10000000+n}"
  sex = n % 2
  birthday = Faker::Date.between(40.years.ago, Date.today)
  residence = (n+1)
  User.create!(nickname:  nickname,
              email:  email,
              password:               password,
              password_confirmation:  password,
              tell:                   tell,
              sex:                    sex,
              birthday:               birthday,
              residence_id:            residence
  )
end
