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
# t.string "answer_1"
# t.string "answer_2"
# t.string "answer_3"
# t.string "answer_4"
# t.string "correct_answer"
Card.create(name: 'What is React?', points: 100, flipped: false, catergory_id: 1, answer_1: 'A) A quick response to a stimulus', answer_2: 'B) A Javascript frontend libaray that creates a single page application and manupilates the view via a virtual DOM.', answer_3: 'C) A styling library to make all your apps look rad', answer_4:'D) Something the Feds created to track your browser history', correct_answer: 'B')
Card.create(name: 'What are React Components?', points: 200, flipped: false, catergory_id: 1, answer_1: 'A) Components are a design that allow us to easily insert and reuse individual parts and pieces of code.', answer_2: 'B) A method that makes your app look like really cool and stuff', answer_3: 'C) Something created by some developer to make your life harder', answer_4: 'D) James never taught us about these',  correct_answer: 'A' )
Card.create(name: 'Who started React?', points: 300, flipped: false, catergory_id: 1, answer_1:'A) A Bird', answer_2:'B) Facebook', answer_3:'C) The federal government', answer_4:'D) The creators of the internets', correct_answer: 'B')
Card.create(name: 'What is the difference between a class component and functional component?', points: 400, flipped: false, catergory_id: 1, answer_1:'A) You only use a class component when you want to display information from the database', answer_2:'B) Functional Components are only used in Javascript', answer_3: 'C) Class components can have their own state, whereas functional components cannot.', answer_4:'D) Harlan said to never use class components...so this question is irrelevant', correct_answer:'C' )
Card.create(name: 'How is React different from Angular.JS?', points: 500, flipped: false, catergory_id: 1, answer_1: 'A) React only deals with the View in MVC, whereas Angular is more reliant on all parts of the application design.', answer_2: 'B) Nobody really cares about this one', answer_3:'C) React is a lot better, so you should never consider Angular anyways', answer_4:'D) React is far better in the creation of websites', correct_answer:'A')

Card.create(name: 'What is a prop?', points: 100, flipped: false, catergory_id: 2, answer_1: 'A) Who cares?', answer_2: 'B) A styling function', answer_3: 'C) A value or function passed down from a parent React component to a child.', answer_4:'D) Something that is only used in Rails applications', correct_answer:'C')
Card.create(name: 'How can you use the data passed down in a prop?', points: 200, flipped: false, catergory_id: 2, answer_1:'A) You cannot...do not even try', answer_2: 'B) ONLY to stlye Semantic elements', answer_3:'C) DC told us to never use props', answer_4: 'D) this.props.XXX', correct_answer: 'D')
Card.create(name: 'How can you pass data to a parent function with props?', points: 300, flipped: false, catergory_id: 2, answer_1:'A) Call this.props.function(data). This will pass data to function living in parent file.', answer_2:'B) Changing your setting in VS Code', answer_3:'C) You cannot', answer_4:'D) Try really hard', correct_answer:'A' )
Card.create(name: 'How can we use props for styling?', points: 400, flipped: false, catergory_id: 2, answer_1:'A) Props has nothing to do with coding/software development', answer_2:'B) Props are really hard to use, so maybe just dont use them', answer_3: 'C) Pass some style props.', answer_4:'D) Props would never be used for styling', correct_answer:'C')
Card.create(name: 'How can you pass prop data through nested components and back up?', points: 500, flipped: false, catergory_id: 2, answer_1: 'A) Very carefully', answer_2: 'B) Via 100 different variations of console.log()', answer_3: 'C) Props>this.props>this.props', answer_4:'D) Reinstall Homebrew', correct_answer: 'C')

Card.create(name: 'What are React Hooks?', points: 100, flipped: false, catergory_id: 3, answer_1: 'A) Something to fish with', answer_2: 'B) A way to conntect React to your backend.', answer_3: 'C) Functions that allow functional components to use state and lifecycle features.', answer_4:'D) Functions that pass props to children. ', correct_answer: 'C')
Card.create(name: 'What does the useContext hook do?', points: 200, flipped: false, catergory_id: 3, answer_1: 'A) Allows us to easily access state living within a provider', answer_2: 'B) Renders context JSX from provider', answer_3: 'C) Makes a smoothie', answer_4: 'D) Links to other components.', correct_answer:'A')
Card.create(name: 'How can we use state in a functional component?', points: 300, flipped: false, catergory_id: 3, answer_1: 'A) this.setState()', answer_2: 'B) useBlender()', answer_3: 'C) useContext()', answer_4: 'D) useState()', correct_answer:'D')
Card.create(name: 'How can we do something like a componentDidMount with Hooks?', points: 400, flipped: false, catergory_id: 3, answer_1: 'A) this.setState()', answer_2: 'B) useBlender()', answer_3: 'C) useContext()', answer_4: 'D) useState()', correct_answer:'D')
Card.create(name: 'What can we NOT use hooks on?', points: 500, flipped: false, catergory_id: 3, answer_1: 'A) functional components', answer_2: 'B) class components', answer_3: 'C) state', answer_4: 'D) JSX', correct_answer:'B')

Card.create(name: 'What is React Context?', points: 100, flipped: false, catergory_id: 4, answer_1: 'A) An expensive coffee maker', answer_2: 'B) A system to pass data from a high-level parent to children.', answer_3: 'C) A system to pass data from children to parent.', answer_4: 'D) State modifying functions.', correct_answer:'B')
Card.create(name: 'When should we use Context?', points: 200, flipped: false, catergory_id: 4, answer_1: 'A) Whenever we feel like it would work well.', answer_2: 'B) Under no circumstance.', answer_3: 'C) When we have global state data that we want to pass to components.', answer_4: 'D) In function arguments.', correct_answer:'C')
Card.create(name: 'What is one difficuly of using Context?', points: 300, flipped: false, catergory_id: 4, answer_1: 'A) It makes reuse of components more difficult.', answer_2: 'B) It can randomly cause infinite loops.', answer_3: 'C) What was Context again?', answer_4: 'D) useState()', correct_answer:'A')
Card.create(name: 'How do we use a context provider with a class component?', points: 400, flipped: false, catergory_id: 4, answer_1: 'A) this.setState()', answer_2: 'B) useBlender()', answer_3: 'C) useContext()', answer_4: 'D) Wrap the JSX component with provider, then pass data as props.', correct_answer:'D')
Card.create(name: 'What can`t a provider do?', points: 500, flipped: false, catergory_id: 4, answer_1: 'A) Make coffee', answer_2: 'B) Pass state to components.', answer_3: 'C) Pass functions to components.', answer_4: 'D) Pass props to class components.', correct_answer:'D')

puts "Data Seeded."