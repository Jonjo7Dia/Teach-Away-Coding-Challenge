import classes from "./PostBody.module.css";
import MediaDisplay from './MediaDisplay';
function PostBody(props){

    //details: big image, title, description, upvotes, downvotes and score
     const {ups, downs, score, title, description} = props.info;

     console.log(ups);
     console.log(downs);
     console.log(score);
     console.log(title);
     console.log(description);
     console.log(props.type);
    return <div className={classes.post}>
        <div className={classes.imageScore}>
            <div className={classes.media}>
                <MediaDisplay type={props.type} link ={props.link} />
            </div>
            <div className={classes.score}></div>
        </div>
        <div className={classes.descriptionTitle}></div>
    </div>
}

export default PostBody;