import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* পুরো অ্যাপ */}
    <RouterProvider router={router} />

    {/* Toast notification */}
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2500,
        style: { fontSize: "14px" },
      }}
    />
  </React.StrictMode>
);
