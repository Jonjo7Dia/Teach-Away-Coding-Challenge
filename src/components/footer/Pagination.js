import { useDispatch, useSelector } from "react-redux";
import classes from "./Pagination.module.css";
import { filterActions } from "../../store/filter-slice";
import { mediaActions } from "../../store/media-slice";
function Pagination() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  return (
    <div className={classes.pageControls}>
      <div className={classes.pagination}>
        <button
          onClick={() => {
            if (filter.page >= 1) {
              dispatch(filterActions.prevPage());
              dispatch(mediaActions.setLoading(true));
              window.scrollTo(0,0);
            }
          }}
        >
          ❮
        </button>
      </div>

      <div className={classes.pagination}>
        <button
          onClick={() => {
            window.scrollTo(0,0);
            dispatch(filterActions.nextPage());
            dispatch(mediaActions.setLoading(true));
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Pagination;
