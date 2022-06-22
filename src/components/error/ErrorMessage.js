import { useSelector } from "react-redux";
import classes from "./ErrorMessage.module.css";

function ErrorMessage() {
  const mediaError = useSelector((state) => state.media.error);
    console.log(mediaError)
  return <div className={classes.errorBody}>
      <div>
      Error message: {mediaError.message}

      </div>
      <div>
      Error Status: {mediaError.number}
      </div>
  </div>;
}

export default ErrorMessage;
