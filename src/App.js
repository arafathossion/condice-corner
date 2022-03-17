import { BrowserRouter,Route,Routes } from 'react-router-dom'
import "./App.css";
import Home from "./Components/Home";
import Tabs from "./Components/Tabs";
import Navbar from "./Components/Navbar";
import Shop from './Components/Shop';
import Blog from './Components/Blog';
import Becomepro from './Components/Becomepro';
import Sign from './Components/Sign';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import CreateGig from './Components/CreateGig';


function App() {
  return (
    <>
      
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element = { <Home/> } ></Route>
          <Route path='/all' element = { <Tabs/> } ></Route>
          <Route path='/shop' element = { <Shop/> } ></Route>
          <Route path='/blog' element = { <Blog/> } ></Route>
          <Route path='/pro' element = { <Becomepro/> } ></Route>
          <Route path='/sign' element = { <Sign/> } ></Route>
          <Route path='/login' element = { <Login/> } ></Route>
          <Route path='/profile' element = { <Profile/> } ></Route>
          <Route path='/gig' element = { <CreateGig/> } ></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
