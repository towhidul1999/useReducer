import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type == "INCREAMENT") {
      return state + 1;
    } else if (action.type == "DECREAMENT") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INCREAMENT" })}>
        Increamment
      </button>
      <button onClick={() => dispatch({ type: "DECREAMENT" })}>
        Decreamment
      </button>
    </div>
  );
}
