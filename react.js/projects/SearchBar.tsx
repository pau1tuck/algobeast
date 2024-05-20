import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

interface Reservation {
    _id?: String;
    datetime: Date;
    name: String;
    numOfGuests: Number;
    infants?: Number;
    allergies?: String;
    createdAt: String;
    updatedAt?: String;
}

/*** SimpleSearchBar.tsx ***/
/*** --------------------------------------------------------------------- */
interface SimpleSearchBarProps {
    onSearch: (searchTerm: string) => void;
}

export const SimpleSearchBar: React.FC<SimpleSearchBarProps> = ({
    onSearch,
}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="simple-search-bar">
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
};

/*** Simple Blog Component.tsx ***/
/*** --------------------------------------------------------------------- */

interface BlogPost {
    title: string;
    author: string;
    content: string;
}

const samplePosts: BlogPost[] = [
    {
        title: "React and its Magic",
        author: "John Doe",
        content:
            "React has been a revolutionary tool in the world of web development...",
    },
    {
        title: "Exploring the Mountains",
        author: "Jane Smith",
        content:
            "Mountains have always been a place of wonder for many...",
    },
    {
        title: "The Taste of Coffee",
        author: "Ella Brew",
        content:
            "There's nothing better than a cup of coffee to start your day...",
    },
];

export const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [posts, setPosts] = useState(samplePosts);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        if (term) {
            const filteredPosts = samplePosts.filter(post =>
                post.title.toLowerCase().includes(term.toLowerCase()),
            );
            setPosts(filteredPosts);
        } else {
            setPosts(samplePosts); // reset to all posts if search term is empty
        }
    };

    return (
        <div className="blog">
            <SimpleSearchBar onSearch={handleSearch} />
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <h3>{post.title}</h3>
                        <p>by {post.author}</p>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

/*** SearchSortFilterBar.tsx ***/
/*** --------------------------------------------------------------------- */
// Defining the properties/props that the SearchBar component expects to receive
interface SearchBarProps {
    // A function that gets triggered when the user searches
    onSearch: (searchTerm: string) => void;

    // A function that gets triggered when the user selects a sorting option
    onSort: (field: keyof Reservation) => void;

    // A function that gets triggered when the user toggles the visibility of a field
    onToggleField: (field: keyof Reservation) => void;

    // An object representing the visibility of fields (true for visible, false for hidden)
    activeFields: { [key in keyof Reservation]?: boolean };
}

export const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    onSort,
    onToggleField,
    activeFields,
}) => {
    return (
        <div>
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search by name..."
                // Trigger the onSearch function when the user types in the input
                onChange={e => onSearch(e.target.value)}
            />

            {/* Sorting Dropdown */}
            <select
                // Trigger the onSort function when the user selects a sorting option
                onChange={e =>
                    onSort(e.target.value as keyof Reservation)
                }
            >
                {/* Options to select which field to sort by */}
                <option value="name">Name</option>
                <option value="datetime">Date & Time</option>
                <option value="numOfGuests">Number of Guests</option>
                <option value="infants">Infants</option>
                <option value="allergies">Allergies</option>
                <option value="createdAt">Created At</option>
                <option value="updatedAt">Updated At</option>
            </select>

            {/* Map through the activeFields object to create a checkbox for each field */}
            {Object.keys(activeFields).map(field => (
                <div key={field}>
                    <input
                        type="checkbox"
                        // If a field is not defined in activeFields, default it to true (visible)
                        checked={
                            activeFields[
                                field as keyof Reservation
                            ] ?? true
                        }
                        // Trigger the onToggleField function when the user toggles the checkbox
                        onChange={() =>
                            onToggleField(field as keyof Reservation)
                        }
                    />
                    <label>{field}</label>
                </div>
            ))}
        </div>
    );
};

/*** ReservationList.tsx ***/
/*** --------------------------------------------------------------------- */
export const ReservationList: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>(
        [],
    );
    const [displayedReservations, setDisplayedReservations] =
        useState<Reservation[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] =
        useState<keyof Reservation>("name");
    const [activeFields, setActiveFields] = useState<{
        [key in keyof Reservation]?: boolean;
    }>({
        _id: true,
        name: true,
        datetime: true,
        numOfGuests: true,
        infants: true,
        allergies: true,
        createdAt: true,
        updatedAt: true,
    });

    useEffect(() => {
        const fetchReservations = async () => {
            const response = await axios.get(
                "http://localhost:5000/api",
            );
            setReservations(response.data);
        };

        fetchReservations();
    }, []);

    useEffect(() => {
        let filteredReservations = reservations;

        // Filter by name
        if (searchTerm) {
            filteredReservations = filteredReservations.filter(
                booking =>
                    booking.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
            );
        }

        // Sort
        filteredReservations = filteredReservations.sort((a, b) => {
            const aValue = a[sortField as keyof Reservation];
            const bValue = b[sortField as keyof Reservation];

            if (
                typeof aValue === "string" &&
                typeof bValue === "string"
            ) {
                return aValue.localeCompare(bValue);
            } else if (
                typeof aValue === "number" &&
                typeof bValue === "number"
            ) {
                return aValue - bValue;
            } else if (
                aValue instanceof Date &&
                bValue instanceof Date
            ) {
                return aValue.getTime() - bValue.getTime();
            }
            // If the values are undefined or of an unexpected type, don't change their order:
            return 0;
        });

        setDisplayedReservations(filteredReservations);
    }, [searchTerm, sortField, reservations]);

    return (
        <div>
            <h2>Reservations</h2>

            <SearchBar
                onSearch={setSearchTerm}
                onSort={setSortField}
                onToggleField={field => {
                    setActiveFields(prev => ({
                        ...prev,
                        [field]: !prev[field],
                    }));
                }}
                activeFields={activeFields}
            />

            <ul>
                {displayedReservations.map((res, i: number) => (
                    <li key={i}>
                        <a href={`/reservations/${res._id}`}>
                            {res.name}
                        </a>
                        <div>
                            {Object.keys(res).map(field =>
                                activeFields[
                                    field as keyof Reservation
                                ] ? (
                                    <span key={field}>
                                        {String(
                                            res[
                                                field as keyof Reservation
                                            ],
                                        )}
                                    </span>
                                ) : null,
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
