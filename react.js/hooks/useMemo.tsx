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
