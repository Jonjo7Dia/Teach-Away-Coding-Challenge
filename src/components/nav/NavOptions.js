import classes from "./NavOptions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
const NavOptions = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className={classes.filterOptions}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={classes.filterForm}
      >
        <select
          name="section"
          id=""
          defaultValue={filter.section.toUpperCase()}
          onChange={(e) => {
            dispatch(filterActions.setSection(e.target.value));
          }}
        >
          <option value="hot">Hot</option>
          <option value="top">Top</option>
          <option value="user">User</option>
        </select>
        <select
          name="sort"
          id=""
          defaultValue={filter.sort.toUpperCase()}
          onChange={(e) => {
            if (e.target.value !== "top") {
              dispatch(filterActions.setWindow('day'));
            }
            dispatch(filterActions.setSort(e.target.value));
          }}
        >
          <option value="viral">Viral</option>
          <option value="top">Top</option>
          <option value="time">Time</option>
          {filter.section === "user" && <option value="rising">Rising</option>}
        </select>
        {filter.sort === "top" && (
          <select
            name="window"
            id=""
            defaultValue={filter.window.toUpperCase()}
            onChange={(e) => {
              dispatch(filterActions.setWindow(e.target.value));
            }}
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
            <option value="all">All</option>
          </select>
        )}
      </form>
    </div>
  );
};

export default NavOptions;
