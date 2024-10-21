import styles from "./ProductsCollection.module.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/cartContext";

function ProductsCollection() {
  let { addProductToCart } = useContext(cartContext); // this function return promise, then must await some time,sp we create another function works as bridge
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true); // isLoading = true

  async function addProductItem(id) {
    let response = await addProductToCart(id);
    console.log("response", response);
  }

  function getProducts() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(({ data }) => {
        console.log(data.data); //40 products array
        setLoading(false);
        setProduct(data.data);
      })

      .catch(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" col-10 mx-auto">
      {
        !isLoading ? ( // لو مش بترو هيعرض المنتجات لان التحميل هيكون خلص
          <div
            className={`${styles.smallContainer} d-flex flex-wrap text-center `}
          >
            {product.map((productInfo) => {
              return (
                <>
                  <div
                    className={`${styles.product} mx-4 mx-auto py-3 px-1 styleProduct mb-4`}
                  >
                    <Link
                      to={`/productDetails/${productInfo.id}`}
                      className={`${styles.list}`}
                    >
                      <img
                        src={productInfo.imageCover}
                        className=""
                        alt={productInfo.title}
                      />
                      <span className=" d-block">
                        {" "}
                        {productInfo.category.name}{" "}
                      </span>
                      <span className=" d-block">
                        {" "}
                        {productInfo.title
                          .split(" ")
                          .slice(0, 3)
                          .join(" ")}{" "}
                      </span>

                      <div className="d-flex justify-content-between my-2 px-3">
                        <span>{productInfo.price} EGP</span>
                        <span>
                          {productInfo.ratingsQuantity}
                          <i className="fas fa-star text-warning m-1"></i>
                        </span>
                      </div>
                    </Link>

                    <button
                      onClick={() => {
                        addProductItem(productInfo.id);
                      }}
                      className={`${styles.addBtn} btn text-white p-2 m-2 w-75`}
                    >
                      Add To Cart{" "}
                      <i className="fa-solid fa-cart-shopping ms-2"></i>
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <Loader />
        ) // هنا معناها انه بترو يعنى لسه بيعمل لود يعنى شكله فقط اللى هيبان
      }
    </div>
  );
}

export default ProductsCollection;
