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


# t.string "name"
# t.integer "points"
# t.boolean "flipped"
# t.text "answer"
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

Card.create(name: 'What are React Hooks?', points: 100, flipped: false, catergory_id: 2, answer: 'Functions that have special abilities to give our functional components more horsepower.')
Card.create(name: 'What does the useContext hook do?', points: 200, flipped: false, catergory_id: 2, answer: 'Allows us to easily access state living within a provider')
Card.create(name: 'How can we use state in a functional component?', points: 300, flipped: false, catergory_id: 2, answer:'useState()' )
Card.create(name: 'How can we do something like a componentDidMount with Hooks?', points: 400, flipped: false, catergory_id: 2, answer: 'useEffect()')
Card.create(name: 'What can we NOT use hooks on?', points: 500, flipped: false, catergory_id: 2, answer: 'Class Components')

Card.create(name: 'What is React Context?', points: 100, flipped: false, catergory_id: 2, answer: 'A system to directly pass props to nested components easily.')
Card.create(name: 'When should we use Context?', points: 200, flipped: false, catergory_id: 2, answer: 'When we want to share data that is considered "Gloabal" in applcation scope.')
Card.create(name: 'What is one difficuly of using Context?', points: 300, flipped: false, catergory_id: 2, answer:'It makes reuse of components more difficult.' )
Card.create(name: 'How do we use a context provider with a class component?', points: 400, flipped: false, catergory_id: 2, answer: 'Wrap the JSX component with provider, then pass data as props.')
Card.create(name: 'What are the steps to making a provider?', points: 500, flipped: false, catergory_id: 2, answer: 'Create context variable via React.createContext()-- Create context provider and export -- Create context consumer to call in component. ')

puts "Data Seeded."