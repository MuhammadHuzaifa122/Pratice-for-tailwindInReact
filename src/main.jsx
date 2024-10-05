import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import { createRoot } from "react-dom/client";
import { lazy } from "react";

const About = lazy(() => wait(0).then(() => import("./components/About")));
const Contact = lazy(() => wait(0).then(() => import("./components/Contact")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:about",
        element: <About />,
      },
    ],
  },
]);

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
