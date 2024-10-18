import styles from "./Home.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
import land1 from "../../assets/Images/land1.jpeg";
import land2 from "../../assets/Images/land2.jpeg";
import land3 from "../../assets/Images/land3.jpeg";
import land4 from "../../assets/Images/land4.jpeg";
import discount from "../../assets/Images/discount.jpeg";
import customer1 from "../../assets/Images/customer1.jpeg";
import customer2 from "../../assets/Images/customer2.jpeg";
import customer3 from "../../assets/Images/customer3.jpeg";

function Home() {
  const options = {
    margin: 10,
    items: 3,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className="container landing my-5 d-flex flex-wrap">
        <div className={`content ${styles.contentHeader}`}>
          <h1 className={`${styles.header} mb-5`}>
            Discover Unbeatable Deals at CouponKu
          </h1>
          <p className={styles.paragraph}>
            Step into a world of savings and explore our exclusive offers.
            CouponKu brings you the best prices on a wide range of products,
            ensuring a delightful shopping experience.
          </p>
          <ul className="list-unstyled d-flex justify-content-between my-5 w-75">
            <li className="d-flex align-items-center justify">
              <i className={`fa-solid fa-tags me-3 mb-3 ${styles.icons}`}></i>
              <p className={`${styles.liP}`}>Exclusive Discounts</p>
            </li>
            <li className="d-flex align-items-center">
              <i
                className={`fa-solid fa-face-smile me-3 mb-3 ${styles.icons}`}
              ></i>
              <p className={`${styles.liP}`}>Customer Satisfaction</p>
            </li>
            <li className="d-flex align-items-center">
              <i className={`fa-solid fa-laptop me-3 mb-3 ${styles.icons}`}></i>
              <p className={`${styles.liP}`}>Convenient Shopping</p>
            </li>
          </ul>
          <div className="buttons mb-4 d-flex">
            <button className={`btn me-4 ${styles.buttonShop} mb-3`}>
              <span>SHOP NOW</span>
              <i className={`fa-solid fa-arrow-right ${styles.icon}`}></i>
            </button>
            <button className={`btn me-4 ${styles.buttonLearn} mb-3`}>
              <span>LEARN MORE</span>
            </button>
          </div>
        </div>
        <div
          className={`images ${styles.owlStageOuter} ${styles.contentImages}`}
        >
          <OwlCarousel {...options}>
            <div className={`item ${styles.imageDiv}`}>
              <img className={`${styles.image}`} src={land1} alt="land" />
            </div>
            <div className={`item ${styles.imageDiv}`}>
              <img className={`${styles.image}`} src={land2} alt="land" />
            </div>
            <div className={`item ${styles.imageDiv}`}>
              <img className={` ${styles.image}`} src={land3} alt="land" />
            </div>
            <div className={`item ${styles.imageDiv}`}>
              <img className={`${styles.image}`} src={land4} alt="land" />
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className={`container deals ${styles.deals} mb-5`}>
        <div className="title text-center">
          <h2>Deals Tailored Just for You</h2>
          <p className={`${styles.titleP} m-auto`}>
            Discover curated deals that cater to your shopping needs, ensuring
            you get the best value every time.
          </p>
        </div>
        <div className={`elements ${styles.elements} text-center`}>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="item">
                <i className="fa-solid fa-gift mb-4 h4"></i>
                <h4 className="mb-4">Exclusive Offers</h4>
                <p className={`${styles.itemP} m-auto`}>
                  Unlock special discounts and promotions available only at
                  CouponKu.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="item">
                <i className="fa-solid fa-calendar-day mb-4 h4"></i>
                <h4 className="mb-4">Daily Discounts</h4>
                <p className={`${styles.itemP} m-auto`}>
                  Enjoy new deals every day, keeping your shopping exciting and
                  affordable.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="item">
                <i className="fa-solid fa-heart mb-4 h4"></i>
                <h4 className="mb-4">Customer Favorites</h4>
                <p className={`${styles.itemP} m-auto`}>
                  Shop products loved by our community for their quality and
                  price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container product mb-5">
        <div className="title text-center mb-5">
          <h2>Explore Our Product Categories</h2>
        </div>
        <div className="elements">
          <div
            className={`${styles.cards_container} col-12 d-flex flex-wrap mx-auto gap-1 gap-lg-1 justify-content-center`}
          >
            <div
              className={`${styles.cat_card} col-10 col-sm-5 col-lg-3 rounded-3 p-3 px-6 m-4 d-flex`}
            >
              <i className="fa-solid fa-tv col-3 m-auto"></i>
              <div className="details col-9 ps-2 pt-3">
                <h5>Electronics</h5>
                <p>1500</p>
              </div>
            </div>

            <div
              className={`${styles.cat_card} col-10 col-sm-5 col-lg-3 rounded-3 p-3 px-6 m-4 d-flex`}
            >
              <i className="fa-solid fa-shirt my-auto col-3"></i>
              <div className="details col-9 ps-2 pt-3">
                <h5>Fashion</h5>
                <p>980</p>
              </div>
            </div>

            <div
              className={`${styles.cat_card} col-10 col-sm-5 col-lg-3 rounded-3 p-3 px-6 m-4 d-flex`}
            >
              <i className="fa-solid fa-couch my-auto col-3"></i>
              <div className="details col-9 ps-2 pt-3">
                <h5>Home & Kitchen</h5>
                <p>640</p>
              </div>
            </div>

            <div
              className={`${styles.cat_card} col-10 col-sm-5 col-lg-3 rounded-3 p-3 px-6 m-4 d-flex`}
            >
              <i className="fa-solid fa-heart my-auto col-3"></i>
              <div className="details col-9 ps-2 pt-3">
                <h5>Beauty & Health</h5>
                <p>750</p>
              </div>
            </div>

            <div
              className={`${styles.cat_card} col-10 col-sm-5 col-lg-3 rounded-3 p-3 px-6 m-4 d-flex`}
            >
              <i className="fa-solid fa-football my-auto col-3"></i>
              <div className="details col-9 ps-2 pt-3">
                <h5>Sports & Outdoor</h5>
                <p>340</p>
              </div>
            </div>

            <div
              className={`${styles.cat_card} col-10 col-sm-5 col-lg-3 rounded-3 p-3 px-6 m-4 d-flex`}
            >
              <i className="fa-solid fa-gamepad my-auto col-3"></i>
              <div className="details col-9 ps-2 pt-3">
                <h5>Toys & Games</h5>
                <p>450</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${styles.discount}`}>
        <div className={`${styles.card} d-flex m-auto`}>
          <div className={`img ${styles.w40}`}>
            <img
              className={`img-fluid w-75 ${styles.img}`}
              src={discount}
              alt="discount"
            />
          </div>
          <div className={`content ${styles.w60}`}>
            <h3 className={`${styles.contenth3} mb-4`}>Start Saving Today</h3>
            <p className={`${styles.contentp} mb-5`}>
              Join thousands of savvy shoppers at CouponKu and enjoy the thrill
              of finding the best deals online.
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="item d-flex align-items-center">
                  <i className="fa-solid fa-dollar-sign mb-3 me-2 text-white"></i>
                  <p className={`${styles.contentParagraph}`}>
                    Unmatched Prices
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item d-flex align-items-center">
                  <i className="fa-solid fa-box-open mb-3 me-2 text-white"></i>
                  <p className={`${styles.contentParagraph}`}>
                    Wide Product Range
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item d-flex align-items-center">
                  <i className="fa-solid fa-cart-shopping mb-3 me-2 text-white"></i>
                  <p className={`${styles.contentParagraph}`}>
                    Easy Shopping Experience
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item d-flex align-items-center">
                  <i className="fa-solid fa-lock mb-3 me-2 text-white"></i>
                  <p className={`${styles.contentParagraph}`}>
                    Secure Transactions
                  </p>
                </div>
              </div>
            </div>
            <button className={`btn mt-3 ${styles.buttonExplore}`}>
              Explore Deals
              <i
                className={`fa-solid fa-arrow-right ${styles.iconExplore}`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${styles.customers}`}>
        <div className="title text-center mb-4">
          <h2 className={`${styles.titleh2} mb-4`}>Loved by Our Customers</h2>
          <p className={`${styles.titleParagraph} m-auto mb-5`}>
            Hear from our happy customers who enjoy incredible savings and a
            seamless shopping experience at CouponKu.
          </p>
        </div>
        <div className={`row m-auto  mb-5`}>
          <div className="col-md-4 mb-3">
            <div className={`img ${styles.imageCustomer}`}>
              <img
                className={`img-fluid h-100 ${styles.photo}`}
                src={customer1}
                alt="customer"
              />
              <div className={`${styles.layer}`}></div>
              <div
                className={`${styles.info} d-flex justify-content-between align-items-center`}
              >
                <div className="text">
                  <h4 className={`${styles.name}`}>Alex Johnson</h4>
                  <p className={`${styles.jobTitle}`}>Frequent Shopper</p>
                </div>
                <div className="icon">
                  <i className={`fa-solid fa-play ${styles.i}`}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className={`img ${styles.imageCustomer}`}>
              <img
                className={`img-fluid h-100 ${styles.photo}`}
                src={customer2}
                alt="customer"
              />
              <div className={`${styles.layer}`}></div>
              <div
                className={`${styles.info} d-flex justify-content-between align-items-center`}
              >
                <div className="text">
                  <h4 className={`${styles.name}`}>Jamie Lee</h4>
                  <p className={`${styles.jobTitle}`}>Bargain Hunter</p>
                </div>
                <div className="icon">
                  <i className={`fa-solid fa-play ${styles.i}`}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className={`img ${styles.imageCustomer}`}>
              <img
                className={`img-fluid h-100 ${styles.photo}`}
                src={customer3}
                alt="customer"
              />
              <div className={`${styles.layer}`}></div>
              <div
                className={`${styles.info} d-flex justify-content-between align-items-center`}
              >
                <div className="text">
                  <h4 className={`${styles.name}`}>Morgan Smith</h4>
                  <p className={`${styles.jobTitle}`}>Deal Enthusiast</p>
                </div>
                <div className="icon">
                  <i className={`fa-solid fa-play ${styles.i}`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`btn d-flex m-auto align-items-center ${styles.seeDiv}`}
        >
          See all reviews
          <i className={`fa-solid fa-arrow-right ${styles.seeIcon}`}></i>
        </button>
      </div>
      <div className="container connect pt-5">
        <div className="title text-center mb-4">
          <h2 className={`mb-4 ${styles.connectH}`}>Connect with Us</h2>
          <p className={`m-auto mb-5 ${styles.connectP}`}>
            We are here to help you with any inquiries or support you need.
            Reach out to CouponKu's friendly team today.
          </p>
        </div>
        <div className="items d-flex flex-column align-items-center">
          <div
            className={`item d-flex align-items-start mb-5 ${styles.resItem}`}
          >
            <div className="icon me-3">
              <i className={`fa-solid fa-headset ${styles.connectI} me-2`}></i>
            </div>
            <div className="text">
              <h5 className={`${styles.connectTextH} mb-3`}>
                Customer Support
              </h5>
              <p className={`${styles.connectTextP}`}>
                Need assistance? Our support team is ready to help you.
              </p>
              <button className={`btn ${styles.connectTextI}`}>
                Contact Support
                <i
                  className={`fa-solid fa-arrow-right ${styles.connectTextIcon}`}
                ></i>
              </button>
            </div>
          </div>
          <div
            className={`item d-flex align-items-start mb-5 ${styles.resItem}`}
          >
            <div className="icon me-3">
              <i
                className={`fa-solid fa-circle-info ${styles.connectI} me-2`}
              ></i>
            </div>
            <div className="text">
              <h5 className={`${styles.connectTextH} mb-3`}>
                General Inquiries
              </h5>
              <p className={`${styles.connectTextP}`}>
                Have a question? We're here to provide the answers you need.
              </p>
              <button className={`btn ${styles.connectTextI}`}>
                Ask a Question
                <i
                  className={`fa-solid fa-arrow-right ${styles.connectTextIcon}`}
                ></i>
              </button>
            </div>
          </div>
          <div
            className={`item d-flex align-items-start mb-5 ${styles.resItem}`}
          >
            <div className="icon me-3">
              <i className={`fa-solid fa-bullhorn ${styles.connectI} me-2`}></i>
            </div>
            <div className="text">
              <h5 className={`${styles.connectTextH} mb-3`}>Promotions</h5>
              <p className={`${styles.connectTextP}`}>
                Learn about our latest promotions and offers.
              </p>
              <button className={`btn ${styles.connectTextI}`}>
                Discover Offers
                <i
                  className={`fa-solid fa-arrow-right ${styles.connectTextIcon}`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
