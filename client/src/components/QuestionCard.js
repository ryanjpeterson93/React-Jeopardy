import React from 'react'
import { Card, Button, Input, Form } from 'antd';


class QuestionCard extends React.Component {

  state = {
    name: 'React Something',
    flipped: true,
    points: 0,
    answer_1: '',
    answer_2: '',
    answer_3: '',
    answer_4: '',
    answer: ''
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

handleSubmit = () => {
  const userInput = this.state.answer
  const correctAnswer = this.props.data.correct_answer
  if (userInput === correctAnswer){
    alert('Winner winner, chicken dinner!')
   // modify score
   return this.props.changeScore(this.state.points)
  }
  return alert('You Fail.')
}
handleChange = (e) => {
  // console.log(e.target.value)
  this.setState({
    answer: e.target.value
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
    <p>Worth: {points}</p>
    <Form >
      <Input onChange={this.handleChange} name='answer' value={this.state.answer} placeholder="Select A, B, C, or D"/>
      <Button type='submit' onClick={() => this.handleSubmit()}>Submit</Button>
    </Form>
    </>
    : null}
  </Card>



  )
}

}
export default QuestionCard