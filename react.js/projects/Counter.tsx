import React, { useState, useEffect, FunctionComponent } from "react";

const Counter: FunctionComponent = () => {
    const [count, setCount] = useState<number>(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount !== null ? Number(savedCount) : 0;
    });

    const increment = () => {
        setCount((prevCount: number) =>
            prevCount < 5 ? prevCount + 1 : prevCount,
        );
    };

    const decrement = () => {
        setCount((prevCount: number) =>
            prevCount > 0 ? prevCount - 1 : 0,
        );
    };

    const reset = () => {
        setCount(0);
    };

    useEffect(() => {
        localStorage.setItem("count", count.toString());
        document.title = `Count: ${count}`;

        return () => {
            document.title = "React App";
        };
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
