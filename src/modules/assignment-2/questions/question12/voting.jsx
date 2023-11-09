import React, { useReducer } from "react";

const initial = {
  RED: 0,
  BLUE: 0,
  GREEN: 0,
  BLACK: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "VOTE_RED":
      return {
        ...state,
        RED: state.RED + 1,
      };
    case "VOTE_BLUE":
      return {
        ...state,
        BLUE: state.BLUE + 1,
      };
    case "VOTE_GREEN":
      return {
        ...state,
        GREEN: state.GREEN + 1,
      };
    case "VOTE_BLACK":
      return {
        ...state,
        BLACK: state.BLACK + 1,
      };
    default:
      return state;
  }
};

const Voting=()=> {
  const [state, dispatch] = useReducer(reducer, initial);

  const vote = (option) => {
    dispatch({ type: `VOTE_${option}` });
  };

  return (
    <div>
      <h1>Voting</h1>
      <div className="options">
        <div>
          <button onClick={() => vote("RED")}>RED</button>
          <span>{state.RED}</span>
        </div>
        <div>
          <button onClick={() => vote("BLUE")}>BLUE</button>
          <span>{state.BLUE}</span>
        </div>
        <div>
          <button onClick={() => vote("GREEN")}>GREEN</button>
          <span>{state.GREEN}</span>
        </div>
        <div>
          <button onClick={() => vote("BLACK")}>BLACK</button>
          <span>{state.BLACK}</span>
        </div>
      </div>
    </div>
  );
}

export default Voting;
