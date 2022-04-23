import { Table, Select,Button, Space } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCustomers } from '../store/actions/customersAction';
import NewCustomerModal from './NewCustomerModal';
const {Option} = Select;
const columns = [
  {
    title: 'Items',
    dataIndex:'name',
    key: 'items',
   
  },
  {
    title: 'Quantity',
    dataIndex: ['inventory','quantity'],
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'unitPrice',
    key: 'price',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
const CounterTable = (props) => {
  const [isModalVisible,setIsModalVisible] = useState(false);
  const dispatch=useDispatch();
  const token=useSelector(state=>state.auth.token)
  useEffect(()=>{
    dispatch(getCustomers(token))
  },[])
  const customers=useSelector(state=>state.customers.customers);
  
  const showNewCustomerModal = () => {
    setIsModalVisible(true);
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
    return(
      <div>
      <div style={{paddingBottom:20}}>
      <Select style={{width:300}}>
        {customers.map(customer=>(
          <Option >{customer.name}</Option>
        ))}
          
      </Select>
     <Button style={{backgroundColor:"green"}} onClick={showNewCustomerModal}><PlusSquareOutlined /></Button> 
      </div>
        <Table columns={columns} dataSource={null} />
        <NewCustomerModal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}/>
        </div>
    )
}


export default CounterTable ;