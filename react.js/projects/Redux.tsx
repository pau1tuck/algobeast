import React from "react";
import { useDispatch, useSelector, Provider } from "react-redux";

// actionTypes.ts
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

import { createStore } from "redux";

// actions.ts
export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};

// counterReducer.ts
interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

type Action = { type: typeof INCREMENT } | { type: typeof DECREMENT };

const counterReducer = (
    state = initialState,
    action: Action,
): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

// store.ts
const store = createStore(counterReducer);

// Counter.tsx
interface RootState {
    count: number;
}

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    );
};

// App.tsx
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};
