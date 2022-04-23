import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import MainLayout from './components/MainLayout/MainLayout';
import { useRoutes } from 'react-router';
import ProtectedRoute from './components/routes/ProtectedRoute';

function App() {
  const routes =[
    {path:"/login",element:<Login/>},
    {path:"/",element:<ProtectedRoute><MainLayout/></ProtectedRoute>}
  ]
  const element=useRoutes(routes);
  return (
    <div>
     {element}
    </div>
  );
}

export default App;
