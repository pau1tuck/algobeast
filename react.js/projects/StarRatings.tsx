import React, { useState, FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { FaStar } from "react-icons/fa";

const createArray = (length: number) =>
    [...Array(length)].map(() => 0); // [0,0,0,0,0]

const Star = ({ selected = false, onSelect }): JSX.Element => {
    return (
        <FaStar
            color={selected ? "yellow" : "gray"}
            onClick={onSelect}
        />
    );
};

interface StarRatingProps {
    totalStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({
    totalStars = 5,
}: {
    totalStars: number;
}) => {
    const [selectedStars, setSelectedStars] = useState<number>(0);
    return (
        <>
            {createArray(totalStars).map(
                (
                    // Be careful with bracket syntax!
                    star,
                    index,
                ) => (
                    <Star
                        key={index}
                        selected={selectedStars > index}
                        onSelect={() => setSelectedStars(index + 1)}
                    />
                ),
            )}
            <p>
                {selectedStars} of {totalStars} stars selected.
            </p>
        </>
    );
};

const App = () => {
    return <StarRating totalStars={5} />;
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
