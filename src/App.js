
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home';
import Signup from './components/signup';
import Login from './components/login';
import About from './components/about';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      children: [
        {
          index: true,
          element: <About/>
        }
      ]
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/login',
      element: <Login/>
    },
  ])
  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
