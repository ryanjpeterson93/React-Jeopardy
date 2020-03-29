import React, { useContext, useState } from 'react';
import { PageHeader } from 'antd';
import QuestionCard from './QuestionCard';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CardContext } from '../providers/CardProvider';
import CatergoryForm from './CatergoryForm';
import CardForm from './CardForm'

const  Home = () => {
  const [showCardForm, setCardForm] = useState(false)
  const [showCatergoryForm, setCatergoryForm] = useState(false)
  const [score, setScore] = useState(0)
  const { cards } = useContext(CardContext)


  const toggleCatForm = () => {
    setCatergoryForm(!showCatergoryForm)
  }
  const toggleCardForm = () => {
    setCardForm(!showCardForm)
  }

  // const addArray = () => {
  //   // function that adds array from state.
  // }

  // const addScore = () => {
  //   //Function that pushes score to state array
  // }

  return(
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#39ADF9'}}> 
    <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="REACT JEOPARDY"
      />
      <div style={{marginTop: '20px', marginRight: '50px'}}>
        <Dropdown overlay={ <Menu>
                              <Menu.Item onClick={toggleCatForm}>
                                New Catergory
                              </Menu.Item>
                              <Menu.Item onClick={toggleCardForm}>
                                New Card
                              </Menu.Item>
                            </Menu>
                          }>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color: 'black'}}>
            New Item <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
    {showCatergoryForm ? 
     <CatergoryForm/>
    : null}
    {showCardForm ? 
     <CardForm/>
    : null}
    
      {cards.map(card => (
        <QuestionCard key={card.id} data={card}/>
      ))}
  </>
  )
}

export default Home;