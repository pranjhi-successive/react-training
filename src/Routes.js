import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components";
import { Assignment1 } from "./modules";
import Assignment2 from "./modules/assignment-2";
import Assignment3 from "./modules/assignment-3";
import Dashboard from "./modules/assignment-3/questions/question5/Dashboard";
import About from "./modules/assignment-3/questions/question3/About";
import Home1 from "./modules/assignment-3/questions/question3/Home1";
import ProductList from "./modules/assignment-3/questions/question6/Productlist";
import ProductDetail from "./modules/assignment-3/questions/question6/Details";
import Login from "./modules/assignment-3/questions/question4/Loginform";
import React, { Suspense } from "react";
import products from "./modules/assignment-3/questions/question6/Data";
import Assignment4 from "./modules/assignment-4";
import Assignment5 from "./modules/assignment-5";
import Assignment6 from "./modules/assignment-6";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment-1" element={<Assignment1 />} />
        <Route path="/assignment-2" element={<Assignment2 />} />
        <Route path="/assignment-3" element={<Assignment3 />} />
        <Route path="/home" element={<Home1 />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />

        <Route path="/products" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetail products={products} />}
        />
        <Route path="/assignment-4" element={<Assignment4 />} />
        <Route path="/assignment-5" element={<Assignment5 />} />
        <Route path="/assignment-6" element={<Assignment6 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
