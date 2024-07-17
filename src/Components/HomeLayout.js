
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Home1 from './Home1';
import Footer from './Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Mainpage from './Mainpage';
import ContactUs from './ContactUs';

function HomeLayout() {
  return (
    <div>
      
      <Home />
      <Home1 />
      <BrowserRouter>
      <Routes>
        <Route index element={<Mainpage />}></Route>
        <Route path='ContactUs' element={<ContactUs />}></Route>
       
      </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default HomeLayout;
