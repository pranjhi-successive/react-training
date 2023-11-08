import React from "react";
import FetchUrl from "./Question/question1/Fetch";
import MyComponent from "./Question/question4/Task4";
import Task51 from "./Question/question5/Task5";
import Task6 from "./Question/question6/Task6";
import Task7 from "./Question/question7/Task7";

import "./a5.css";
import Task3 from "./Question/question3/Task3";
import Task2 from "./Question/question2/Task2";
import Task8 from "./Question/question8/Task8";
import Task9 from "./Question/question9/Task9";
import Task12 from "./Question/question12/Task12";
import Task13 from "./Question/question13/Task13";
import ProtectedComponent from "./Question/question14/ProtectedComponent";
import Task15 from "./Question/question15/Task15";
import Task16 from "./Question/question16/Task16";


const Assignment5 = () => {
  return (
    <div className="App">
      <h1>Question1</h1>
      <div className="fetch1">
        <FetchUrl />
      </div>
      <h1>Question 2</h1>
      <div className="task2">
        <Task2 />
      </div>

      <h1>Question 3</h1>
      <div className="task3">
        <Task3 />
      </div>
      <h1>Question 4</h1>

      <div className="compo">
        <MyComponent />
      </div>
      <h1>Question 5</h1>

      <div className="task5">
        <Task51 />
      </div>
      <h1>Question 6</h1>
      <div className="task6">
        <Task6 />
      </div>
      <h1>Question 7</h1>
      <div className="task7">
        <Task7 />
      </div>
      <h1>Question 8</h1>
      <div className="task8">
        <Task8 />
      </div>
      <h1>Question 9</h1>
      <div>
        <Task9 />
      </div>
      <h1>Question 12</h1>
      <div className="task12">
        <Task12 />
      </div>
      <h1>Question 13</h1>

      <div className="task13">
        <Task13/>
      </div>
      <h1>Question 14</h1>
      <div className="task14">
        <ProtectedComponent/>
      </div>
      <h1>Question15</h1>
      <div className="task15">
        <Task15/>
      </div>
      <h1>Question 16</h1>
      <div className="task16">
        <Task16/>
      </div>
    </div>
  );
};
export default Assignment5;

