import React, { useState, FC } from "react";

interface DisplayProps {
    value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => (
    <div className="display">{value}</div>
);

/*** ----------------------------------------- ***/
interface ButtonProps {
    label: string;
    onClick: (label: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
    <button className="btn" onClick={() => onClick(label)}>
        {label}
    </button>
);

/*** ----------------------------------------- ***/
const App: FC = () => {
    // Define states with types.
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const handleButtonClick = (value: string) => {
        // If the "=" button is clicked
        if (value === "=") {
            // Try to evaluate the expression entered by the user
            try {
                // Use eval() to evaluate the string in 'input' as a mathematical expression.
                // For instance, if input is "3+4", eval will return 7.
                setOutput(String(eval(input)));

                // Clear the input after evaluation
                setInput("");
            } catch {
                // If there's an error during evaluation (e.g., the user entered something like "3+*"),
                // show an "Error" message
                setOutput("Error");

                // And clear the input
                setInput("");
            }

            // If the "C" (clear) button is clicked
        } else if (value === "C") {
            // Clear both the input and output
            setInput("");
            setOutput("");
        } else {
            // For any other button (numbers or operators like +, -, *, /),
            // append its value to the current input
            setInput(prev => prev + value);
        }
    };

    return (
        <div className="app">
            <Display value={input || output} />
            <div className="buttons">
                {[
                    "1",
                    "2",
                    "3",
                    "+",
                    "4",
                    "5",
                    "6",
                    "-",
                    "7",
                    "8",
                    "9",
                    "*",
                    "0",
                    "C",
                    "=",
                    "/",
                ].map(key => (
                    <Button
                        key={key}
                        label={key}
                        onClick={handleButtonClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;

/*** ----------------------------------------- ***/
