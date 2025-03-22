
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Viewstory from './Viewstory.jsx'
import Profile from './Profile.jsx'

/*const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:tot',
      element:<Viewstory/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ]
)*/
createRoot(document.getElementById('root')).render(
  //<RouterProvider router={router}/>
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/story/:id/:tot' element={<Viewstory />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </HashRouter>
);
