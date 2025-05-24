class ChartsController < ApplicationController

  def index
    @projects = Project.all
    @trackers = Tracker.all
    @statuses = IssueStatus.all

    @selected_project = params[:project_id]
    @selected_tracker = params[:tracker_id]
    @selected_status = params[:status_id]

    @issues = Issue.all
    @issues = @issues.where(project_id: @selected_project) if @selected_project.present?
    @issues = @issues.where(tracker_id: @selected_tracker) if @selected_tracker.present?
    @issues = @issues.where(status_id: @selected_status) if @selected_status.present?

    @issue_counts = @issues.group(:status_id).count
    @chart_data = @issue_counts.map { |status_id, count| { label: IssueStatus.find(status_id).name, count: count } }
  end
end
