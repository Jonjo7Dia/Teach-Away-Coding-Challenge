import classes from "./NavOptions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import { mediaActions } from "../../store/media-slice";
import DropDownMenus from './DropDownMenus';
const NavOptions = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className={classes.filterOptions}>
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
    </div>
  );
};

export default NavOptions;
