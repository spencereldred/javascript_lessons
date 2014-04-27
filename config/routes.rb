JsRailsApp::Application.routes.draw do
  
  root to: 'lessons#index'

  get "lessons", to: 'lessons#index', as: :lessons

  get "lessons/primatives", to: 'lessons#primatives', as: :primatives
  get "lessons/functions", to: 'lessons#functions', as: :functions
  get "lessons/callbacks", to: 'lessons#callbacks', as: :callbacks
  get "lessons/dom", to: 'lessons#dom', as: :dom
  get "lessons/jquery", to: 'lessons#jquery', as: :jquery



end
