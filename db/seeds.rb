User.destroy_all
Tattoo.destroy_all
Art.destroy_all
Style.destroy_all
TattooStyle.destroy_all

# ---------------------------------STYLES-------------------------------------------------------

types = %w[Abstrait Aquarelle Asiatique Biomécanique Cartoon Couleur Cover Dot\ Work Esquisse Fantasy Floral
           Géométrique Graphique Lettrage Line\ Work Mandala Néo-Traditionnel New\ School Noir\ et\ Blanc Old\
           School Ornemental Polynésien Portait Réaliste Skull Traditionel Trash]

types.each do |type|
  Style.create!(name: type)
end

p "#{Style.count} Styles created"

# ---------------------------------USERS-------------------------------------------------------


User.create!(email: "toto@mail.com", password: "azerty", admin: true)

p "#{User.count} users created"

# ---------------------------------TATTOOS-------------------------------------------------------


puppet = Tattoo.create!(
  name: "Puppet",
  description: "Masta of puppetz",
  customer: "Fab",
  date: "2021-09-03T21:30",
  on_home_slider: true
)
puppet.photos.attach(io: File.open('app/assets/images/IMG_20190627_093002.jpg'), filename: 'puppet.jpg', content_type:'image/jpg')

butterfly = Tattoo.create!(
  name: "BUtterfly",
  description: "Un papillon pharaonique",
  customer: "Monique",
  date: "2021-09-03T21:30",
  on_home_slider: true
)
butterfly.photos.attach(io: File.open('app/assets/images/tattoo1.jpg'), filename: 'butterfly.jpg', content_type:'image/jpg')

koi = Tattoo.create!(
  name: "Carpe",
  description: "Carpe Koï bleue",
  customer: "Simone",
  date: "2021-09-03T21:30",
  on_home_slider: true
)
koi.photos.attach(io: File.open('app/assets/images/tattoo2.jpg'), filename: 'koi.jpg', content_type:'image/jpg')

montgolfiere = Tattoo.create!(
  name: "Montgolfiere",
  description: "Une mongole fière",
  customer: "Jeannine",
  date: "2021-09-03T21:30",
  on_home_slider: true
)
montgolfiere.photos.attach(io: File.open('app/assets/images/tattoo3.jpg'), filename: 'puppet.jpg', content_type:'image/jpg')

picsou = Tattoo.create!(
  name: "Picsou",
  description: "Picsou ma gueule",
  customer: "Jean Mourad",
  date: "2021-09-03T21:30",
  on_home_slider: true
)
picsou.photos.attach(io: File.open('app/assets/images/tattoo4.jpg'), filename: 'picsou.jpg', content_type:'image/jpg')

geo = Tattoo.create!(
  name: "Geometric",
  description: "Un blason non?",
  customer: "Jean Michel",
  date: "2021-09-03T21:30",
  on_home_slider: true
)
geo.photos.attach(io: File.open('app/assets/images/tattoo5.jpg'), filename: 'geo.jpg', content_type:'image/jpg')

p "#{Tattoo.count} Tattoos created"

# ---------------------------------ARTS-------------------------------------------------------


loup = Art.create!(
  name: "Loup",
  description: "Un loup mal barré"
)
loup.photos.attach(io: File.open('app/assets/images/art1.jpg'), filename: 'loup.jpg', content_type:'image/jpg')

aquarius = Art.create!(
  name: "Aquarius",
  description: "Elle fait tomber la cruche"
)
aquarius.photos.attach(io: File.open('app/assets/images/art2.jpg'), filename: 'aquarius.jpg', content_type:'image/jpg')

serpent = Art.create!(
  name: "Serpent",
  description: "Un serpent qui protège son couteau à beurre"
)
serpent.photos.attach(io: File.open('app/assets/images/art3.jpg'), filename: 'serpent.jpg', content_type:'image/jpg')

face = Art.create!(
  name: "Loup",
  description: "Un visage avec des oreilles-ailes"
)
face.photos.attach(io: File.open('app/assets/images/art4.jpg'), filename: 'face.jpg', content_type:'image/jpg')

hand = Art.create!(
  name: "Hand",
  description: "La chose"
)
hand.photos.attach(io: File.open('app/assets/images/art5.jpg'), filename: 'hand.jpg', content_type:'image/jpg')

heart = Art.create!(
  name: "Heart",
  description: "Coeur de serpent"
)
heart.photos.attach(io: File.open('app/assets/images/art6.jpg'), filename: 'heart.jpg', content_type:'image/jpg')

rose = Art.create!(
  name: "Rose",
  description: "Une rose!"
)
rose.photos.attach(io: File.open('app/assets/images/art7.jpg'), filename: 'rose.jpg', content_type:'image/jpg')

flamme = Art.create!(
  name: "Flamme",
  description: "La flamme olympique des enfers"
)
flamme.photos.attach(io: File.open('app/assets/images/art8.jpg'), filename: 'flamme.jpg', content_type:'image/jpg')

p "#{Art.count} Artworks created"

# ---------------------------------TATTOO STYLE----------------------------------------------

# TattooStyle.create!(tattoo_id: 1, style_id: 19)
# TattooStyle.create!(tattoo_id: 1, style_id: 28)
# TattooStyle.create!(tattoo_id: 2, style_id: 19)
# TattooStyle.create!(tattoo_id: 2, style_id: 22)
# TattooStyle.create!(tattoo_id: 3, style_id: 3)
# TattooStyle.create!(tattoo_id: 3, style_id: 6)
# TattooStyle.create!(tattoo_id: 4, style_id: 6)
# TattooStyle.create!(tattoo_id: 5, style_id: 6)
# TattooStyle.create!(tattoo_id: 5, style_id: 5)
# TattooStyle.create!(tattoo_id: 6, style_id: 19)
# TattooStyle.create!(tattoo_id: 6, style_id: 13)

# p "#{TattooStyle.count} Tattoo Styles created"

# --------------------------------------------------------------------------------------------------
