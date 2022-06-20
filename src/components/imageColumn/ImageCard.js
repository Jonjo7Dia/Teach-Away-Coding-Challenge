import classes from "./ImageCard.module.css";

const ImageCard = () => {
    return <div className={classes.imageCard}>
        <div className={classes.media}></div>
        <div className={classes.description}>
            <h4>Discription</h4>
        </div>
    </div>
}

export default ImageCard;