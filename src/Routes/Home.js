
import Intro from '../components/Home/Introduction';
import Info from '../components/Home/Info';
import About from '../components/Home/About';
import Advantage from '../components/Home/Advantage';
import Reviews from '../components/Home/Reviews';
import Benifits from '../components/Home/Benefits';


function Home(){
    return(
        <div>
      
      <Intro />
      <Info />
      <About />
      <Advantage/>
      <Reviews/>
      <Benifits/>
    
        </div>
    )
}

export default Home;