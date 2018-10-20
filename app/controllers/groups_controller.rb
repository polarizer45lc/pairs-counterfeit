class GroupsController < ApplicationController
  def index
    @groups = current_user.groups
    @flug = false
  end
end
