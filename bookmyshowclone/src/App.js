import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Bar from './components/Bar';
import Slider from './components/Slider';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Movies from './components/Movies';
// import Events from './components/Events';
import Cards from './components/Cards';
import Add from './components/Add';
import Liveevents from './components/Liveevents';
import Daddy from './components/Daddy';
import Premiere from './components/Premiere';
import Music from './components/Music';
import Gamessports from './components/Gamesports';
import TrendingSearch from './components/TrendingSearch';

function App() {
  return (
    <>
    

      <Router>

      <Bar/>
     <Slider/>
     <Cards/> 
     <Add/>
     <Liveevents/>
     <Premiere/>
     <Music/>
     <Gamessports/>
     <TrendingSearch/>

      <Routes>

 
   <Route path='/Movies' element = {<Movies/>}/>
   {/* <Route path='/Events' element = {<Events/>}/> */}
   <Route path='/daddy' element = {<Daddy/>}/>

  


      </Routes>



      </Router>

    
    
    </>
  );
}

export default App;
