import classes from "./Nav.module.css";
import NavLogo from "./NavLogo";

const Nav = () => {
  return <nav className={classes.nav}>
      <NavLogo></NavLogo>
  </nav>;
};

export default Nav;
