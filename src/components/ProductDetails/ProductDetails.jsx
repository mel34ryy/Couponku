import styles from "./ProductDetails.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let { id } = useParams(); //return object {id:''}
  // المفروض ابعت ال id to API to obtain the product details
  const [details, setDetails] = useState(null);

  function getProductDetails() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

      .then(({ data }) => {
        console.log(data.data);
        setDetails(data.data);
      })

      .catch(() => {});
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className="d-flex col-10 mx-auto flex-wrap mt-4">
      <div
        className={`${styles.imgContainer} col-sm-8 mx-auto col-md-4 py-4 col-11 d-flex align-items-center justify-content-center`}
      >
        <img
          src={details?.imageCover}
          alt={details?.title}
          className="w-75 rounded-4 h-auto "
        />
      </div>
      <div
        className={`${styles.cardDetails} col-sm-8 mx-auto col-md-8 col-11 text-center d-flex flex-column py-4 align-content-center justify-content-center px-3 `}
      >
        <h1>{details?.title}</h1>
        <p>{details?.description}</p>
        <p>{details?.category.name}</p>

        <div className="d-flex justify-content-between my-2 px-sm-5 px-3">
          <span>{details?.price} EGP</span>
          <span>
            {details?.ratingsQuantity}
            <i className="fas fa-star text-warning"></i>
          </span>
        </div>
        <button
          className={`${styles.btn2} btn text-white p-2 col-md-6 col-10 my-3 mx-auto `}
        >
          Add To Cart <i className="fa-solid fa-cart-shopping ms-2"></i>
        </button>
      </div>
    </div>
  );
}
