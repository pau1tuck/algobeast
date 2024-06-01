import React, { useState, useMemo } from "react";

interface User {
    id: number;
    name: string;
}

const allUsers: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    // Imagine there are many more users...
];

const UserList = () => {
    const [search, setSearch] = useState("");
    const filteredUsers = useMemo(() => {
        return allUsers.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()),
        );
    }, [search]); // useMemo memoizes the result of a function
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search users"
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

const factorial = (number: number) => {
    if (number <= 0) {
        return "Number should be a positive value.";
    } else if (number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
export function CounterFactorial() {
    const [count, setCount] = useState<number>(0);
    const [number, setNumber] = useState<number>(1);
    const factorial = useMemo(() => factorial(number), [number]);
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Factorial: {factorial}</h2>
            <input
                type="number"
                value={number}
                onClick={() => setNumber(number + 1)}
            /> </>
    );
}
