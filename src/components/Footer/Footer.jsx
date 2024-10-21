import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={`footer ${styles.footer} py-3`}>
        <div className="container d-flex flex-column flex-md-row justify-content-between my-5">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center">
            <li className="me-4">
              <a href="" className="text-decoration-none text-black">
                About CouponKu
              </a>
            </li>
            <li className="me-4">
              <a href="" className="text-decoration-none text-black">
                Deals of the Day
              </a>
            </li>
            <li className="me-4">
              <a href="" className="text-decoration-none text-black">
                Shop by Category
              </a>
            </li>
            <li className="me-4">
              <a href="" className="text-decoration-none text-black">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="me-4">
              <i className={`fa-brands fa-twitter ${styles.icon}`}></i>
            </li>
            <li className="me-4">
              <i className={`fa-brands fa-facebook ${styles.icon}`}></i>
            </li>
            <li className="me-4">
              <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
            </li>
            <li className="me-4">
              <i className={`fa-brands fa-github ${styles.icon}`}></i>
            </li>
          </ul>
        </div>
        <div className="copyright d-flex justify-content-center mb-5 text-center">
          <p>&copy; CouponKu 2024, Bringing Joy to Your Shopping Experience</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
