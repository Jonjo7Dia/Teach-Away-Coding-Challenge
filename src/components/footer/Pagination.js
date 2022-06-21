import classes from "./Pagination.module.css";

function Pagination() {
  return (
    <div className={classes.pageControls}>
      <div className={classes.pagination}>
        <button>❮</button>
      </div>
      <div className={classes.virality}>
        <div className={classes.label}>Show Viral</div>
        <div className={classes.chooser}>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
          </label>
        </div>
      </div>
      <div className={classes.pagination}>
        <button>❯</button>
      </div>
    </div>
  );
}

export default Pagination;
