import classes from './SaMusicImageComponent.module.css';
import { useState } from 'react';
import React from 'react';
import { useFrequency } from 'react-frequency';
import MicRecorder from 'mic-recorder-to-mp3';
import AudioRecorder from './AudioRecorder';

const oscillatorValues = ["sine", "sawtooth", "square", "triangle"];

function SaMusicImageComponent(props) {

    // const context = new (window.AudioContext || window.webkitAudioContext) ();
    // const analysernode = context.createAnalyser();
    // analysernode.fftSize = 2048;

    // navigator.mediaDevices.getUserMedia({ auto: true})
    //     .then((stream) => {
    //         const source = context.createMediaStreamSource(stream);
    //         source.connect(analysernode);

    //         const frequencyData = new Uint8Array(analysernode.frequencyBinCount);

    //         function updateFrequency(){
    //             analysernode.getByteFrequencyData(frequencyData);
    //             const index = frequencyData.indexOf(Math.max(...frequencyData));
    //             const frequency = index * context.sampleRate / analysernode.fftSize;

    //             console.log('Frequency', frequency);

    //             requestAnimationFrame(updateFrequency);
    //         }

    //         updateFrequency();
    //     })
    //     .catch((err) => {
    //         console.err('Error getting user media:', err);
    //     });

    // this.state = {
    //     isRecoding: false,
    //     blobURL: '',
    //     isBlocked: false,
    // }

    // navigator.getUserMedia({audio:true}, 
    //     () => {
    //         console.log('Permission Granted.');
    //         this.setState({isBlocked: false});
    //     },
    //     () => {
    //         console.log('Permission Denied');
    //         this.setState({isBlocked: true});
    //     },
    // );
    
    // startRecoding = () => {
    //     if (this.state.isBlocked) {
    //         console.log('Permision is Denied.');
    //     }else {
    //         Mp3Recorder
    //         .start()
    //         .then(() => {
    //             this.setState({ isRecoding: true});                
    //         }).catch((e) => console.error(e));
    //     }
    // }

    // stopRecording = () => {
    //     Mp3Recorder
    //     .stop()
    //     .getMp3()
    //     .then(([buffer, blob]) => {
    //         const blobURL = URL.createObjectURL(blob);
    //         this.setState({ blobURL, isRecoding: false});
    //     }).catch((e) => console.log(e));
    // };


    const audioRef = React.createRef();
    const handleKeydown = () => {
        audioRef.current.play();
    }
    const [type, setType] = useState("center");
    const [gain, setGain] = useState(100);
    const [frequency, setFrequency] = useState(277);
    const [oscillator, setOscillator] = useState(oscillatorValues[0]);

    const { start, stop } = useFrequency({
        hz: props.freq,
        type,
        gain,
        oscillator
    });

    return (
        <div className={classes.div}>

            <h1 className={classes.h1}>{props.musicname}</h1>
            <div className={classes.label}>
                <label  >Frequency:</label>
                <input id='sa' type="text" value={props.freq} onChange={props.onStartExperiment}/>
            </div>
            <h2 className={classes.h2}></h2>

            <div>
                <AudioRecorder />
            </div>

            <div className={classes.btns}>                
                <button className={classes.btn} onClick={start}> Start </button>
                <button className={classes.btn} onClick={stop}> Stop </button>
            </div>
        </div>
    );
}

export default SaMusicImageComponent;