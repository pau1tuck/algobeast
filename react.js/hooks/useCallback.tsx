import React, { useState, useCallback, FC } from "react";

type Item = {
    id: number;
    name: string;
    email: string;
};
interface SearchableListProps {
    items: Item[];
}
const SearchableList: FC<SearchableListProps> = ({ items }) => {
    const [query, setQuery] = useState<string>("");
    const handleSearch = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value);
        },
        [], // useCallback memoizes the entire function
    );
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()),
    );
    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
            />
            <ul>
                {filteredItems.map(item => (
                    <>
                        <li key={item.id}>{item.name}</li>
                        <li key={item.id}>{item.email}</li>
                    </>
                ))}
            </ul>
        </div>
    );
};
export default SearchableList;
