import React, { useEffect, useState } from "react";
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

const API = "http://localhost:5000/api/reservations/";

// ReservationList.tsx
export const ReservationList: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>(
        [],
    );

    useEffect(() => {
        const fetchReservations = async () => {
            const response = await axios.get(API);
            setReservations(response.data);
        };

        fetchReservations();
    }, []);

    return (
        <div>
            <h2>Reservations</h2>
            <ul>
                {reservations.map((res, i: number) => (
                    <li key={i}>
                        <a href={`/reservations/${res._id}`}>
                            {res.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

interface Props {
    id: string;
}

// ReservationDetail.tsx
export const ReservationDetail: React.FC<Props> = ({ id }) => {
    const [reservation, setReservation] =
        useState<Reservation | null>(null);

    useEffect(() => {
        const fetchReservation = async () => {
            const response = await axios.get(API + id);
            setReservation(response.data);
        };

        fetchReservation();
    }, [id]);

    return (
        <div>
            {reservation && (
                <>
                    <h2>{reservation.name}</h2>
                    {/* Display other reservation details here... */}
                    <button type="button">Edit</button>
                </>
            )}
        </div>
    );
};

// CreateReservation.tsx
export const CreateReservation: React.FC = () => {
    const [reservation, setReservation] =
        useState<Reservation | null>(null);
    const [name, setName] = useState("");
    const [datetime, setDatetime] = useState<Date | null>(null);
    // ... other fields ...

    const handleCreate = async () => {
        try {
            const newReservation = {
                name,
                datetime,
                // ... other fields ...
            };

            await axios.post(
                "http://localhost:5000/api/reservations",
                newReservation,
            );
            alert("Reservation created!");
        } catch (error) {
            console.error("Error creating reservation:", error);
        }
    };

    return (
        <div>
            {/* Render the form for creating a new reservation... */}
            <button type="button" onClick={handleCreate}>
                Create
            </button>
        </div>
    );
};

// EditReservation.tsx
export const EditReservation: React.FC<Props> = ({ id }) => {
    const [reservation, setReservation] =
        useState<Reservation | null>(null);
    // Add other state variables for the form...

    useEffect(() => {
        const fetchReservation = async () => {
            const response = await axios.get(API + id);
            setReservation(response.data);
        };

        fetchReservation();
    }, [id]);

    const handleUpdate = async () => {
        if (reservation) {
            const updatedReservation = {
                datetime: reservation.datetime,
                name: reservation.name,
                numOfGuests: reservation.numOfGuests,
                infants: reservation.infants,
                allergies: reservation.allergies,
            };

            try {
                await axios.put(URL + id, updatedReservation);
                alert("Reservation updated!");
            } catch (error) {
                console.error("Error updating reservation:", error);
            }
        }
    };
    return (
        <div>
            {reservation && (
                <>
                    <h2>Edit Reservation: {reservation.name}</h2>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            handleUpdate();
                        }}
                    >
                        <div>
                            <label>Name: </label>
                            <input
                                type="text"
                                value={String(reservation.name)}
                                onChange={e =>
                                    setReservation(prev => {
                                        if (prev) {
                                            return {
                                                ...prev,
                                                name: e.target.value,
                                            };
                                        }
                                        return null;
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label>Date & Time: </label>
                            <input
                                type="datetime-local"
                                value={new Date(reservation.datetime)
                                    .toISOString()
                                    .slice(0, 16)}
                                onChange={e =>
                                    setReservation(prev => {
                                        if (prev) {
                                            return {
                                                ...prev,
                                                dateTime:
                                                    e.target.value,
                                            };
                                        }
                                        return null;
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Number of Guests: </label>
                            <input
                                type="number"
                                value={String(
                                    reservation.numOfGuests,
                                )}
                                onChange={e =>
                                    setReservation(prev => {
                                        if (prev) {
                                            return {
                                                ...prev,
                                                numOfGuests:
                                                    +e.target.value, // + Convert string to number
                                            };
                                        }
                                        return null;
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Infants: </label>
                            <input
                                type="number"
                                value={String(reservation.infants)}
                                onChange={e =>
                                    setReservation(prev => {
                                        if (prev) {
                                            return {
                                                ...prev,
                                                infants:
                                                    +e.target.value,
                                            };
                                        }
                                        return null;
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Allergies: </label>
                            <input
                                type="text"
                                value={
                                    String(reservation.allergies) ||
                                    ""
                                }
                                onChange={e =>
                                    setReservation(prev => {
                                        if (prev) {
                                            return {
                                                ...prev,
                                                allergies:
                                                    e.target.value,
                                            };
                                        }
                                        return null;
                                    })
                                }
                            />
                        </div>
                        <button type="submit">Update</button>
                    </form>
                </>
            )}
        </div>
    );
};

// DeleteReservation.tsx
interface DeleteProps {
    id: string;
    onDeleteSuccess?: () => void; // Callback for successful deletion
}

export const DeleteReservation: React.FC<DeleteProps> = ({
    id,
    onDeleteSuccess,
}) => {
    const handleDelete = async () => {
        try {
            await axios.delete(API + id);
            alert("Reservation deleted!");
            // If we've been provided a callback for when deletion is successful, call it.
            if (onDeleteSuccess) onDeleteSuccess();
        } catch (error) {
            console.error("Error deleting reservation:", error);
        }
    };

    return (
        <div>
            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};
