import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, Dispatch } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import App from './App';
import store from './store';

// types.ts
// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export interface IncrementAction {
    type: typeof INCREMENT;
}
export interface DecrementAction {
    type: typeof DECREMENT;
}
export type CounterActionTypes = IncrementAction | DecrementAction;
// =====================================
// reducers/counterReducer.tsx
export interface CounterState {
    count: number;
}
const initialState: CounterState = {
    count: 0
};
export function counterReducer(
    state: CounterState = initialState,
    action: CounterActionTypes
): CounterState {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}
// ======================================
// store.ts
export interface RootState {
    counter: CounterState;
}
const rootReducer = combineReducers({
    counter: counterReducer
});
export const store = createStore(rootReducer);
// =======================================
// components/Counter.tsx
interface Props {
    count: number;
    increment: () => void;
    decrement: () => void;
}
const mapStateToProps = (state: RootState) => ({
    count: state.counter.count
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT })
});
const Counter: React.FC<Props> = ({ count, increment, decrement }) => (
    <div>
        <h2>Counter</h2>
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    </div>
);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// =========================================
// App.tsx or index.tsx
ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);


