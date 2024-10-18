import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import notfound from "../../assets/Images/notfound.png";

function NotFound() {
  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center flex-column h-100vh py-5`}
      >
        <img className="mb-4" src={notfound} alt="notfound" />
        <Link to="/" className={`${styles.button}`}>
          Go Back Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
