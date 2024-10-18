import styles from "./Products.module.css";
import img1 from "../../assets/Images/img1.jpeg";
import img2 from "../../assets/Images/img2.jpeg";
import img3 from "../../assets/Images/img3.jpeg";
import img4 from "../../assets/Images/img4.jpeg";
import img5 from "../../assets/Images/img5.jpeg";
import img6 from "../../assets/Images/img6.jpeg";
import img7 from "../../assets/Images/img7.jpeg";
import img8 from "../../assets/Images/img8.jpeg";
import commentImg1 from "../../assets/Images/commentImg1.jpeg";
import commentImg2 from "../../assets/Images/commentImg2.jpeg";
import commentImg3 from "../../assets/Images/commentImg3.jpeg";

function Products() {
  return (
    <>
      <section>
        <div className={`${styles.header} py-5`}>
          <p>Discover Unbeatable Deals</p>
          <p>
            Dive into our gallery of exclusive discounts and find the perfect
            products at the best prices
          </p>
        </div>

        <div className={styles.slider}>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img1} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img2} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img3} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img4} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img1} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img2} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img3} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img4} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img1} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img2} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img3} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
          <div className={`${styles.img_container} col-8 col-md-5 col-lg-3`}>
            <img src={img4} alt="image" />
            <p>Shopping Extravaganza</p>
          </div>
        </div>

        <div className={`${styles.categories} py-5`}>
          <p className="mb-5">Shop by Category</p>

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

        <div className={`${styles.top_products} py-5 text-center`}>
          <p>
            Check out our top-selling items that customers cannot get enough of
          </p>
          <h4>Top-Selling Products</h4>

          <div
            className={`${styles.products_info} d-flex col-11 justify-content-center mx-auto my-4 pt-5 flex-wrap gap-5`}
          >
            <div className={`${styles.product1} col-lg-3 col-10 col-md-7 mb-5`}>
              <h6>Latest Tech Gadgets</h6>
              <p>Stay ahead with technology products.</p>
              <img src={img5} alt="image" />
              <p>
                Explore a range of gadgets that are trending and in high demand.
              </p>
            </div>
            <div className={`${styles.product2} col-lg-3 col-10 col-md-7 mb-5`}>
              <h6>Fashion Forward</h6>
              <p>Discover the latest trends in fashion.</p>
              <img src={img6} alt="img" />
              <p>Upgrade your wardrobe with our top picks in fashion.</p>
            </div>
            <div className={`${styles.product3} col-lg-3 col-10 col-md-7 mb-5`}>
              <h6>Home Essentials</h6>
              <p>Find everything you need for a cozy home.</p>
              <img src={img7} alt="image" />
              <p>
                Shop must-have home essentials that combine style and
                functionality.
              </p>
            </div>
          </div>

          <div
            className={`${styles.exclusive} py-5 col-12 text-center d-flex flex-wrap justify-content-around  `}
          >
            <div
              className={`${styles.offer} col-lg-8 col-xl-5 col-10 ps-lg-4  text-center mb-4`}
            >
              <h2>Unlock Exclusive Offers</h2>
              <p>Join our community and never miss a deal again.</p>

              <div className={`${styles.credits} mt-5 text-start ms-2 ps-md-5`}>
                <p>
                  <i className="fa-solid fa-check me-1"></i> Weekly Discounts on
                  Popular Items
                </p>
                <p>
                  <i className="fa-solid fa-check me-1"></i> Early Access to
                  Sales
                </p>
                <p>
                  <i className="fa-solid fa-check me-1"></i> Special Member-Only
                  Coupons
                </p>
                <div className={`${styles.btns} col-12 col-md-10`}>
                  <button className={`${styles.btn1} btn px-1 mx-2 mt-5 col-5`}>
                    <i className="fa-solid fa-pen-to-square"></i> Try For Free
                  </button>
                  <button
                    className={`${styles.btn2} btn  px-1 mx-2 mt-5 col-5`}
                  >
                    <i className="fa-solid fa-comments"></i> Contact Sales
                  </button>
                </div>
              </div>
            </div>

            <div className={`${styles.offer_image} col-xl-5 col-md-8 col-10`}>
              <img src={img8} alt="img" />
            </div>
          </div>
        </div>

        <div
          className={`${styles.comments} py-5 d-flex flex-column align-items-center`}
        >
          <div className={`${styles.comment} d-flex mt-5 col-md-6 col-11 pb-5`}>
            <div className={`${styles.commentImg} mx-4`}>
              <img
                src={commentImg1}
                alt="comment_img"
                className={`${styles.commentImg} rounded-circle`}
              />
            </div>

            <div className={`${styles.commentDet}`}>
              <div className={`${styles.stars}`}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                Amazing deals and fantastic customer service. Highly recommend!
              </p>
              <div className={`${styles.author}`}>Alex Johnson</div>
              <div className={`${styles.commentDate}`}>October 5, 2023</div>
            </div>
          </div>
          <div className={`${styles.comment} d-flex mt-5 col-md-6 col-11 pb-5`}>
            <div className={`${styles.commentImg} mx-4`}>
              <img
                src={commentImg2}
                alt="comment_img"
                className={`${styles.commentImg} rounded-circle`}
              />
            </div>

            <div className={`${styles.commentDet}`}>
              <div className={`${styles.stars}`}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                The discounts are unbeatable, and the product range is vast.
              </p>
              <div className={`${styles.author}`}>Samantha Lee</div>
              <div className={`${styles.commentDate}`}>September 20, 2023</div>
            </div>
          </div>
          <div
            className={`${styles.comment} d-flex mt-5 col-md-6 col-11 pb-5 border-0`}
          >
            <div className={`${styles.commentImg} mx-4`}>
              <img
                src={commentImg3}
                alt="comment_img"
                className={`${styles.commentImg} rounded-circle`}
              />
            </div>

            <div className={`${styles.commentDet}`}>
              <div className={`${styles.stars}`}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p>Great shopping experience with lots of savings!</p>
              <div className={`${styles.author}`}>Michael Brown</div>
              <div className={`${styles.commentDate}`}>August 15, 2023</div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.questions} d-flex justify-content-around col-11 py-5 mx-auto flex-wrap`}
        >
          <div className={`${styles.questionsHead} col-12 col-md-6`}>
            <p className={`${styles.faq}`}>FAQ</p>
            <h2>Your Questions Answered</h2>
            <p>
              Find out more about our amazing deals and shopping experience.
            </p>
          </div>

          <div className={`${styles.questionsCards} col-12 col-md-6 `}>
            <div
              className={`${styles.questionCard} col-12 p-3 mb-4 rounded-2 pt-4 mx-auto`}
            >
              <h6>How do I use a coupon code?</h6>
              <p>
                Simply enter the coupon code at checkout to enjoy your discount.
              </p>
            </div>
            <div
              className={`${styles.questionCard} col-12 p-3 mb-4 rounded-2 pt-4 mx-auto`}
            >
              <h6>What is your return policy?</h6>
              <p>
                We offer a 30-day return policy for most products. Visit our
                returns page for more details.
              </p>
            </div>
            <div
              className={`${styles.questionCard} col-12 p-3 mb-4 rounded-2 pt-4 mx-auto`}
            >
              <h6>How can I track my order?</h6>
              <p>
                You can track your order through your account dashboard or the
                tracking link sent to your email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
