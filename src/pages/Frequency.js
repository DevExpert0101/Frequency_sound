import MusicImageComponent from "../components/MusicImageComponent";
import SaMusicImageComponent from "../components/SaMusicImageComponent";
import url from '../images/play.png';
import classes from "./Frequency.module.css";
import { useEffect, useState } from "react";

function Frequency() {
    const [freq, setFreq] = useState(277.0);
    const [measured, setMeasured] = useState(277);

    const onStartExperiment = (e) => {
        const _freq = (e.target && e.target.value) ? e.target.value : e;
        setFreq(_freq);
        // console.log('Frea is -- ', freq);
    }
    const onSetMeasured = (e) => {        
        const _measured = (e.target && e.target.value) ? e.target.value : 277;
        // if(parseFloat(_measured).toString() == _measured) return;
        // if(typeof _measured == "string") return;
        setMeasured(_measured);
    }
    const octav_array = [1.066, 1.125, 1.2, 1.25, 1.333, 1.4, 1.5, 1.6, 1.667, 1.777, 1.875, 2];
    const octav_name = ["re", "Re", "ga", "Ga", "ma", "Ma", "Pa", "dha", "Dha", "ni", "Ni", "Sa"];
    return (
        <div className={classes.all}>
            
            <div className={classes.sa}>
                <SaMusicImageComponent measured = {measured} onSetMeasured = {onSetMeasured} onStartExperiment={onStartExperiment} imgname={url} musicname="Sa" alt="../images/play.png" freq={freq}></SaMusicImageComponent>
            </div>
            <div></div>
            <div className={classes.other}>
                {
                    octav_array.map((octav, index) => {
                        return <div key = {index}><MusicImageComponent imgname={url} musicname={octav_name[index]} alt="../images/play.png" freq={measured * octav}></MusicImageComponent></div>
                    })
                }
            </div>
        </div>
    );
}

export default Frequency;