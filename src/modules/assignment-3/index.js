import React from "react";
import {  Link } from "react-router-dom";
import "./a3.css";
import { AuthenticationProvider } from "./questions/question1/authentication";
import ChildComponent from "./questions/question1/child";
import { PreferencesProvider } from "./questions/question2/preference";


const Assignment3 = () => {
  return (
    <AuthenticationProvider>
      <PreferencesProvider>
        <div>
          <ChildComponent />
        </div>
      </PreferencesProvider>

        <div className="ques3">
          <nav>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
            <li>
              <Link to="/products">PRODUCTS</Link>
            </li>
            
          </nav>
          
         
        </div>
    </AuthenticationProvider>
  );
};

export default Assignment3;
