import React, {
    useReducer,
    createContext,
    useContext,
    ReactNode,
} from "react";
import ReactDOM from "react-dom";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

type Action =
    | { type: typeof INCREMENT }
    | { type: typeof DECREMENT }
    | { type: typeof RESET };

type State = {
    count: number;
};
const initialState: State = { count: 0 };
const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { ...state, count: initialState.count };
        default:
            throw new Error(`Unhandled action: ${action.type}`);
    }
};
type CounterContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};
type CounterProviderProps = {
    children: ReactNode;
};
const CounterContext = createContext<CounterContextType | undefined>(
    undefined,
);
export const CounterProvider: React.FC<CounterProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(
        counterReducer,
        initialState,
    );
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};
export const useCounter = (): CounterContextType => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error(
            "useCounter() hook must be called within <CounterProvider>",
        );
    }
    return context;
};
export const Counter: React.FC = () => {
    const { state, dispatch } = useCounter();

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: INCREMENT })}>
                +
            </button>
            <button onClick={() => dispatch({ type: DECREMENT })}>
                -
            </button>
            <button onClick={() => dispatch({ type: RESET })}>
                Reset
            </button>
        </div>
    );
};
const App: React.FC = () => {
    return (
        <CounterProvider>
            <Counter />
        </CounterProvider>
    );
};
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
