import React, { useContext, useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import QuestionCard from './QuestionCard';
import { Dropdown, Menu, Col, Row,} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CardContext } from '../providers/CardProvider';
import CatergoryForm from './CatergoryForm';
import CardForm from './CardForm'
import Catergory from './Catergory'
import Axios from 'axios'


const  Home = () => {
  const [showCardForm, setCardForm] = useState(false)
  const [showCatergoryForm, setCatergoryForm] = useState(false)
  const [score, setScore] = useState(0)
  const { cards } = useContext(CardContext)
  const [catergories, setCatergories] = useState([])


  useEffect( () => {
    Axios.get(`/api/catergories`)
      .then(res => {
        // console.log(res.data)
        setCatergories(res.data)
        // console.log(this.state.catergories)
      }).catch(err => {
        // console.log(err)
      });
  })

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
     <CatergoryForm toggle={() => toggleCatForm()}/>
    : null}
    {showCardForm ? 
     <CardForm toggle={() => toggleCardForm()}/>
    : null}
    
    <Row> 
      {catergories.map(catergory => {
        return (
          <Col span={6}> 
          <Catergory catergory={catergory} key={ catergory.id }/>
          </Col>
        )
      })}
    </Row>
  </>
  )
}

export default Home;