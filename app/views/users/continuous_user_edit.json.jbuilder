if params[:referense_column3].present?
  referense_column3 = params[:referense_column3]
  referense_column2 = params[:referense_column2]
  referense_column1 = params[:referense_column1]
  json.referense_column3 @user[referense_column3]
  json.referense_column2 @user[referense_column2]
  json.referense_column1 @user[referense_column1]
elsif params[:referense_column2].present?
  referense_column2 = params[:referense_column2]
  referense_column1 = params[:referense_column1]
  json.referense_column2 @user[referense_column2]
  json.referense_column1 @user[referense_column1]
else
  referense_column1 = params[:referense_column1]
  json.referense_column1 @user[referense_column1]
end