import React from 'react'
import { Card } from 'antd';
import Axios from 'axios'


class QuestionCard extends React.Component {

  state = {
    name: 'React Something',
    answer: 'this is answer.',
    flipped: true
  }

componentDidMount() {
  this.setState({
    ...this.props.data
  });
  // console.log(this.state)
}

cardFlip = () => {
  this.setState({
    flipped: !this.state.flipped
  });
}

render() {
  const { name, answer, flipped } = this.state
  return(

  <Card title={name} extra={<a onClick={() => this.cardFlip()}>Show</a>} style={{ width: 300 }}>
    {flipped ?  <p>{answer}</p> : null}
  </Card>



  )
}

}
export default QuestionCard