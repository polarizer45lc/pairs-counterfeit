# README



## usersテーブル

|Columns      |Type     |Options                 |
|-------------|---------|------------------------|
|nickname     |string   |null: false             |
|email        |string   |null: false             |
|tell         |integer  |null: false, unique:true|    個別ユーザー認証のためのものなのでつけない可能性もある
|password     |string   |null: false             |
|sex          |string   |null: false             |
|birthday     |datetime |null: false             |
|introduction |string   |                        |
|height       |string   |                        |
|weight       |string   |                        |
|blood_type   |integer  |                        |
|residence    |string   |                        |
|birthplace   |string   |                        |
|job_category |string   |                        |
|educational  |string   |                        |
|annual_income|string   |                        |
|tobacco      |string   |                        |
|brother      |string   |                        |    男女で表示するビューが違うので注意
|country      |string   |                        |
|marital      |string   |                        |
|child        |string   |                        |
|mdesire      |string   |                        |
|cdesire      |string   |                        |
|hkeeping     |string   |                        |
|encounter    |string   |                        |
|cost         |string   |                        |
|holiday      |string   |                        |
|sociability  |string   |                        |
|hobby1       |string   |                        |
|hobby2       |string   |                        |
|hobby3       |string   |                        |
|language1    |string   |                        |
|language2    |string   |                        |
|language3    |string   |                        |

##Association
- has_many :profimages
- has_one :characters                <!--     このテーブルはユーザーと１対１。 -->
- has_many :active_relationships,class_name:  "Relationship", foreign_key: "follower_id", dependent: :destroy
- has_many :active_relationships,class_name:  "Relationship", foreign_key: "following_id", dependent: :destroy
- has_many :group_users
- has_many :groups, through: :group_users
- has_many :masseges



## charactersテーブル

|Columns        |Type      | Options                     |
|---------------|----------|-----------------------------|
|user_id        |references|null: false,foreign_key: true|
|kindness       |integer   |null: false, default: 0      |      優しい　
|honest         |integer   |null: false, default: 0      |      素直
|determination  |integer   |null: false, default: 0      |      決断力がある
|gentle         |integer   |null: false, default: 0      |      穏やか
|familiar       |integer   |null: false, default: 0      |      親しみやすい
|cheerful       |integer   |null: false, default: 0      |      明るい
|indoor         |integer   |null: false, default: 0      |      インドア
|outdoor        |integer   |null: false, default: 0      |      アウトドア
|earnest        |integer   |null: false, default: 0      |      真面目
|intellectual   |integer   |null: false, default: 0      |      知的
|sincere        |integer   |null: false, default: 0      |      誠実
|punctual       |integer   |null: false, default: 0      |      几帳面
|optimistic     |integer   |null: false, default: 0      |      楽観的
|shy            |integer   |null: false, default: 0      |      照れ屋
|smilly         |integer   |null: false, default: 0      |      いつも笑顔
|elegance       |integer   |null: false, default: 0      |      上品
|clamness       |integer   |null: false, default: 0      |      落ち着いている
|humility       |integer   |null: false, default: 0      |      謙虚
|strict         |integer   |null: false, default: 0      |      厳格
|considerate    |integer   |null: false, default: 0      |      思いやりがある
|lonely         |integer   |null: false, default: 0      |      寂しがり
|sociable       |integer   |null: false, default: 0      |      社交的
|cool           |integer   |null: false, default: 0      |      冷静沈着
|curiosity      |integer   |null: false, default: 0      |      好奇心旺盛
|homely         |integer   |null: false, default: 0      |      家庭的
|workerholic    |integer   |null: false, default: 0      |      仕事好き
|responsibility |integer   |null: false, default: 0      |      責任感がある
|intercourse    |integer   |null: false, default: 0      |      面倒見が良い
|speaker        |integer   |null: false, default: 0      |      話し上手
|listner        |integer   |null: false, default: 0      |      聞き上手
|refreshing     |integer   |null: false, default: 0      |      さわやか
|active         |integer   |null: false, default: 0      |      行動的
|rational       |integer   |null: false, default: 0      |      合理的
|defeated       |integer   |null: false, default: 0      |      負けず嫌い
|funny          |integer   |null: false, default: 0      |      面白い
|hot            |integer   |null: false, default: 0      |      熱い
|comfortable    |integer   |null: false, default: 0      |      気が利く
|devoted        |integer   |null: false, default: 0      |      マメ
|boldness       |integer   |null: false, default: 0      |      大胆
|tolerance      |integer   |null: false, default: 0      |      寛容
|generosity     |integer   |null: false, default: 0      |      気前がいい
|naturally      |integer   |null: false, default: 0      |      天然と言われる
|backlashless   |integer   |null: false, default: 0      |      裏表がない
|mypace         |integer   |null: false, default: 0      |      マイペース
|latecrop       |integer   |null: false, default: 0      |      奥手
|moody          |integer   |null: false, default: 0      |      気分屋
　
## Association
- belongs_to :user

<!-- userインスタンスが登録された時に同時にレコードを生成。
日本語はカラムとして設定できないので横の連なる表示はヘルパーメソッドを使い簡略化
初期値は0にしてチェックが入れば1にし、1の時のみ表示するようメソッドを組む。

 -->

## profimagesテーブル

|Columns |Type      |Options                       |
|--------|----------|------------------------------|
|user_id |references|null: false, foreign_key: true|
|image   |string    |null: false                   |
|status  |integer   |null: false                   |

## Association
- belongs_to :user



## messagesテーブル

|Column  |Type      |Options                       |
|--------|----------|------------------------------|
|message |text      |                              |
|image   |string    |                              |
|user_id |references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## user_groupsテーブル

|Column  |Type      |Options                       |
|--------|----------|------------------------------|
|user_id |references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column  |Type       |Options                       |
|--------|-----------|------------------------------|
|group_id|integer    |null: false                   |


### Association
- has_many :users, through: :user_groups
- has_many :user_groups
- has_many :messages


## communitiesテーブル

|Column  |Type       |Options                       |
|--------|-----------|------------------------------|
|name    |string     |null: false                   |
|image   |string     |null: false                   |
|category|string     |null: false                   |

### Association
- has_many :users, through: :user_communities
- has_many :user_communities



## user_communitiesテーブル

|Column        |Type       |Options                       |
|--------------|-----------|------------------------------|
|communities_id|references |null: false, foreign_key: true|
|user_id       |references |null: false, foreign_key: true|

### Association
- has_many :users, through: :user_communities
- has_many :user_communities


## relationshipsテーブル

|Column      |Type      |Options                       |
|------------|----------|------------------------------|
|followed_id |references|null: false, foreign_key: true|
|following_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



## footprintsテーブル

|Column    |Type      |Options                           |
|----------|----------|----------------------------------|
|visite_id |references|null: false, foreign_key: true    |
|visited_id|references|null: false, foreign_key: true    |

### Association
- belongs_to :user

