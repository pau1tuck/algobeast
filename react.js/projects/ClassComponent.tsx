import React, { Component } from "react";

type State = {
    data: string[];
    newItem: string;
    isLoading: boolean;
    error: string | null;
};
class MyComponent extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            data: [],
            newItem: "",
            isLoading: false,
            error: null,
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        this.setState({ isLoading: true });
        try {
            const response = await fetch("http://localhost:5000/api");
            const data = await response.json();

            this.setState({ data, isLoading: false });
        } catch (error) {
            this.setState({ error: error.message, isLoading: false });
        }
    };
    handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        this.setState({ newItem: event.target.value });
    };

    handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        // Submit the new item to your server or handle it as needed
        // For this example, I'll simply add it to the current state's data
        const { newItem, data } = this.state;
        this.setState({ data: [...data, newItem], newItem: "" });
    };
    render() {
        const { data, newItem, isLoading, error } = this.state;

        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
            <div>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={newItem}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}
export default MyComponent;

/* LIFECYCLE METHODS */
/*** -------------------------------------- ***/
// Define the props and state types (assuming we're just using a basic state to showcase the lifecycle methods)
interface MyComponent1Props {
    message: string;
}

interface MyComponent1State {
    count: number;
}
class MyComponent1 extends React.Component<
    MyComponent1Props,
    MyComponent1State
> {
    // Constructor is the first method that runs when a component instance is created.
    constructor(props: MyComponent1Props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    // Runs after the component output has been rendered to the DOM.
    componentDidMount() {
        console.log("Component Did Mount!");
    }
    // Runs before the component receives new props or state.
    shouldComponentUpdate(
        nextProps: MyComponent1Props,
        nextState: MyComponent1State,
    ): boolean {
        console.log("Should Component Update?");
        return true; // Return false if you don't want to re-render on state or prop changes.
    }
    // Runs right before the DOM gets updated.
    getSnapshotBeforeUpdate(
        prevProps: MyComponent1Props,
        prevState: MyComponent1State,
    ): any {
        console.log("Get Snapshot Before Update");
        return null; // Return value will be passed to componentDidUpdate
    }
    // Runs after the component's updates are flushed to the DOM.
    componentDidUpdate(
        prevProps: MyComponent1Props,
        prevState: MyComponent1State,
        snapshot: any,
    ) {
        console.log("Component Did Update!");
    }
    // Runs right before the component gets destroyed.
    componentWillUnmount() {
        console.log("Component Will Unmount!");
    }
    // Renders the component to the DOM.
    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <p>Count: {this.state.count}</p>
                <button
                    onClick={() =>
                        this.setState(prevState => ({
                            count: prevState.count + 1,
                        }))
                    }
                >
                    Increase Count
                </button>
            </div>
        );
    }
}
