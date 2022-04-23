import { useSelector } from "react-redux";
import { Button, Card } from "antd";
import { useState } from "react";
import { CarTwoTone, PropertySafetyFilled } from "@ant-design/icons";

const SearchItems = (props) => {
    const [selectedItem,setSelectedItem] = useState(null);
    const searchItems = useSelector(state=>state.searchItems.searchItems);

   const addToCart = () => {
       console.log("clicked me")
     //  console.log("id:",props.cardId);
    //  props.addToCart()
   }
    return (
        <div style={{paddingTop:20}} >
             {searchItems.map(item=>(
            <Card style={{width:500}} id={item.id}  >
            <span style={{paddingRight:50}}>{item.name} </span>
            <span style={{paddingLeft:50}}> {item.unitPrice}</span>
            <Button type="primary" htmlType="submit" style={{float:"right"}} onClick={addToCart} >Add to Cart</Button>
            </Card>
        ))}
        </div>
       
    
     
        
    )
        }
export default SearchItems;