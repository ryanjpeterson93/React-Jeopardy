import React from 'react'
import { Form, Input, Button, Select } from 'antd';

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
    correct_answer: ''
  }

  onChange = e => {
    console.log(e.target.name)
    console.log(e.target.value)
  };

  onFinish = values => {
    console.log(this.state);
  };


  render() {
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
            // onChange={this.onChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Question:">
          <Input name="name" onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Point Value">
          <Input name="points" onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Answer A:">
          <Input name="answer_1" onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Answer B:">
          <Input name="answer_2" onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Answer C:">
          <Input name="answer_3" onChange={this.onChange} allowClear/>
        </Form.Item>
        <Form.Item label="Answer D:">
          <Input name="answer_4"/>
        </Form.Item>
        <Form.Item label="Correct Answer (A, B, C, or D):">
          <Input name="correct_answer" onChange={this.onChange} allowClear/>
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
export default CardForm