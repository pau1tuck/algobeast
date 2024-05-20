import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data);
        });
    }, [url]);
    return data;
}
export function MyComponent() {
    const data = useFetch("https://my-api.com/my-data");
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
}
