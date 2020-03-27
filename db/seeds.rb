# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Catergory.create(name: 'React General')
Catergory.create(name: 'React Props')
Catergory.create(name: 'React Hooks')
Catergory.create(name: 'React Context')
Catergory.create(name: 'React Frontend')


# t.string "name"
# t.integer "points"
# t.boolean "flipped"
Card.create(name: 'What is React?', points: 100, flipped: false, catergory_id: 1, answer: 'A Javascript frontend libaray that creates a single page application and manupilates the view via a virtual DOM.')
Card.create(name: 'What are React Components?', points: 200, flipped: false, catergory_id: 1, answer: 'Components are a design that allow us to easily insert and reuse individual parts and pieces of code.' )
Card.create(name: 'Who started React?', points: 300, flipped: false, catergory_id: 1, answer:'Facebook')
Card.create(name: 'What is the difference between a class component and functional component?', points: 400, flipped: false, catergory_id: 1, answer: 'Class components can have their own state, whereas functional components cannot.' )
Card.create(name: 'How is React different from Angular.JS?', points: 500, flipped: false, catergory_id: 1, answer: 'React only deals with the View in MVC, whereas Angular is more reliant on all parts of the application design.')

Card.create(name: 'What is a prop?', points: 100, flipped: false, catergory_id: 2, answer: 'A value or function passed down from a parent React component to a child.')
Card.create(name: 'How can you use the data passed down in a prop?', points: 200, flipped: false, catergory_id: 2, answer: 'this.props.XXX')
Card.create(name: 'How can you pass data to a parent function with props?', points: 300, flipped: false, catergory_id: 2, answer:'Call this.props.function(data). This will pass data to function living in parent file.' )
Card.create(name: 'How can we use props for styling?', points: 400, flipped: false, catergory_id: 2, answer: 'Pass some style props.')
Card.create(name: 'How can you pass prop data through nested components and back up?', points: 500, flipped: false, catergory_id: 2, answer: 'Props>this.props>this.props')

Card.create(name: '', points: 100, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 200, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 300, flipped: false, catergory_id: 2, answer:'' )
Card.create(name: '', points: 400, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 500, flipped: false, catergory_id: 2, answer: '')

Card.create(name: '', points: 100, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 200, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 300, flipped: false, catergory_id: 2, answer:'' )
Card.create(name: '', points: 400, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 500, flipped: false, catergory_id: 2, answer: '')

Card.create(name: '', points: 100, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 200, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 300, flipped: false, catergory_id: 2, answer:'' )
Card.create(name: '', points: 400, flipped: false, catergory_id: 2, answer: '')
Card.create(name: '', points: 500, flipped: false, catergory_id: 2, answer: '')

puts "Data Seeded."