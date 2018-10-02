# README

<!-- This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->



<!-- ## usersテーブル


- has_many :communities, through: :user_communities
- has_many :user_communities
- has_many :images
- has_many :groups, through: :relationships
- has_many :relationships
- has_many :footprints
- has_many :likes -->



## messagesテーブル

|Column  |Type      |Options                       |
|------  |----      |-------                       |
|message |text      |
|image   |string    |
|user_id |references|null: false, foreign_key: true|
|pair_id |references|null: false, foreign_key: true|

### Association
- belongs_to :pair
- belongs_to :user


## relationshipsテーブル

|Column  |Type|Options                             |
|------  |----|-------                             |
|user_id |references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- has_many   :images
-


## groupsテーブル

|Column |Type       |Options                       |
|------ |----       |-------                       |
|user_id |references|null: false, foreign_key: true|


### Association
- has_many :users, through: :user_groups
- has_many :messages
- has_many :user_group



## communitiesテーブル

|Column |Type       |Options                       |
|------ |----       |-------                       |
|name   |string     |

### Association
- has_many :users, through: :user_communities
- has_many :user_communities



## user_communitiesテーブル

|Column |Type       |Options                             |
|------ |----       |-------                             |
|communities_id|references|null: false, foreign_key: true|

### Association
- has_many :users, through: :user_communities
- has_many :user_communities



## likesテーブル

|Column  |Type      |Options                       |
|------  |----      |-------                       |
|like_id |references|null: false, foreign_key: true|
|liked_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user


## imagesテーブル

|Column |Type      |Options                       |
|------ |----      |-------                       |
|user_id|references|null: false, foreign_key: true|
|status |integer   |null: false                   |
|content|string    |null: false

### Association
- belongs_to :user



## groupsテーブル

|Column  |Type      |Options                       |
|------  |----      |-------                       |
|user1_id|references|null: false, foreign_key: true|
|user2_id|integer   |null: false, foreign_key: true|

### Association
- has_many :users, through: :relationships
- has_many :relationships



## relationshipsテーブル

|Column  |Type      |Options                           |
|------  |----      |-------                           |
|followed_id |references|null: false, foreign_key: true|
|following_id|references|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :groups



## footprintsテーブル

|Column    |Type      |Options                           |
|------    |----      |-------                           |
|visite_id |references|null: false, foreign_key: true    |
|visited_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
