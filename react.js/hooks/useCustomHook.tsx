import React, { useState, useEffect } from "react";
import axios from "axios";

// Add the interface shape for each Pokemon.
interface Pokemon {
    name: string;
    url: string;
}

// Create an array response interface for data state and Axios.
interface PokemonListResponse {
    results: Pokemon[];
}

// Create a return array for the hook itself.
interface UseCustomHookResult {
    data: PokemonListResponse | null;
    loading: boolean;
    error: string | null;
}

export const useCustomHook = (url: string): UseCustomHookResult => {
    // 1. Create data state to store the data from the API.
    const [data, setData] = useState<PokemonListResponse | null>(
        null,
    );
    // 2. Keep track of the loading status with another state variable.
    const [loading, setLoading] = useState<boolean>(true);
    // 3. Set state to check for errors.
    const [error, setError] = useState<string | null>(null);

    // 4. Begin the useEffect hook to retrieve the data.
    // Remember you need an asynchronous function.
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 5. First get the full response using Axios.
                const response = await axios.get<PokemonListResponse>(
                    url,
                );
                // 6. Set the data state
                setData(response.data);
                // 7. `catch (error) {}` and set it to the error state.
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        // 8. Run the async function.
        fetchData();
        // 9. Make sure (url) is the dependency received to use the effect.
    }, [url]);

    // 10. As this is a hook you need to return the data.
    return { data, loading, error };
};

/*** ----------------------------------------------------------- ***/
export const PokemonList: React.FC = () => {
    const { data, loading, error } = useCustomHook(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
    );

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!data) {
        return <p>No data.</p>;
    }

    return (
        <div>
            <h2>Pokémon List</h2>
            <ul>
                {data.results.map(pokemon => (
                    <li key={pokemon.name}>
                        <a
                            href={pokemon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {pokemon.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
