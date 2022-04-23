import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = (props) => {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    if(isLoggedIn){
        return(
            props.children
        )
    } else{
        return(
            <Navigate to="/login" replace/>
        )
     
    }
}
export default ProtectedRoute;