import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import { createRoot } from "react-dom/client";
import { lazy } from "react";

const About = lazy(() =>
  wait(1000).then(() => import("./components/About.jsx"))
);

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
