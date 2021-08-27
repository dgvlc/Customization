# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Upgrade.destroy_all
Car.destroy_all
User.destroy_all

@admin = User.create!(username: 'diego', email: 'dv@email.com', password: '123456')
@admin2 = User.create!(username: 'amir', email: 'da@email.com', password: '123456')

puts "#{User.count} users created"

Car.create!(name: "christmas built", make: Faker::Vehicle.make , model: Faker::Vehicle.model, year: Faker::Vehicle.year , description: "dream car with the options to make it even better " , color: Faker::Vehicle.color , image_url: "https://www.cars-data.com/webp/alfa-romeo/alfa-romeo-156_18_2.webp" , base_price: 23000, upgrade_price: 0, total_price: 0, user: @admin)
Car.create!(name: "christmas built", make: Faker::Vehicle.make , model: Faker::Vehicle.model, year: Faker::Vehicle.year , description: "dream car with the options to make it even better " , color: Faker::Vehicle.color , image_url: "https://www.cars-data.com/webp/alfa-romeo/alfa-romeo-145_6_1.webp" , base_price: 23000, upgrade_price: 0, total_price: 0, user: @admin)
Car.create!(name: "christmas built", make: Faker::Vehicle.make , model: Faker::Vehicle.model, year: Faker::Vehicle.year , description: "dream car with the options to make it even better " , color: Faker::Vehicle.color , image_url: "https://www.cars-data.com/webp/audi/audi-s5-coupe_156_1.webp" , base_price: 23000, upgrade_price: 0, total_price: 0, user: @admin2)
Car.create!(name: "christmas built", make: Faker::Vehicle.make , model: Faker::Vehicle.model, year: Faker::Vehicle.year , description: "dream car with the options to make it even better " , color: Faker::Vehicle.color , image_url: "https://www.cars-data.com/webp/audi/audi-s5-coupe_156_1.webp" , base_price: 23000, upgrade_price: 0, total_price: 0, user: @admin2)


puts "#{Car.count} cars created"


Upgrade.create!(name: 'leather seats' , description: 'provides more confort' , price: 300 , image_url: "https://www.cars-data.com/webp/alfa-romeo/alfa-romeo-156_18_9.webp", upgrade_type: "interior upgrade" )
Upgrade.create!(name: 'trim ' , description: 'provides more confort' , price: 500 , image_url: "https://www.cars-data.com/webp/alfa-romeo/alfa-romeo-156_18_8.webp", upgrade_type: "exterior upgrade" )
Upgrade.create!(name: 'v8' , description: 'provides more confort' , price: 700 , image_url: "https://www.cars-data.com/webp/audi/audi-s5-coupe_156_5.webp", upgrade_type: "interior upgrade" )
Upgrade.create!(name: 'blackout windows' , description: 'provides more confort' , price: 200 , image_url: "https://www.cars-data.com/webp/audi/audi-s5-coupe_156_5.webp", upgrade_type: "exterior upgrade" )
Upgrade.create!(name: 'heated seats' , description: 'provides more confort' , price: 100 , image_url: "https://www.cars-data.com/webp/audi/audi-s5-coupe_156_5.webp", upgrade_type: "interior upgrade" )

puts "#{Upgrade.count} upgrades added"

Car.all.each do |car|
  rand(1..5).times do
    car.upgrades << Upgrade.all.sample
  end
end