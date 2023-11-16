import React from "react";
import FetchUrl from "./question/question1/Fetch";
import MyComponent from "./question/question4/Task4";
import Task51 from "./question/question5/Task5";
import Task6 from "./question/question6/Task6";
import Task7 from "./question/question7/Task7";

import "./a5.css";
import Task3 from "./question/question3/Task3";
import Task2 from "./question/question2/Task2";
import Task8 from "./question/question8/Task8";
import Task9 from "./question/question9/Task9";
import Task12 from "./question/question12/Task12";
import Task13 from "./question/question13/Task13";
import ProtectedComponent from "./question/question14/ProtectedComponent";
import Task15 from "./question/question15/Task15";
import Task16 from "./question/question16/Task16";


const Assignment5 = () => {
  return (
    <div className="App">
      <h1>question1</h1>
      <div className="fetch1">
        <FetchUrl />
      </div>
      <h1>question 2</h1>
      <div className="task2">
        <Task2 />
      </div>

      <h1>question 3</h1>
      <div className="task3">
        <Task3 />
      </div>
      <h1>question 4</h1>

      <div className="compo">
        <MyComponent />
      </div>
      <h1>question 5</h1>

      <div className="task5">
        <Task51 />
      </div>
      <h1>question 6</h1>
      <div className="task6">
        <Task6 />
      </div>
      <h1>question 7</h1>
      <div className="task7">
        <Task7 />
      </div>
      <h1>question 8</h1>
      <div className="task8">
        <Task8 />
      </div>
      <h1>question 9</h1>
      <div>
        <Task9 />
      </div>
      <h1>question 12</h1>
      <div className="task12">
        <Task12 />
      </div>
      <h1>question 13</h1>

      <div className="task13">
        <Task13/>
      </div>
      <h1>question 14</h1>
      <div className="task14">
        <ProtectedComponent/>
      </div>
      <h1>question15</h1>
      <div className="task15">
        <Task15/>
      </div>
      <h1>question 16</h1>
      <div className="task16">
        <Task16/>
      </div>
    </div>
  );
};
export default Assignment5;

