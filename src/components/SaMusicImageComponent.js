import classes from './SaMusicImageComponent.module.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useFrequency } from 'react-frequency';

import AudioRecorder from './AudioRecorder';

const oscillatorValues = ["sine", "sawtooth", "square", "triangle"];

function SaMusicImageComponent(props) {



    const audioRef = React.createRef();
    const handleKeydown = () => {
        audioRef.current.play();
    }
    const [type, setType] = useState("center");
    const [gain, setGain] = useState(100);
    const [frequency, setFrequency] = useState(277);
    const [oscillator, setOscillator] = useState(oscillatorValues[0]);
    const [started, setStarted] = useState(false)


    const { start, stop } = useFrequency({
        hz: isFinite(props.measured) ? props.measured > 0 ? props.measured : 277 : 277,
        type,
        gain,
        oscillator
    });
    // useEffect(() => {
    //     console.log(props.measured)
    // }, [props.measured])

    const [freq_array, setFreqArray] = useState([]);
    const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

    useEffect(() => {
        if (!started) {
            // props.onSetMeasured(average(freq_array));
            return;
        }
        const _freq_array = freq_array
        setFreqArray([..._freq_array, props.freq])
        // console.log(freq_array)
    }, [props.freq])

    const OnsetMeasureInput = (e) => {
        // console.log(e.target.value)
        props.onSetMeasured(e.target.value);
    }
    return (
        <div className={classes.div}>

            <h1 className={classes.h1}>{props.musicname}</h1>

            <h2 className={classes.h2}></h2>

            <div>
                <AudioRecorder freq={props.freq} onStartExperiment={props.onStartExperiment} measured={props.measured} setMeasureInput={OnsetMeasureInput} />
            </div>

            <h2>Measurement</h2>
            <div className={classes.btns}>
                <button className={classes.btn} onClick={() => { setFreqArray([props.freq]); props.onSetMeasured(-1); setStarted(true) }}> Start </button>
                <button className={classes.btn} onClick={() => {
                    setStarted(false);
                    console.log(freq_array)
                    props.onSetMeasured(average(freq_array));
                    props.onStartExperiment(isFinite(props.measured) ? props.measured : 277);
                }}> Stop </button>
            </div>

            <h2>Play</h2>
            <div className={classes.btns}>
                <button className={classes.btn} onClick={() => { start() }}> Start </button>
                <button className={classes.btn} onClick={() => { stop() }}> Stop </button>
            </div>


        </div>
    );
}

export default SaMusicImageComponent;