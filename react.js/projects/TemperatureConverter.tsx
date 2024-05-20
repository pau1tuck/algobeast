import React, { useState } from "react";

const TemperatureConverter: React.FC = () => {
    const [celsius, setCelsius] = useState<string>("");
    const [fahrenheit, setFahrenheit] = useState<string>("");

    const handleCelsiusChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.target.value;
        setCelsius(value);

        if (value) {
            const converted = (parseFloat(value) * 9) / 5 + 32;
            setFahrenheit(
                (Math.round(converted * 100) / 100).toString(),
            ); // Rounded to 2 decimal places
        } else {
            setFahrenheit("");
        }
    };

    const handleFahrenheitChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.target.value;
        setFahrenheit(value);

        if (value) {
            const converted = ((parseFloat(value) - 32) * 5) / 9;
            setCelsius(
                (Math.round(converted * 100) / 100).toString(),
            ); // Rounded to 2 decimal places
        } else {
            setCelsius("");
        }
    };

    return (
        <div>
            <label>
                Celsius:
                <input
                    type="number"
                    value={celsius}
                    onChange={handleCelsiusChange}
                />
            </label>
            <label>
                Fahrenheit:
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                />
            </label>
        </div>
    );
};

export default TemperatureConverter;
