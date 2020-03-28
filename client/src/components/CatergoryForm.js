import React from 'react'
import { Form, Input, Button } from 'antd';
import Axios from 'axios';


class CatergoryForm extends React.Component {
  state = {
    name: ''
  }

  onFinish = () => {
    const newCatergory = {name: this.state.name}
    // console.log(newCatergory)
    Axios.post('/api/catergories', newCatergory)
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  };


  onFill = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    const { name } = this.state
    return (
      <>
      <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
      <Form name="control-ref" onFinish={this.onFinish}>
        <Form.Item  label="New Catergory">
          <Input name='catergory' value={name} onChange={this.onFill} />
          <Button type="primary" htmlType="submit" style={{marginTop: '12px'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
      <hr/>
      </>
    );
  }
}
export default CatergoryForm