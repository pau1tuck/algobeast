import React, { useState, useEffect, useCallback, FC } from "react";

/*** -------------------------------- ***/
export const useWindowWidth = (): number => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this useEffect runs once when the component mounts, and the return function runs when it unmounts
    return windowWidth;
};

function App() {
    const width = useWindowWidth();

    return (
        <div>
            <h1>Window Width: {width}px</h1>
        </div>
    );
}

/*** -------------------------------- ***/
interface AsyncState<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
}

export const useAsync = (
    asyncCallback: () => Promise<T>,
    dependencies: any[] = [],
): AsyncState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const execute = useCallback(() => {
        setIsLoading(true);
        setData(null);
        setError(null);

        asyncCallback()
            .then(response => setData(response))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, [asyncCallback, ...dependencies]);

    useEffect(() => {
        execute();
    }, [execute]);

    return { isLoading, data, error };
};
// USAGE
export const ExampleComponent: FC = () => {
    const { data, error, isLoading } = useAsync(() =>
        fetch("/api/data").then(res => res.json()),
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};
