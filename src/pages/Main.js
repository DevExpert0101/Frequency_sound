
import pic1 from '../images/1 (1).jpg';
import pic2 from '../images/1 (2).jpg';
import pic3 from '../images/1 (3).jpg';
import pic4 from '../images/1 (4).jpg';
import speedmark from '../images/speedometer.jpg';
import ImageComponent from '../components/ImageComponent';
import { useNavigate } from 'react-router-dom';

function Main() {

    const navigate = useNavigate();
    const routeChange = () => navigate('/freq');

    return (
        <div>
      {/* <h1 className="header">Image Gallery</h1> */}
      <div className="image">
        <div><ImageComponent imgname={pic1} /></div>
        <div><ImageComponent imgname={pic2} /></div>
        <div><ImageComponent imgname={pic3} /></div>        
      </div>

      <div className="image">
        <div><ImageComponent imgname={pic4} /></div>
        <div><ImageComponent imgname={pic1} /></div>        
      </div>

      <div className='vimage'>
        <div><ImageComponent imgname={speedmark} /></div>
        
      </div>

      <div className='container'>
        <button className='btn_run' onClick={routeChange}>Start Tuning!</button>
      </div>

    </div>
    );
};

export default Main;