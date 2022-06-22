import classes from "./NavOptions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import { mediaActions } from "../../store/media-slice";
import DropDownMenus from './DropDownMenus';
const NavOptions = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const loadHandler = () => {
    dispatch(mediaActions.setLoading(true));
  };
  return (
    <div className={classes.filterOptions}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={classes.filterForm}
      >
        <DropDownMenus />
        <div className={classes.virality}>
          <div className={classes.label}>Show Viral</div>
          <div className={classes.chooser}>
            <label className={classes.switch}>
              <input
                type="checkbox"
                defaultChecked={filter.showViral}
                onChange={(e) => {
                  dispatch(filterActions.setViral(e.target.checked));
                  dispatch(mediaActions.setLoading(true));
                }}
              />
              <span className={classes.slider}></span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavOptions;
