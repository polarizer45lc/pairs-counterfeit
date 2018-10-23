checked_items = params[:checked_items]   #jsから送られた配列の変数化
jsonarry = []
checked_items.each do |checked_item|
 pre_json = Character::Type.select{|i| i[:id] == checked_item }  #characterモデルで作成したハッシュを含む配列から、idとchecked_itemが一致するハッシュを取り出す。
 chara_str = pre_json[0][:name]  #ハッシュの中のnameの部分を取り出す。(上記の取り出しでハッシュは『一つの配列』として取り出されるので[0]が必要)
 jsonarry << chara_str  #each外に規定した配列に放り込む
end

json.character_arry  jsonarry
