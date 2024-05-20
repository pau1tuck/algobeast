import React, { useRef, useEffect } from "react";

const FocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocusClick = () => {
        // check if the current property is not null before trying to access its focus method
        inputRef.current?.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocusClick}>Focus on Input</button>
        </div>
    );
};

/*** ---------------------------------------- ***/

interface Props {
    count: number;
}
const PreviousValueTracker: React.FC<Props> = ({ count }) => {
    const previousCountRef = useRef<number>();

    useEffect(() => {
        previousCountRef.current = count;
    }, [count]);

    return (
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {previousCountRef.current}</p>
        </div>
    );
};

/*** ------------------------------------------ ***/

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Assuming videojs is available globally
        const player = videojs(videoRef.current);

        // Perform any setup or event binding you'd like here

        return () => {
            // It's important to dispose of the player on unmount to free up resources
            player.dispose();
        };
    }, []);

    return (
        <div>
            <video ref={videoRef} className="video-js">
                <source src="path_to_video.mp4" type="video/mp4" />
            </video>
            <button onClick={() => videoRef.current?.play()}>
                Play
            </button>
            <button onClick={() => videoRef.current?.pause()}>
                Pause
            </button>
        </div>
    );
};
