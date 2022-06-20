import classes from "./NavOptions.module.css";
import { useSelector } from "react-redux";
const NavOptions = () => {
  const filter = useSelector((state) => state.filter);
  console.log(filter);
  return (
    <div className={classes.filterOptions}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={classes.filterForm}
      >
        <select name="section" id="" defaultValue={filter.section}>
          <option value="hot">Hot</option>
          <option value="top">Top</option>
          <option value="user">User</option>
        </select>
        <select name="sort" id="" defaultValue={filter.sort}>
          <option value="viral">Viral</option>
          <option value="top">Top</option>
          <option value="time">Time</option>
          <option value="rising">Rising</option>
        </select>
        <select name="window" id="" defaultValue={filter.window}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="all">All</option>
        </select>
      </form>
    </div>
  );
};

export default NavOptions;
