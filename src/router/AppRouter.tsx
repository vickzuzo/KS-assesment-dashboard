import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarLayout } from "../components";
import {
  DashboardPage,
  ProductsPage,
  BlogPage,
  TransactionsPage,
  UsersPage,
  AnalysisPage,
  ReportsPage,
  InvestmentsPage,
  SettingsPage,
} from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/investment" element={<InvestmentsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
