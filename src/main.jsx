import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import PreEventPage from "./pages/Pre-eventPage";
import MainEventPage from "./pages/Main-eventPage";
import SponsorPage from "./pages/SponsorsPage";
import FAQ from "./pages/FAQ-Page";
import NotFoundPage from "./pages/NotFoundPage";
import LocationPage from "./pages/Location";
import Footer from "./components/custom/Footer";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/abouts",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/pre-events",
    element: <PreEventPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/main-events",
    element: <MainEventPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/sponsors",
    element: <SponsorPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/FAQs",
    element: <FAQ />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/locations",
    element: <LocationPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/contacts",
    element: <Footer />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },

        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
        error: {
          duration: 3000,
          theme: {
            primary: "red",
            secondary: "black",
          },
        },
      }}
    />
  </React.StrictMode>
);
