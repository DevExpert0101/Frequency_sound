import React, { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom'

const mimeType = "audio/webm";

const AudioRecorder = () => {
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

    // useEffect(() => {
    //     // if(!audio)return;
    //     console.log(start)
    //     const audioContext = new (window.AudioContext || window.webktAudioContext)();
    //     console.log("1")
    //     if(!audioRef.current) return;
    //     console.log(2)
    //     const audioElement = audioRef.current;
    //     console.log(3)

    //     const analyser = audioContext.createAnalyser(); 
    //     console.log(4)
        
    //     const audioSource = audioContext.createMediaElementSource(audioElement);
    
    //     console.log(5)
       

    //     audioSource.connect(analyser);
    //     analyser.connect(audioContext.destination);

    //     const bufferLength = analyser.frequencyBinCount;
    //     const dataArray = new Uint8Array(bufferLength);

    //     function update() {
    //         if(audioElement.paused) 
    //         {console.log("dis");audioSource.disconnect(); audioContext.close(); analyser.disconnect(); return;}
    //         requestAnimationFrame(update);
    //         analyser.getByteFrequencyData(dataArray);
    //         const frequency = getFrequency(dataArray);
    //         console.log(frequency);
    //     }


    //     function getFrequency(dataArray) {
    //         const peak = Math.max(...dataArray);
    //         const index = dataArray.indexOf(peak);
    //         const frequency = index * audioContext.sampleRate / bufferLength;
    //         return frequency;
    //     };

    //     audioElement.play();
    //     update();
        
        
    //     return () => {
    //         audioContext.close();
    //         console.log("disconnect...");
    //         audioSource.disconnect();
    //         analyser.disconnect();
    //     };

        
    // }, [start]);
    const [audioSource, setAudioSource] = useState(null);
    function calcul (){
        const audioContext = new (window.AudioContext || window.webktAudioContext)();
        
        if(!audioRef.current) return;
        
        const audioElement = audioRef.current;
        
        const analyser = audioContext.createAnalyser();         
        
        const audioSource = audioContext.createMediaElementSource(audioElement);

        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function update() {
            if(audioElement.paused) 
            {return;}
            requestAnimationFrame(update);
            analyser.getByteFrequencyData(dataArray);
            const frequency = getFrequency(dataArray);
            console.log(frequency);
        }


        function getFrequency(dataArray) {
            const peak = Math.max(...dataArray);
            const index = dataArray.indexOf(peak);
            const frequency = index * audioContext.sampleRate / bufferLength;
            return frequency;
        };

        audioElement.play();
        update();

        return () => {
            analyser.disconnect();
            audioContext.close();
            console.log("disconnect...");
            audioSource.disconnect();
            
        };
    }


    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
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
                <div className="audio-controls">
                    {!permission ? (
                        <button className="btn" onClick={getMicrophonePermission} type="button">
                            Get Microphone
                        </button>
                    ) : null}
                    {permission && recordingStatus === "inactive" ? (
                        <button className="btn" type="button" onClick={startRecording}>
                            Record
                        </button>
                    ) : null}
                    {recordingStatus === "recording" ? (
                        <button className="btn" type="button" onClick={stopRecording}>
                            Stop
                        </button>
                    ) : null}
                    {audio ? (
                        <div>
                            <audio src={audio} ref={audioRef} controls="controls" />
                            <button className="btn" type="button" onClick={calcul}>Cal</button>
                        </div>
                    ) : null}
                </div>
            </main>
        </div>
    );
};

export default AudioRecorder;