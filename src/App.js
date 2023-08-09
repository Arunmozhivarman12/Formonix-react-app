
import './App.css';
import Aboutus from './Routes/Aboutus';
import Footer from './components/Footer';
import Home from './Routes/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Navbar';
import Personalloan from './Routes/Personalloan';
import Homeloan from './Routes/Homeloan';
import Businessloan from './Routes/Businessloan';
import Generalinsurance from './Routes/Generalinsurance';
import Lifeinsurance from './Routes/Lifeinsurance';
import Mutualfund from './Routes/Mutualfund';
import Partners from './Routes/Partners';
import Contactus from './Routes/Contactus';



function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Aboutus' element={<Aboutus/>}></Route>
        <Route path='/Personalloan' element={<Personalloan/>}></Route>
        <Route path='/Homeloan' element={<Homeloan/>}></Route>
        <Route path='/Businessloan' element={<Businessloan/>}></Route>
        <Route path='/Generalinsurance' element={<Generalinsurance/>}></Route>
        <Route path='/Lifeinsurance' element={<Lifeinsurance/>}></Route>
        <Route path='/Mutualfund' element={<Mutualfund/>}></Route>
        <Route path='/Partners' element={<Partners/>}></Route>
        <Route path='/Contactus' element={<Contactus/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
