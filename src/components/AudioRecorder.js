import React, { useState, useRef, useEffect } from "react";


const mimeType = "audio/webm";

const AudioRecorder = (props) => {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState(null);
    const [frequency, setFrequency] = useState(0);
    const [start, setStart] = useState(true);

    const startRecording = async () => {
        setStart(!start);
        setRecordingStatus("recording");
        const media = new MediaRecorder(stream, { type: mimeType });
        mediaRecorder.current = media;
        mediaRecorder.current.start();
        let localAudioChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
        
    };

    const stopRecording = () => {
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            const audioURL = URL.createObjectURL(audioBlob);
            setAudio(audioURL);
            setAudioChunks([]);
            setStart(!start);
        };
    };


    const audioRef = useRef(null);
    
    useEffect(() => {
        
        const audiocontext = new AudioContext();
        const analysernode = audiocontext.createAnalyser();
        analysernode.fftSize = 2048;
        navigator.mediaDevices.getUserMedia({audio: true, video: false})
            .then((stream) => {
                const source = audiocontext.createMediaStreamSource(stream);
                source.connect(analysernode);
            

            const frequencyData = new Uint8Array(analysernode.frequencyBinCount);

            function updateFrequency() {
                analysernode.getByteFrequencyData(frequencyData);
                const index = frequencyData.indexOf(Math.max(...frequencyData));
                const frequency = index * audiocontext.sampleRate / analysernode.fftSize;
                // console.log('frequency: ', frequency);
                props.onStartExperiment(frequency);
                // document.getElementById("sa").value = frequency;
                requestAnimationFrame(updateFrequency);
            }

            updateFrequency();
        })
        .catch((err) => {
            console.error('error getting user media.', err);
        })
    }, []);

    
    

    const getMicrophonePermission =  () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData =  navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }

        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    

    return (
        <div>
            <h2> Audio Recorder </h2>
            <main>
            <div className="label">
                <label  >Frequency:</label>
                <input id='sa' type="text" value={props.measured?props.measured:""} onChange={props.setMeasureInput}/>
            </div>
                <div className="audio-controls">
                </div>
            </main>
        </div>
    );
};

export default AudioRecorder;