import MusicImageComponent from "../components/MusicImageComponent";
import SaMusicImageComponent from "../components/SaMusicImageComponent";
import url from '../images/play.png';
import classes from "./Frequency.module.css";

function Frequency() {
    return (
        <div className={classes.all}>
            <div className={classes.sa}> 
                <SaMusicImageComponent imgname={url} musicname="Sa" alt="../images/play.png" freq={277}></SaMusicImageComponent>
            </div>
            <div className={classes.other}>
                <div><MusicImageComponent imgname={url} musicname="re" alt="../images/play.png" freq={295}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Re" alt="../images/play.png" freq={311.625}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="ga" alt="../images/play.png" freq={332.4}></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Ga" alt="../images/play.png" freq="346.25"></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="ma" alt="../images/play.png" freq="369.241"></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Ma" alt="../images/play.png" freq="387.8"></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Pa" alt="../images/play.png" freq="415.5"></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="dha" alt="../images/play.png" freq="443.2"></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Dha" alt="../images/play.png" freq="461.759"></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="ni" alt="../images/play.png" freq="492.229"></MusicImageComponent></div>
                <div><MusicImageComponent imgname={url} musicname="Ni" alt="../images/play.png" freq="519.375"></MusicImageComponent></div>
            </div>
        </div>
    );
}

export default Frequency;