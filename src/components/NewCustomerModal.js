import { Modal,Form,Input,InputNumber,Button } from "antd"
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../store/actions/customersAction";

const NewCustomerModal = (props) => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const name=values.name;
        const address=values.address;
        const mobile=values.mobile;
        const businessName=values.businessName;
        const balance = values.balance;
        const data ={name,address,mobile,businessName,balance};
        dispatch(createCustomer(data,token));
        props.onOk();
        form.resetFields();

    }
    return (
        <Modal visible={props.visible} onCancel={props.onCancel}  footer={null} destroyOnClose={true}>
        <h3 style={{textAlign:"center"}}>Create New Customer</h3>
        <Form 
        form={form}
         name="basic"
         initialValues={{ remember: true }}
         labelCol={{ span: 8 }}
         wrapperCol={{ span: 10 }}
         onFinish={onFinish}
         autoComplete="off"
        >
         
            <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input customer name!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input  address!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ required: true, message: 'Please input your mobile number!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Business Name"
            name="businessName"
            rules={[{ required: true, message: 'Please input business name!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Balance"
            name="balance"
            rules={[{ required: true, message: 'Please input  balance!' }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
             wrapperCol={{ offset: 8}}
            >
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
        </Modal>
    )
}
export default NewCustomerModal;