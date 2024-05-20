import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { TodoList, TodoApp } from "./CRUD-rest-todo";

// 1. Testing TodoItem
// Note: TodoItem is not exported in the provided code, so we'll skip it and test it indirectly via TodoList

// 2. Testing TodoList
describe("TodoList", () => {
    it("renders todos", () => {
        const mockTodos = [
            { id: 1, title: "todo1", completed: false },
            { id: 2, title: "todo2", completed: true },
        ];

        const mockToggle = jest.fn();
        const mockDelete = jest.fn();

        render(
            <TodoList
                todos={mockTodos}
                onToggle={mockToggle}
                onDelete={mockDelete}
            />,
        );

        expect(screen.getByText("todo1")).toBeInTheDocument();
        expect(screen.getByText("todo2")).toBeInTheDocument();
    });

    it("handles todo toggle", () => {
        const mockTodos = [
            { id: 1, title: "todo1", completed: false },
        ];

        const mockToggle = jest.fn();
        const mockDelete = jest.fn();

        render(
            <TodoList
                todos={mockTodos}
                onToggle={mockToggle}
                onDelete={mockDelete}
            />,
        );

        fireEvent.click(
            screen.getByLabelText("", {
                selector: 'input[type="checkbox"]',
            }),
        );
        expect(mockToggle).toHaveBeenCalledWith(1);
    });

    it("handles delete", () => {
        const mockTodos = [
            { id: 1, title: "todo1", completed: false },
        ];

        const mockToggle = jest.fn();
        const mockDelete = jest.fn();

        render(
            <TodoList
                todos={mockTodos}
                onToggle={mockToggle}
                onDelete={mockDelete}
            />,
        );

        fireEvent.click(screen.getByText("Delete"));
        expect(mockDelete).toHaveBeenCalledWith(1);
    });
});

// 3. Testing TodoApp
describe("TodoApp", () => {
    it("allows user to add a todo", () => {
        render(<TodoApp />);

        userEvent.type(
            screen.getByPlaceholderText("Add new..."),
            "New Todo",
        );
        userEvent.click(screen.getByText("Add"));

        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    it("handles todo toggle", () => {
        render(<TodoApp />);

        userEvent.type(
            screen.getByPlaceholderText("Add new..."),
            "New Todo",
        );
        userEvent.click(screen.getByText("Add"));

        fireEvent.click(
            screen.getByLabelText("", {
                selector: 'input[type="checkbox"]',
            }),
        );
        expect(screen.getByText("New Todo")).toHaveClass("completed");
    });

    it("handles todo delete", () => {
        render(<TodoApp />);

        userEvent.type(
            screen.getByPlaceholderText("Add new..."),
            "New Todo",
        );
        userEvent.click(screen.getByText("Add"));

        fireEvent.click(screen.getByText("Delete"));
        expect(
            screen.queryByText("New Todo"),
        ).not.toBeInTheDocument();
    });
});

// Note: Since TodoAddForm is an internal component used by TodoApp, we are indirectly testing it through TodoApp tests.
