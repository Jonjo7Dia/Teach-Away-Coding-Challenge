import classes from "./NavLogo.module.css";
import NavOptions from "./NavOptions";
const NavLogo = () => {
  return (
    <div className={classes.navOptions}>
      <div className={classes.navHeading}>
        <h1>imgur clone</h1>
      </div>
      <div className={classes.options}>
        <NavOptions />
      </div>
    </div>
  );
};

export default NavLogo;
