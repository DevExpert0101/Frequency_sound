import classes from './ImageComponent.module.css';
import { useState } from 'react';


function ImageComponent(props) {

    const [hover, setHover] = useState(false);
    const HoverData = "Click or pinch to Zoom Image";

    const onHover = (e) => {
        e.preventDefault();
        setHover(true);
        
    };

    const onHoverOver = (e) => {
        e.preventDefault();
        setHover(false);
        
    };


    return (
        
        <div className='imageWrapper'>
        <img className={classes.image} src={props.imgname} alt={props.imgname} onClick={props.onClick} 
            width="50%" 
            height="50%" 
            onMouseEnter={(e) => onHover(e)} 
            onMouseLeave={(e) => onHoverOver(e)} />
        </div>
        
    )
}

export default ImageComponent;