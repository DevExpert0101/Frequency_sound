import classes from './MusicImageComponent.module.css';
import MP3 from "../musics/000 (1).mp3";
import { useState } from 'react';
import React from 'react';
import Frequency from '../pages/Frequency';
import { useFrequency } from 'react-frequency';

const oscillatorValues = ["sine", "sawtooth", "square", "triangle"];

function MusicImageComponent(props) {
    const audioRef = React.createRef();
    const handleKeydown = () => {
        audioRef.current.play();
    }
    const [type, setType] = useState("center");
    const [gain, setGain] = useState(100);
    // const [frequency, setFrequency] = useState(props.freq);    
    const [oscillator, setOscillator] = useState(oscillatorValues[0]);

    const { start, stop } = useFrequency({
        hz: props.freq,
        type,
        gain,
        oscillator
    });

    return (
        <div className={classes.div}>

            <div className={classes.left}>

                <div className={classes.btns}>
                    <button className={classes.btn} onClick={start}> Start </button>
                    <button className={classes.btn} onClick={stop}> Stop </button>
                </div>
            </div>
            <div className={classes.right}>{props.musicname}</div>
        </div>
    );
}

export default MusicImageComponent;