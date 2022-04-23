import { SettingOutlined } from "@ant-design/icons";
import { Button,Col,Form,Input, Row } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../store/actions/loginActions";
import './Login.css'
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async(values) => {
    const username=values.username;
    const password=values.password;
    await dispatch(login(username,password));
    navigate('/');
  }
    return(
        <div>
            <div className="form-header">Nexretail POS <SettingOutlined className="setting"/></div>
            <Row justify="center" className="form-container">
                <Col 
                sm={18}
                md={16}
                xl={12}
                >
                    <Row justify="center">
                        <Col
                        xs={20}
                        sm={20}
                        md={20}
                        lg={18}
                        xl={14}
                        xxl={14}
                        
                        >
      <Form
      className="form"
      name="basic"
      onFinish={onFinish}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>


                        </Col>
                    </Row>
                </Col>
            </Row>
    
        </div>
    )
}
export default Login;