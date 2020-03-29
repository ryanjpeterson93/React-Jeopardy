import React from 'react'
import { Form, Input, Button } from 'antd';
import { UpSquareOutlined } from '@ant-design/icons'
import Axios from 'axios';


class CatergoryForm extends React.Component {
  state = {
    name: ''
  }

  onFinish = () => {
    const newCatergory = {...this.state}
    // console.log(newCatergory)
    Axios.post('/api/catergories', newCatergory)
    .then(res => {
      console.log(res)
      this.setState({name: ''});
      this.props.toggle()
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
      <div style={{marginTop: '30px'}}>
        <Form {...layout} name="control-ref" onFinish={this.onFinish}>
          <Form.Item  label="New Catergory">
            <Input name='catergory' value={name} onChange={this.onFill} />
            <Button type="primary" htmlType="submit" style={{marginTop: '12px'}}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '30px'}}>
          <UpSquareOutlined style={{fontSize: '24px'}} onClick={() => this.props.toggle()}/>
        </div>
      </div>
      <hr/>
      </>
    );
  }
}
export default CatergoryForm

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};