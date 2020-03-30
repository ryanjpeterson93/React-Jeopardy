import React from 'react'
import { Card, Button, Input, Form } from 'antd';
import { EditOutlined, DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import Axios from 'axios';


class QuestionCard extends React.Component {

  state = {
    name: 'React Something',
    flipped: true,
    points: 0,
    answer_1: '',
    answer_2: '',
    answer_3: '',
    answer_4: '',
    answer: '',
    buttons: false
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
showButtons = () => {
  this.setState({
    buttons: !this.state.buttons
  });
}

deleteCard = () => {
  const catId = this.props.data.catergory_id
  const id = this.props.data.id
  Axios.delete(`/api/catergories/${catId}/cards/${id}`).then(res => {console.log(res)})

}

handleSubmit = () => {
  const { points } = this.state
  const userInput = this.state.answer
  const correctAnswer = this.props.data.correct_answer
  if (userInput === correctAnswer){
    //clear form
    this.setState({answer: ''});
    // modify score
    this.props.changeScore(points)
    //collapse card
    this.cardFlip()
    return alert(`Correct, for ${points} points!`)
  }
    this.setState({answer: ''});
    this.cardFlip()
    return alert('Swing and a miss.')
}
handleChange = (e) => {
  // console.log(e.target.value)
  this.setState({
    answer: e.target.value
  });
}


render() {
  const { name, answer_1, answer_2, answer_3, answer_4, points, flipped, buttons } = this.state
  return(

  <Card 
  title={<span style={{whiteSpace: 'initial'}}>{name}</span>}
  extra={<a onClick={() => this.cardFlip()}>{flipped ? 'Hide' : 'Show'}</a>} 
  style={{ width: 300, marginTop: '16px' }}
  >
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
    
    {buttons ? 
    <>
    <div style={divStyle}>
    <EditOutlined style={buttonStyle}/>
    <DeleteOutlined style={buttonStyle} onClick={this.deleteCard}/>
    </div>
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
    <UpOutlined onClick={this.showButtons}/>
    </div>
    </>
    :
    <div style={divStyle}>
    <DownOutlined onClick={this.showButtons}/>
    </div>
    }
    </>
    : null}
  </Card>



  )
}

}
export default QuestionCard

const divStyle = {
  display: 'flex', 
  justifyContent: 'flex-end', 
  marginTop: '24px'
}

const buttonStyle = {
  fontSize: '24px',
  margin: '16px'
}