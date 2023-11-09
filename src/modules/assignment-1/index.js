import React from 'react';

import Greeting from './questions/question1/greeting';
import UserCard from './questions/question2/usercard';
import Weather from './questions/question3/weather';
import Counter from './questions/question4/Counter';
import TaskList from './questions/question5/tasklist';
import Button from './questions/question6/button';

const Assignment1 = () => {
  const tasks = ['Sleep', 'Eat', 'Code', 'Repeat'];
  return (
    <div className="App">
      <h1>Question1</h1>
      <Greeting />

      <h1>Question 2</h1>
      <div className='user-card'>
        <UserCard
          name="Doremon"
          email="doremon12@gmail.com"
          avatarURL="https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg"
        />
        <UserCard
          name="Shinchan"
          email="shinchan22@gmail.com"
          avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz-dClZM9plAFDmRBZyBQP759dl3E5KPSpw&usqp=CAU"
        />
        <UserCard
          name="Mr Bean"
          email="mrbean123@gmail.com"
          avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGwbLXIOSMndQIA4EpYXdHRXBjCx9IqDJ4w&usqp=CAU" />
      </div>
      <h1>Question 3</h1>
      <div className='weather'>
        <Weather
          temperature={26} />
        <Weather
          temperature={5} />
        <Weather
          temperature={17} />

      </div>
      <h1>Question 4</h1>
      <div className='counter'>
        <Counter />
      </div>
      <h1> Question 5</h1>

      <div className='tasklist'>
        <TaskList tasks={tasks} />
      </div>
      <h1>Question 6</h1>
      <div>
        <Button text=" Primary Button" color="blue" />
        <Button text="Secondary Button" color="green" />
        <Button text="Danger Button" color="red" />
      </div>
    </div>
  );
}

export default Assignment1;
