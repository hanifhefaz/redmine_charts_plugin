Redmine::Plugin.register :redmine_charts_plugin do
  name 'Redmine Charts Plugin'
  author 'Hanif Hefaz'
  description 'Provides various charts for projects and issues'
  version '1.0.0'
  url 'https://github.com/hanifhefaz/redmine_charts_plugin'
  author_url 'https://hanifhefaz.github.io'

  menu :application_menu, :charts, { controller: 'charts', action: 'index' }, caption: 'Charts', if: Proc.new { User.current.logged? }
  menu :project_menu, :charts, { :controller => 'charts', :action => 'index' }, caption: 'Charts', :param => :project_id
end
