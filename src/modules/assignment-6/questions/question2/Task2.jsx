import React from "react";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Home1= lazy(() => import("../../../assignment-3/questions/question3/Home1"));

const Task2 = () => {
  return (
    <div>
      <ErrorBoundary
        fallback={
          <div>"Some error occured while loading the home component!"</div>
        }
      >
        <Home1 />
      </ErrorBoundary>
    </div>
  );
};

export default Task2;