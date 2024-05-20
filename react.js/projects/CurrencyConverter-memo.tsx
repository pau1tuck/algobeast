import React, {
    useState,
    useEffect,
    useMemo,
    useCallback,
} from "react";
import axios from "axios";

interface CurrencyData {
    [key: string]: number;
}

const CurrencyConverter: React.FC = () => {
    const [currencies, setCurrencies] = useState<string[]>([]);
    const [currencyData, setCurrencyData] = useState<CurrencyData>(
        {},
    );
    const [currencyFrom, setCurrencyFrom] = useState<string>("USD");
    const [currencyTo, setCurrencyTo] = useState<string>("EUR");
    const [amount, setAmount] = useState<number>(1);
    const [convertedValue, setConvertedValue] = useState<number>(0);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/currency/rates",
                );
                const data: CurrencyData = response.data;
                setCurrencies(Object.keys(data));
                setCurrencyData(data);
            } catch (error) {
                console.error(
                    "Failed to fetch currency data:",
                    error,
                );
            }
        };

        fetchCurrencyData();
    }, []);

    const conversionRate = useMemo(() => {
        if (currencyFrom === "USD") {
            return currencyData[currencyTo] || 0;
        } else {
            // Convert intermediary to USD first, then to target currency
            const rateToUSD = 1 / currencyData[currencyFrom];
            return rateToUSD * (currencyData[currencyTo] || 0);
        }
    }, [currencyData, currencyFrom, currencyTo]);

    useEffect(() => {
        setConvertedValue(amount * conversionRate);
    }, [amount, conversionRate]);

    const handleCurrencyFromChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            setCurrencyFrom(event.target.value);
        },
        [],
    );

    const handleCurrencyToChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            setCurrencyTo(event.target.value);
        },
        [],
    );

    const handleAmountChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(Number(event.target.value));
        },
        [],
    );

    return (
        <div>
            <select
                value={currencyFrom}
                onChange={handleCurrencyFromChange}
            >
                {currencies.map(currency => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

            <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
            />

            <select
                value={currencyTo}
                onChange={handleCurrencyToChange}
            >
                {currencies.map(currency => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

            <p>Converted Amount: {convertedValue}</p>
        </div>
    );
};

export default CurrencyConverter;
