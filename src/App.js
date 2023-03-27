
import { Navigate, useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Main from './pages/Main';
import Frequency from './pages/Frequency';



function App() {


  return (
    // <div>
    //   <h1 className="header">Image Gallery</h1>
    //   <div className="image">
    //     <div><ImageComponent imgname={pic1} /></div>
    //     <div><ImageComponent imgname={pic2} /></div>
    //     <div><ImageComponent imgname={pic3} /></div>        
    //   </div>

    //   <div className="image">
    //     <div><ImageComponent imgname={pic4} /></div>
    //     <div><ImageComponent imgname={pic1} /></div>        
    //   </div>

    //   <div className='vimage'>
    //     <div><ImageComponent imgname={speedmark} /></div>
        
    //   </div>

    //   <div className='container'>
    //     <button className='btn_run' onClick={routeChange}>Start Tuning</button>
    //   </div>

    // </div>

    <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/freq" element={<Frequency />} />
    </Routes>
  </Router>
  );
}

export default App;
