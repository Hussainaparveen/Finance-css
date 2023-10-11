// import logo from './logo.svg';
import './App.css';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page7 from './Components/Page7';
// import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
    {/* <Routes>
      <Route path='/'element={<Page1/>}/>
      <Route path='/about' element={<Page2/>}/>
      <Route path='/company' element={<Page3/>}/>
      <Route path='/Contactus' element={<Page4/>}/>
      
      </Routes> */}
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      </div>
  );
}

export default App;
