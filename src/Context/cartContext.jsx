import axios from "axios";
import { createContext } from "react";

// هنعمل متغير الكل يشوفه جواه التوكن اللى متخزنة ف الاصل فى اللوكال ستورتج
let headers = {
  token: localStorage.getItem("userToken"),
};

export let cartContext = createContext();

export default function CartContextProvider(props) {
  function addProductToCart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          productId: productId,
        },
        {
          headers: headers, // هنتعامل معاه مع اكتر من end points (add/delete/update products) then create public variable
        }
      )
      .then((response) => response)
      .catch((error) => error); // هذه الدالة فى كلا الحالتين بترجع قيمة انا عاوزة لما استخدمها فى مكان برا الصفحة دى يرجعلى قيمة الخرج بتاعتها فلازم نضع قبلها جملة ريترن
  }

  return (
    <cartContext.Provider value={{ addProductToCart }}>
      {props.children}
    </cartContext.Provider>
  );
}
