import MusicImageComponent from "../components/MusicImageComponent";
import SaMusicImageComponent from "../components/SaMusicImageComponent";
import url from '../images/play.png';
import classes from "./Frequency.module.css";
import { useState } from "react";

function Frequency() {
    const [freq, setFreq] = useState(277.0);
    const onStartExperiment = (e) => {
        setFreq((e.target && e.target.value) ? e.target.value : e);
    }
    return (
        <div className={classes.all}>
            <div className={classes.sa}>
                <SaMusicImageComponent onStartExperiment={onStartExperiment} imgname={url} musicname="Sa" alt="../images/play.png" freq={freq}></SaMusicImageComponent>
            </div>
            <div className={classes.other}>
                <div><MusicImageComponent imgname={url} musicname="re" alt="../images/play.png" freq={freq * 1.066}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Re" alt="../images/play.png" freq={freq * 1.125}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="ga" alt="../images/play.png" freq={freq * 1.2}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Ga" alt="../images/play.png" freq={freq * 1.25}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="ma" alt="../images/play.png" freq={freq * 1.333}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Ma" alt="../images/play.png" freq={freq * 1.4}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Pa" alt="../images/play.png" freq={freq * 1.5}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="dha" alt="../images/play.png" freq={freq * 1.6}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Dha" alt="../images/play.png" freq={freq * 1.667}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="ni" alt="../images/play.png" freq={freq * 1.777}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Ni" alt="../images/play.png" freq={freq * 1.875}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Sa" alt="../images/play.png" freq={freq * 2}></MusicImageComponent></div>
            </div>
        </div>
    );
}

export default Frequency;