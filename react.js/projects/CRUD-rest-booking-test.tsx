import React from "react";
import {
    render,
    screen,
    waitFor,
    fireEvent,
} from "@testing-library/react";
import axios from "axios";
import {
    ReservationList,
    ReservationDetail,
    CreateReservation,
    EditReservation,
    DeleteReservation,
} from "./CRUD-rest-booking"; // Modify the import path
import "@testing-library/jest-dom/extend-expect";

// Mock the axios module
jest.mock("axios");

describe("<ReservationList />", () => {
    test("should render list of reservations", async () => {
        // Mock the get request
        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: [
                {
                    _id: "1",
                    name: "John Doe",
                    datetime: new Date(),
                    numOfGuests: 3,
                    createdAt: new Date().toString(),
                },
            ],
        });

        render(<ReservationList />);

        // Wait for the promise to resolve
        await waitFor(() => screen.getByText("John Doe"));
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
});

describe("<ReservationDetail />", () => {
    test("should render reservation detail", async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: {
                _id: "1",
                name: "John Doe",
                datetime: new Date(),
                numOfGuests: 3,
                createdAt: new Date().toString(),
            },
        });

        render(<ReservationDetail id="1" />);

        await waitFor(() => screen.getByText("John Doe"));
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
});

describe("<CreateReservation />", () => {
    test("should call API on create", async () => {
        const mockPost = (
            axios.post as jest.Mock
        ).mockResolvedValueOnce({});
        render(<CreateReservation />);

        fireEvent.click(screen.getByText("Create"));

        await waitFor(() => {
            expect(mockPost).toHaveBeenCalledTimes(1);
        });
    });
});

describe("<EditReservation />", () => {
    test("should render reservation data in form and call API on update", async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: {
                _id: "1",
                name: "John Doe",
                datetime: new Date(),
                numOfGuests: 3,
                createdAt: new Date().toString(),
            },
        });

        const mockPut = (
            axios.put as jest.Mock
        ).mockResolvedValueOnce({});

        render(<EditReservation id="1" />);

        await waitFor(() => screen.getByValue("John Doe"));

        fireEvent.change(screen.getByLabelText("Name:"), {
            target: { value: "Jane Doe" },
        });
        fireEvent.click(screen.getByText("Update"));

        await waitFor(() => {
            expect(mockPut).toHaveBeenCalledWith(
                expect.stringContaining("1"),
                expect.objectContaining({
                    name: "Jane Doe",
                }),
            );
        });
    });
});

describe("<DeleteReservation />", () => {
    test("should call API on delete", async () => {
        const mockDelete = (
            axios.delete as jest.Mock
        ).mockResolvedValueOnce({});
        render(<DeleteReservation id="1" />);

        fireEvent.click(screen.getByText("Delete"));

        await waitFor(() => {
            expect(mockDelete).toHaveBeenCalledTimes(1);
        });
    });
});
