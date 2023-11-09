
import React, { Suspense, lazy } from 'react';

const About = lazy(() => import('../../../assignment-3/questions/question3/About'));
const Home1 = lazy(() => import('../../../assignment-3/questions/question3/Home1'));

const Task1=()=> {
  return (
   <div>
      <Suspense fallback={<div>Loading Please wait...</div>}>
        <Home1/>

        <About />
    
      </Suspense>
      </div>
 
  );
}

export default Task1;
