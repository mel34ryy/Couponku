import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Contact /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "home", element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "contact", element: <Contact /> },
        { path: "profile", element: <Profile /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
