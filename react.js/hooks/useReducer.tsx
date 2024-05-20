import React, { useReducer } from "react";

// Define the initial state and action types
interface State {
    count: number;
}

type Action = { type: "increment" } | { type: "decrement" };

// Reducer function
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

// Component
const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
        </div>
    );
};

export default Counter;
