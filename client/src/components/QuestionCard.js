import React from 'react'
import { Card } from 'antd';
import Axios from 'axios'


class QuestionCard extends React.Component {

  state = {
    name: 'React Something',
    flipped: true,
    points: 0,
    answer_1: '',
    answer_2: '',
    answer_3: '',
    answer_4: '',
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
  const { name, answer_1, answer_2, answer_3, answer_4, points, flipped } = this.state
  return(

  <Card title={name} extra={<a onClick={() => this.cardFlip()}>Show</a>} style={{ width: 300 }}>
    {flipped ?  
    <>
    <p>{answer_1}</p>
    <p>{answer_2}</p>
    <p>{answer_3}</p>
    <p>{answer_4}</p>
    <p>Worth:{points}</p>
    </>
    : null}
  </Card>



  )
}

}
export default QuestionCard