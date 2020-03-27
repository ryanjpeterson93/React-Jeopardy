import React from 'react';
import { PageHeader } from 'antd';
import QuestionCard from './QuestionCard';
import Axios from 'axios'


class  Home extends React.Component {
  
  state = {
    score: [],
    cards: []
  }

  componentDidMount() {
    Axios.get(`/api/catergories/1/cards`)
    .then(res => {
      // console.log(res)
      this.setState({
        cards: res.data
      });
      // console.log(this.state.cards)
    }).catch(err => {
      // console.log(err)
    })
  }


  addArray = () => {
    // function that adds array from state.
  }

  addScore = () => {
    //Function that pushes score to state array
  }

render() {
  const { cards } = this.state
  return(
    <>
    <PageHeader
      className="site-page-header"
      // onBack={() => null}
      title="Home"
      subTitle="This is a subtitle"
      />
      {cards.map(card => (
        <QuestionCard key={card.id} data={card}/>
      ))}
  </>
  )
}

  
}

export default Home;