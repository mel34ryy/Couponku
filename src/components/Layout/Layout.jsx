import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <>
      <Navbar />
      <div className={`${styles.content}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
