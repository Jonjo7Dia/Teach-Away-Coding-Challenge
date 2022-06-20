import classes from "./ViewResults.module.css";

const ViewResults = () => {
  return (
    <div className={classes.results}>
      <div className={classes.imageColumn}></div>
      <div className={classes.imageColumn}></div>
      <div className={classes.imageColumn}></div>
      <div className={classes.imageColumn}></div>
    </div>
  );
};

export default ViewResults;
