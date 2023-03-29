
import { Navigate, useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Main from './pages/Main';
import Frequency from './pages/Frequency';



function App() {


  return (    
    <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/freq" element={<Frequency />} />
    </Routes>
  </Router>
  );
}

export default App;
