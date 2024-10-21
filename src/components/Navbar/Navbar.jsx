import logo from "../../assets/Images/logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
        <div className="container">
          <a className="navbar-brand" href="">
            <img src={logo} alt="logo" width={30} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <a
                  className={`nav-link ${styles.navLink}`}
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item me-2">
                <a className={`nav-link ${styles.navLink}`} href="/products">
                  Overview
                </a>
              </li>
              <li className="nav-item me-2">
                <a className={`nav-link ${styles.navLink}`} href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item me-2">
                <a className={`nav-link ${styles.navLink}`} href="/profile">
                  Cart
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  className={`nav-link ${styles.navLink}`}
                  href="/productsCollection"
                >
                  Products
                </a>
              </li>
            </ul>
            <div className="text-center">
              <a
                className={`btn me-3 sign ${styles.btn} ${styles.sign}`}
                href="register"
              >
                Sign up
                <i className={`fa-solid fa-arrow-right ${styles.icon}`}></i>
              </a>
              <a
                className={`btn me-3 login text-light ${styles.btn} ${styles.login}`}
                href="login"
              >
                Login
                <i className={`fa-solid fa-arrow-right ${styles.icon}`}></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
