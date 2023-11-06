import React, { useState } from "react";
import "./a4.css"
import ControlledInput from "./Question/question1/inputfield";
import ControlledForm from "./Question/question2/form";
import Condition from "./Question/question3/button";
import PasswordForm from "./Question/question4/password";
import SelectDropdown from "./Question/question5/dropdown";
import ToDoList from "./Question/question6/todolist";
import SearchFilter from "./Question/question7/search";
import TemperatureConverter from "./Question/question8/temperature";

import Sidebar from "./Question/question9/nav";
import FormWithValidation from "./Question/question10/form";
import ModalDialog from "./Question/question11/modal";
import DataTable from "./Question/question12/table";
import MyForm from "./Question/question13/yup";
import NewForm from "./Question/question14/NewForm";

function Assignment4(){
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);}
  const handleSave = () => {
    console.log("Data saved successfully");

  }
  return(
    <div className="app">
      <h1>QUESTION1</h1>
    <div className="in">
      <h1>Controlled Input  for input field</h1>
      <ControlledInput/>
    </div>
    <h1>QUESTION2</h1>
    <div className="for">
     <h1>Controlled Form</h1>
     <ControlledForm/>
    </div>
    <h1>QUESTION3</h1>
    <div className="message">
      <h1>Message Display</h1>
      <Condition/>
    </div>
    <h1>QUESTION4</h1>
    <div className="password">
    <h1>Registration Form</h1>
      <PasswordForm/>
    </div>
    <h1>QUESTION5</h1>
    <div className="drop">
      <SelectDropdown/>
    </div>
    <h1>QUESTION6</h1>
    <div className="todo">
    <h1>TO DO LIST</h1>
      <ToDoList/>
    </div>
    <h1>QUESTION7</h1>
    <div className="search">
    <h1>Search Filter</h1>
      <SearchFilter/>
    </div>
    <h1>QUESTION8</h1>
    <div className="converter">
      <h1> TemperatureConverter</h1>
      <TemperatureConverter/>
    </div>
    <div>
     <Sidebar/>
    </div>
    <h1>Question 9</h1>
    <div className="sidebar">
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleSidebar} />
      </div>
    <h1>Question 10</h1>
    <div className="validation">


      <FormWithValidation/>
    </div>
    <h1>Question 11</h1>

    <div className="modal">
     
      <ModalDialog   title="Modal Dialog" onSave={handleSave}>
      <p>Save data</p>
    </ModalDialog>
    </div>
    <h1>Question 12</h1>

    <div className="datatable">
      <DataTable/>
    </div>
    <h1>Question 13</h1>

    <div className="yup">
      <MyForm/>
    </div>
    <h1>Question 14</h1>

    <div className="new">
      <NewForm/>
    </div>
    
    </div>
  )
}
export default Assignment4;

