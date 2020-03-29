import React from 'react'
import Axios from 'axios'
import QuestionCard from './QuestionCard';

class Catergory extends React.Component {
  state = {
    cards: []
  };

  componentDidMount() {
    Axios.get(`/api/catergories/${this.props.catergory.id}/cards`)
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

  render () {
    return(
      <>
      <div>
        <h2>{this.props.catergory.name}</h2>
        {this.state.cards.map(card => (
        <QuestionCard key={card.id} data={card}/>
      ))}
      </div>
      </>
    )
  }
}
  export default Catergory;