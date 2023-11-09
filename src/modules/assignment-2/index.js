import React from "react";

import "./a2.css";
import Counter from "./questions/question1/counter";
import PersonForm from "./questions/question2/personform";
import ToDoList from "./questions/question3/todolist";
import RandomNumberGenerator from "./questions/question4/randomnumbergenerator";
import CounterWithStep from "./questions/question5/counterwithstep";
import Clock from "./questions/question6/clock";
import Notification from "./questions/Question7/notification";
import Slideshow from "./questions/question8/slideshow";
import CountdownTimer from "./questions/question19/countdowntimer";

import Button from "./questions/question9/themeswitch";
import { LanguageProvider } from "./questions/question10/languagecontext";
import {
  Content,
  LanguageSwitcher,
} from "./questions/question10/languageswitch";
import { CartProvider } from "./questions/question11/cartcontext";
import Product from "./questions/question11/products";
import ShoppingCart from "./questions/question11/shopping";
import Voting from "./questions/question12/voting";
import Parent from "./questions/question13/parent";
import Task from "./questions/question14/task";
import StudentList from "./questions/question15/studentlist";
import EmployeeSalary from "./questions/question16/employeesalary";
import CopyToClipboardButton from "./questions/question17/clipboard";
import UserPreferences from "./questions/question18/useLocalStorage";
import { ThemeProvider } from "./questions/question9/themeContext";
const Assignment2=()=> {
  const tasks = [
    { id: 1, title: 'SLEEPING' },
    { id: 2, title: 'EATING' },
    { id: 3, title: 'STUDING ' },
  ];
  return (
    <div className="App">
      <h1>Question 1</h1>
      <div className="counter">
        <Counter />
      </div>
      <h1>Question2</h1>
      <div className="personform">
        <h1>Person Information Form</h1>
        <PersonForm />
      </div>
      <h1>Question3</h1>
      <div className="todolist">
        <ToDoList />
      </div>
      <h1>Question4</h1>
      <div className="random-number-generator">
        <RandomNumberGenerator />
      </div>
      <h1>Question5</h1>
      <div className="step-counter">
        <CounterWithStep />
      </div>
      <h1>Question6</h1>
      <div className="clock">
        <Clock />
      </div>
      <h1>Question 7</h1>
      <div className="notification">
        <Notification />
      </div>
      <h1>Question 8</h1>
      <div>
        <Slideshow />
      </div>
      <h1>Question 9</h1>
      <div className="themes">
        <h1>Enable Dark Mode</h1>
        <ThemeProvider>
        <Button />
        </ThemeProvider>
      </div>
      <h1>Question 10</h1>
      <LanguageProvider>
        <div className="language">
          <h1>switch your language</h1>
          <LanguageSwitcher />
          <Content />
        </div>
      </LanguageProvider>
      <h1>Question 11</h1>
      <CartProvider>
        <div className="shopping">
          <h1>Shopping Cart</h1>
          <Product product={{ id: 1, name: "Apple", price: 100 }} />
          <Product product={{ id: 2, name: "Orange", price: 200 }} />
          <Product product={{ id: 3, name: "Banana", price: 300 }} />
          <ShoppingCart />
        </div>
      </CartProvider>
      <h1>Question 12</h1>
      <div className="vote">
        <Voting />
      </div>
      <h1>  Question 13</h1>
      <div className="parent">
        <Parent/>
      </div>
      <h1>Question 14</h1>
      <div className="task">
        <Task tasks={tasks}/>
      </div>
      <h1>Question 15</h1>
      <div className="studentlist">

      <StudentList/>
      </div>
      <h1>Question 16</h1>
      <div className="salary">
        <EmployeeSalary/>
      </div>
      <h1>Question 17</h1>
     <div className="copy">
     <CopyToClipboardButton  text={`The React motto is" Learn once, write anywhere. "`}/>
   
     </div>
     <h1>Question 18</h1>
     <div className="storage">
      <UserPreferences/>
     </div>
      <h1>Question 19</h1>
      <div className="countdowntimer">
        <CountdownTimer />
      </div>
      
    </div>
  );
}

export default Assignment2;
