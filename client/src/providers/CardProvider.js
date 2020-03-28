import React from "react";
import Axios from 'axios'

// Set Up The Initial Context
export const CardContext = React.createContext();
// This is exported if we are using the useContext hook

// Create an exportable consumer that can be injected into components
export const CardConsumer = CardContext.Consumer;

// Create the provider
class CardProvider extends React.Component {
  state = {
    cards: [],
  };

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

  render() {
    return (
      <CardContext.Provider value={this.state} cards={this.state.cards}>
        { this.props.children }
      </CardContext.Provider>
    )
  }
}
export default CardProvider;