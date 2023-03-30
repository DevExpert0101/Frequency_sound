
import pic1 from '../images/1 (1).png';
import pic2 from '../images/1 (2).png';
import pic3 from '../images/1 (3).png';
import pic4 from '../images/1 (4).png';
import pic5 from '../images/1 (5).png';
import speedmark from '../images/speedometer.jpg';
import ImageComponent from '../components/ImageComponent';
import { useNavigate } from 'react-router-dom';

function Main() {

    const navigate = useNavigate();
    const routeChange = () => navigate('/freq');

    return (
      <div>
        <hr className='title_top_line'></hr>
          <h1 className="page_title">Tuning Calculator</h1> 
        <hr className='title_bottom_line'></hr>

          <h2 className='main_title'> Online Indian Classical Music Tuner</h2>
        
          <h3> Tune your Sitar, Tabla, Venna, Sarod or Tanpura</h3>
          <div className="image">
            <div><ImageComponent imgname={pic1} /></div>
            <div><ImageComponent imgname={pic2} /></div>
            <div><ImageComponent imgname={pic3} /></div>        
          </div>

          <div className="image">
            <div><ImageComponent imgname={pic4} /></div>
            <div><ImageComponent imgname={pic5} /></div>        
          </div>

          <div className='speedmarkimage'>
            <div><ImageComponent imgname={speedmark} /></div>
            
          </div>

          <div className='container'>
            <button className='btn_run' onClick={routeChange}>Start Tuning!</button>
          </div>
      </div>
    );
};

export default Main;