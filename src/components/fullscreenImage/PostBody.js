import classes from "./PostBody.module.css";

function PostBody(props){

    //details: big image, title, description, upvotes, downvotes and score
    return <div className={classes.post}>
        <div className={classes.imageScore}>
            <div className={classes.media}></div>
            <div className={classes.score}></div>
        </div>
        <div className={classes.descriptionTitle}></div>
    </div>
}

export default PostBody;