# README


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|tel|int|null: false|
|password|string|null: false|
|sex|int|null: false|
|comment|string||
|height|string|null: false|
|weight|string|null: false|
|blood_type|string|null: false|
|residence|string|null: false|
|birthplace|string|null: false|
|job_category|string|null: false|
|educational|string|null: false|
|annual_income|string|null: false|
|tobacco|string|null: false|
|brother|string|null: false|
|country|string|null: false|
|language|string|null: false|
|marital|string|null: false|
|child|string|null: false|
|mdesire|string|null: false|
|cdesire|string|null: false|
|hkeeping|string|null: false|
|encounter|string|null: false|
|cost|string|null: false|
|hobby1|string|null: false|
|hobby2|string|null: false|
|hobby3|string|null: false|

- has_many :communities, through: :user_communities
- has_many :user_communities
- has_many :images
- has_many :groups, through: :relationships
- has_many :relationships
- has_many :groups, through: :user_groups
- has_many :user_groups
- has_many :footprints
- has_many :likes -->



## messagesテーブル

|Column  |Type      |Options                       |
|------  |----      |-------                       |
|message |text      |
|image   |string    |
|user_id |references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## user_groupsテーブル

|Column  |Type      |Options                       |
|------  |----      |------                        |
|user_id |references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column  |Type       |Options                       |
|------  |----       |-------                       |
|group_id|integer    |主キー                         |


### Association
- has_many :users, through: :user_groups
- has_many :user_groups
- has_many :messages


## communitiesテーブル

|Column  |Type       |Options                       |
|------  |----       |-------                       |
|name    |string     |null: false                   |
|image   |string     |null: false                   |
|category|string     |null: false                  |

### Association
- has_many :users, through: :user_communities
- has_many :user_communities



## user_communitiesテーブル

|Column        |Type       |Options                       |
|------        |----       |-------                       |
|communities_id|references |null: false, foreign_key: true|
|user_id       |references |null: false, foreign_key: true|

### Association
- has_many :users, through: :user_communities
- has_many :user_communities



<!-- ## likesテーブル

|Column  |Type      |Options                       |
|------  |----      |-------                       |
|like_id |references|null: false, foreign_key: true|
|liked_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user -->


## imagesテーブル

|Column |Type      |Options                       |
|------ |----      |-------                       |
|user_id|references|null: false, foreign_key: true|
|status |integer   |null: false                   |
|content|string    |null: false

### Association
- belongs_to :user




## relationshipsテーブル

|Column      |Type      |Options                       |
|------      |----      |-------                       |
|followed_id |references|null: false, foreign_key: true|
|following_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



## footprintsテーブル

|Column    |Type      |Options                           |
|------    |----      |-------                           |
|visite_id |references|null: false, foreign_key: true    |
|visited_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
=======
>>>>>>> origin/Readme
