import classes from "./MediaDisplay.module.css";

function MediaDisplay(props){
    console.log(props.link);
    if(props.type.includes('video')){
        return <div className={classes.videoView}>
            <video src={props.link} type={props.type} playsInline controls autoPlay loop></video>
        </div>
    }
    else {
        return <div className={classes.imageView}><img src={props.link} alt={props.type}></img></div>
    }


}

export default MediaDisplay;