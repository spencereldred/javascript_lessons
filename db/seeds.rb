# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

lessons = Lesson.create([
    {title: "JS Primatives", path: "lessons/primatives"},
    {title: "JS Functions", path: "lessons/functions"},
    {title: "Page Load Listener, Callbacks", path: "lessons/callbacks"},
    {title: "Namespace, DOM Selectors", path: "lessons/dom"},
    {title: "jQuery", path: "lessons/jquery"}
  ])