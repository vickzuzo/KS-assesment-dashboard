import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarLayout } from "../components";
import { DashboardPage, ProductsPage } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
