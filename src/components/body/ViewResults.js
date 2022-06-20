import classes from "./ViewResults.module.css";
import ImageColumn from '../imageColumn/ImageColumn';
const ViewResults = () => {
    const arr = [1,2,3,4,5,6,8]
  return (
    <div className={classes.results}>
      <div className={classes.imageColumn}><ImageColumn data={arr}/></div>
      <div className={classes.imageColumn}></div>
      <div className={classes.imageColumn}></div>
      <div className={classes.imageColumn}></div>
    </div>
  );
};

export default ViewResults;
