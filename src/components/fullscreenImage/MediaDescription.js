import classes from "./MediaDescription.module.css";

function MediaDescription(props){
    return <div className={classes.description}>
        {props.title}
        {props.description}
    </div>
}
export default MediaDescription;