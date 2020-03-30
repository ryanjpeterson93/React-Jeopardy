import React, { useState, useEffect, useContext } from 'react';
import { PageHeader } from 'antd';
import { Dropdown, Menu, Col, Row,} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import CatergoryForm from './CatergoryForm';
import CardForm from './CardForm'
import Catergory from './Catergory'
import Axios from 'axios'
import { CardContext } from '../providers/CardProvider';


const  Home = () => {
  const [showCardForm, setCardForm] = useState(false)
  const [showCatergoryForm, setCatergoryForm] = useState(false)
  const [score, setScore] = useState(0)
  const data = useContext(CardContext)
  const catergories = data.catergories

  

  const toggleCatForm = () => {
    setCatergoryForm(!showCatergoryForm)
  }
  const toggleCardForm = () => {
    setCardForm(!showCardForm)
  }


  const changeScore = (points) => {
    //Add score to user from if statement in handleSubmit - QuestionCard.js
    setScore(score + points)
  }

  return(
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#39ADF9'}}> 
    <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="REACT JEOPARDY"
        subTitle={`User Points: ${score}`}
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
     <CatergoryForm toggle={() => toggleCatForm()}/>
    : null}
    {showCardForm ? 
     <CardForm toggle={() => toggleCardForm()}/>
    : null}
    
    <Row> 
      {catergories.map(catergory => {
        return (
          <Col span={6} key={ catergory.id }> 
          <Catergory catergory={catergory} changeScore={changeScore} />
          </Col>
        )
      })}
    </Row>
  </>
  )
}

export default Home;