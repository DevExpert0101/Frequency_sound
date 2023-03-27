import classes from './SaMusicImageComponent.module.css';
import { useState } from 'react';
import React from 'react';
import { useFrequency } from 'react-frequency';

const oscillatorValues = ["sine", "sawtooth", "square", "triangle"];

function SaMusicImageComponent(props) {
    const audioRef = React.createRef();
    const handleKeydown = () => {
        audioRef.current.play();
    }
    const [type, setType] = useState("center");
    const [gain, setGain] = useState(100);
    const [frequency, setFrequency] = useState(props.freq);    
    const [oscillator, setOscillator] = useState(oscillatorValues[0]);
    
    const { start, stop } = useFrequency({
        hz: frequency,
        type,
        gain,
        oscillator
    });

    return (
        <div className={classes.div}>
            <h1 className={classes.h1}>{props.musicname}</h1>
            <h2 className={classes.h2}>Frequency:{props.freq}</h2>                        

            <div className={classes.btns}> 
                <button className={classes.btn} onClick={start}> Start </button>
                <button className={classes.btn} onClick={stop}> Stop </button>
            </div>
        </div>
    );
}

export default SaMusicImageComponent;