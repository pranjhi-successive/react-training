import React, { useState } from "react";
import "./a4.css"
import ControlledInput from "./question/question1/inputfield";
import ControlledForm from "./question/question2/form";
import Condition from "./question/question3/button";
import PasswordForm from "./question/question4/password";
import SelectDropdown from "./question/question5/dropdown";
import ToDoList from "./question/question6/todolist";
import SearchFilter from "./question/question7/search";
import TemperatureConverter from "./question/question8/temperature";

import Sidebar from "./question/question9/nav";
import FormWithValidation from "./question/question10/form";
import ModalDialog from "./question/question11/modal";
import DataTable from "./question/question12/table";
import MyForm from "./question/question13/yup";
import NewForm from "./question/question14/NewForm";

function Assignment4(){
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);}
  const handleSave = () => {
    console.log("Data saved successfully");

  }
  return(
    <div className="app">
      <h1>question1</h1>
    <div className="in">
      <h1>Controlled Input  for input field</h1>
      <ControlledInput/>
    </div>
    <h1>question2</h1>
    <div className="for">
     <h1>Controlled Form</h1>
     <ControlledForm/>
    </div>
    <h1>question3</h1>
    <div className="message">
      <h1>Message Display</h1>
      <Condition/>
    </div>
    <h1>question4</h1>
    <div className="password">
    <h1>Registration Form</h1>
      <PasswordForm/>
    </div>
    <h1>question5</h1>
    <div className="drop">
      <SelectDropdown/>
    </div>
    <h1>question6</h1>
    <div className="todo">
    <h1>TO DO LIST</h1>
      <ToDoList/>
    </div>
    <h1>question7</h1>
    <div className="search">
    <h1>Search Filter</h1>
      <SearchFilter/>
    </div>
    <h1>question8</h1>
    <div className="converter">
      <h1> TemperatureConverter</h1>
      <TemperatureConverter/>
    </div>
    <div>
     <Sidebar/>
    </div>
    <h1>question 9</h1>
    <div className="sidebar">
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleSidebar} />
      </div>
    <h1>question 10</h1>
    <div className="validation">


      <FormWithValidation/>
    </div>
    <h1>question 11</h1>

    <div className="modal">
     
      <ModalDialog   title="Modal Dialog" onSave={handleSave}>
      <p>Save data</p>
    </ModalDialog>
    </div>
    <h1>question 12</h1>

    <div className="datatable">
      <DataTable/>
    </div>
    <h1>question 13</h1>

    <div className="yup">
      <MyForm/>
    </div>
    <h1>question 14</h1>

    <div className="new">
      <NewForm/>
    </div>
    
    </div>
  )
}
export default Assignment4;

