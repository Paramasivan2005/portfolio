import React from "react";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import UrlShortner from "./pages/UrlShortner";
import SmartCampus from "./pages/SmartCampus";
import Portfolio from "./pages/Portfolio";
import SmartTask from "./pages/SmartTaskManager";
import QrCode from "./pages/QrCodeGenerator";
import IncomeExpense from "./pages/IncomeExpenseTracker";
import IndorePlants from "./pages/IndorePlants";
import ProjectLayout from "./layouts/ProjectLayout";
import { LoadingProvider } from "./context/LoadingContext";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        <Route path="/" element={<ProjectLayout />}>
          <Route path="urlshortner" element={<UrlShortner />} />
          <Route path="smart-campus" element={<SmartCampus />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="smart-task-manager" element={<SmartTask />} />
          <Route path="qr-code-generator" element={<QrCode />} />
          <Route path="income-expense-tracker" element={<IncomeExpense />} />
          <Route path="indore-plants" element={<IndorePlants />} />
        </Route>
      </>,
    ),
  );
  return (
    <>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
};

export default App;
