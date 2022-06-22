import classes from "./DropDownMenus.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import { mediaActions } from "../../store/media-slice";
import React from "react";
function DropDownMenus() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const dispatchSection = (value) => {
    if (filter.section !== value) {
      dispatch(filterActions.setSection(value));
      dispatch(mediaActions.setLoading(true));
    }
  };
  const dispatchSort = (value) => {
    if (filter.sort !== value) {
      dispatch(filterActions.setSort(value));
      dispatch(mediaActions.setLoading(true));
    }
  };
  const dispatchWindow = (value) => {
    if (filter.window !== value) {
      dispatch(filterActions.setWindow(value));
      dispatch(mediaActions.setLoading(true));
    }
  };
  const { section, sort, window } = filter;
  return (
    <React.Fragment>
      <div className={classes.dropdown}>
        <div className={classes.dropdownSelect}>
          <span className={classes.select}>Sort</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className={classes.dropdownList}>
          <div
            style={{
              backgroundColor:
                sort === "viral" ? "rgb(235, 117, 127)" : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchSort("viral");
            }}
          >
            Viral
          </div>
          <div
            style={{
              backgroundColor:
                sort === "top" ? "rgb(235, 117, 127)" : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchSort("top");
            }}
          >
            Top
          </div>
          <div
            style={{
              backgroundColor:
                sort === "time" ? "rgb(235, 117, 127)" : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchSort("time");
            }}
          >
            Time
          </div>
        </div>
      </div>
      <div className={classes.dropdown}>
        <div className={classes.dropdownSelect}>
          <span className={classes.select}>Section</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className={classes.dropdownList}>
          <div
            style={{
              backgroundColor:
                section === "hot"
                  ? "rgb(235, 117, 127)"
                  : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchSection("hot");
            }}
          >
            Hot
          </div>
          <div
            style={{
              backgroundColor:
                section === "top"
                  ? "rgb(235, 117, 127)"
                  : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchSection("top");
            }}
          >
            Top
          </div>
          <div
            style={{
              backgroundColor:
                section === "user"
                  ? "rgb(235, 117, 127)"
                  : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchSection("user");
            }}
          >
            User
          </div>
        </div>
      </div>
      <div className={classes.dropdown}>
        <div className={classes.dropdownSelect}>
          <span className={classes.select}>Window</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className={classes.dropdownList}>
          <div
            style={{
              backgroundColor:
                window === "day" ? "rgb(235, 117, 127)" : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchWindow("day");
            }}
          >
            Day
          </div>
          <div
            style={{
              backgroundColor:
                window === "week"
                  ? "rgb(235, 117, 127)"
                  : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchWindow("week");
            }}
          >
            Week
          </div>
          <div
            style={{
              backgroundColor:
                window === "month"
                  ? "rgb(235, 117, 127)"
                  : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchWindow("month");
            }}
          >
            Month
          </div>
          <div
            style={{
              backgroundColor:
                window === "year"
                  ? "rgb(235, 117, 127)"
                  : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchWindow("year");
            }}
          >
            Year
          </div>
          <div
            style={{
              backgroundColor:
                window === "all" ? "rgb(235, 117, 127)" : " rgb(245, 168, 166)",
            }}
            className={classes.dropdownListItem}
            onClick={() => {
              dispatchWindow("all");
            }}
          >
            All
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DropDownMenus;
