import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import ShortUniqueId from "short-unique-id";

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonListResponse {
    results: Pokemon[];
}

const uid = new ShortUniqueId({ length: 8 });
const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

export const PokemonTable: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // AXIOS
                const responseAxios =
                    await axios.get<PokemonListResponse>(url);
                setPokemons(responseAxios.data.results);
                // FETCH
                const responseFetch = await fetch(url);
                if (!responseFetch.ok) {
                    throw new Error(
                        `Network status: ${responseFetch.status}`,
                    );
                }
                const data =
                    (await responseFetch.json()) as PokemonListResponse;
                setPokemons(data.results);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Details Link</th>
                </tr>
            </thead>
            <tbody>
                {pokemons.map((pokemon, i) => (
                    <tr key={uid.randomUUID()}>
                        <td>{pokemon.name}</td>
                        <td>
                            <a
                                href={pokemon.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Details
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
