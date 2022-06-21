import classes from "./Footer.module.css";
import Pagination from './Pagination';
function Footer(){
    return <footer className={classes.footer}>
        <Pagination />
    </footer>

}

export default Footer;