// ========================== Import Necessary Libraries ==========================
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// ========================== Define TypeScript Types and Interfaces ==========================
interface CounterState {
  count: number;
}
// ========================== Create Redux Slice with createSlice ==========================
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 } as CounterState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    }
  },
});
// Destructure and export the action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// ========================== Configure Store ==========================
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
// Define RootState type based on the store's reducer
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
// ========================== React Component using Redux Toolkit ==========================
const Counter: React.FC = () => {
  // Use Redux hooks to dispatch actions and select state
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
};
// ========================== Render the Application with Provider ==========================
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);