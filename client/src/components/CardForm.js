import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import { CardConsumer } from '../providers/CardProvider'
import Axios from 'axios';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class CardForm extends React.Component {
  state= {
    name: '',
    catergory_id: 0,
    flipped: false,
    points: 0,
    answer_1: '',
    answer_2: '',
    answer_3: '',
    answer_4: '',
    correct_answer: '',
  }

  componentDidMount() {
    // console.log(this.props.data.catergories)
  }

  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };
  selectChange = e => {
    this.setState({catergory_id: e});
  }

  onFinish = () => {
    const newCard = {
      name: this.state.name,
      flipped: false,
      points: this.state.points,
      answer_1: this.state.answer_1,
      answer_2: this.state.answer_2,
      answer_3: this.state.answer_3,
      answer_4: this.state.answer_4,
      correct_answer: this.state.correct_answer,
    }
    const id = this.state.catergory_id
    Axios.post(`/api/catergories/${id}/cards`, newCard)
    .then(res => {
      console.log(res)
      this.setState({
        name: '',
        catergory_id: 0,
        points: 0,
        answer_1: '',
        answer_2: '',
        answer_3: '',
        answer_4: '',
        correct_answer: '',
      });
      this.props.toggle()
    }).catch(err => {
      console.log(err)
    })
  };


  render() {
    const { catergories } = this.props.data
    const { name, points, answer_1, answer_2, answer_3, answer_4, correct_answer } = this.state
    return (
      <div style={{marginTop: '20px'}}>
      <Form {...layout} name="control-ref" onFinish={this.onFinish}>
        <Form.Item
          name="catergory_id"
          label="Catergory"
        >
          <Select
            name="catergory_id"
            placeholder="Select Catergory"
            onChange={this.selectChange}
            allowClear
          > {catergories.map( cat => (
              <Option key={cat.id} value={cat.id}>{cat.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Question:">
          <Input name="name" value={name} onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Point Value">
          <Input name="points" value={points} onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Answer A:">
          <Input name="answer_1" value={answer_1} onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Answer B:">
          <Input name="answer_2" value={answer_2} onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Answer C:">
          <Input name="answer_3" value={answer_3} onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Answer D:">
          <Input name="answer_4" value={answer_4} onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Correct Answer (A, B, C, or D):">
          <Input name="correct_answer" value={correct_answer} onChange={this.onChange} allowClear/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <hr/>
      </div>
    );
  }
}

export default class ConnectedCardForm extends React.Component {
  render() {
    return (
      <CardConsumer>
        { data => <CardForm {...this.props} data={data} />}
      </CardConsumer>
    )
  }
}

 

