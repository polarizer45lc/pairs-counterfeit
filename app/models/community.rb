class Community < ApplicationRecord

  has_many :users, through: :user_communities
  has_many :user_communities
  enum category: { new: 0,musics: 1, movies: 2, tvs: 3, games: 4, books: 5, arts: 6, sports: 7, motors: 8, trips: 9, homes: 10, pets: 11, pcs: 12, fashions: 13, gourmets: 14, divinations: 15, hobbies: 16, loves: 17, healths: 18, livings: 19, beauties: 20, housekeepings: 21, Regions: 22, schools: 23, companies: 24, jobs: 25, stadies: 26, businesses: 27}

end
