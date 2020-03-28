import React, { useContext, useState } from 'react';
import { PageHeader } from 'antd';
import QuestionCard from './QuestionCard';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CardContext } from '../providers/CardProvider';

const  Home = () => {
  const [showCardForm, setCardForm] = useState(false)
  const [showCatergoryForm, setCatergoryForm] = useState(false)
  const [score, setScore] = useState(0)
  const { cards } = useContext(CardContext)


  const toggleCatForm = () => {
    console.log('toggle Cat hit')
  }
  const toggleCardForm = () => {
    console.log('toggle Card hit')
  }

  const addArray = () => {
    // function that adds array from state.
  }

  const addScore = () => {
    //Function that pushes score to state array
  }

  return(
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#AEC6DD'}}> 
    <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="Home"
        subTitle="This is a subtitle"
      />
      <div style={{margin: '25px'}}>
        <Dropdown overlay={ <Menu>
                              <Menu.Item onClick={toggleCatForm}>
                                New Catergory
                              </Menu.Item>
                              <Menu.Item onClick={toggleCardForm}>
                                New Card
                              </Menu.Item>
                            </Menu>
                          }>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            New Item<DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
    
      {cards.map(card => (
        <QuestionCard key={card.id} data={card}/>
      ))}
  </>
  )
}

export default Home;