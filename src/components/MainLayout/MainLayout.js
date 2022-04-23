import { Layout,Input,Select, Button } from "antd";
import './MainLayout.css';
import logo from './../../assests/logo.png'
import CounterTable from "../CounterTable";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findItemBySku, findItems, getItemById } from "../../store/actions/searchItemActions";
import SearchItems from "../SearchItems";
import { PropertySafetyFilled } from "@ant-design/icons";
const {Header,Content}=Layout;
const {Search}=Input;

const MainLayout = (props) => {
    const [searchKeyword,setSearchKeyword] = useState(null);
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const searchItems=useSelector(state=>state.searchItems.searchItems);
    console.log(token);
    const onSearch = (e) => {
        console.log("value",e.target.value);
        setSearchKeyword(e.target.value);
        dispatch(findItems(token,searchKeyword));
    }
 const addToCartHandler = () => {
     console.log("called me")
    // dispatch(getItemById(props.cardId,token));
 }
 console.log("id",props.cardId)
    return(
        <div>
            <Layout>
            <Header className="nav-bar">
                <img src={logo} style={{height:40,paddingBottom:5}}/>
            </Header>
            <Content className="layout">
             <div className="search">   
            <Search 
                placeholder="input search text"
                allowClear
                style={{ width: 304 }}
                onChange={onSearch}
              /> 
              <SearchItems addTocart= {addToCartHandler}/>
             
              </div>
              <div className="counter">
                 
                   <CounterTable />
              </div>
             
            </Content>
            
            </Layout>
            
        </div>
    )
}
export default MainLayout;