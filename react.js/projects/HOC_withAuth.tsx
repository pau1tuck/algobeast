import React, { useState, useEffect } from "react";

function withAuth(WrappedComponent) {
    return function WithAuth(props) {
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        useEffect(() => {
            // Check if the user is logged in
            const isLoggedIn = true; // Replace with actual authentication logic
            setIsLoggedIn(isLoggedIn);
        }, []);
        if (!isLoggedIn) {
            return (
                <p>You must be logged in to access this content.</p>
            );
        }
        return <WrappedComponent {...props} />;
    };
}
function MyComponent() {
    return (
        <p>This is protected content that requires authentication.</p>
    );
}
export default withAuth(MyComponent);
