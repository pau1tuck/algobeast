// api.ts
import React, { ComponentType, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
});

// Login.tsx
const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await api.post("/user/login", {
                username,
                password,
            });
            const token = response.data.token;
            localStorage.setItem("jwt", token);
        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <div>
            <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
};

// withAuth.tsx

const withAuth = <P extends object>(
    WrappedComponent: ComponentType<P>,
) => {
    return (props: P) => {
        const [isAuthenticated, setIsAuthenticated] = useState<
            boolean | null
        >(null);

        const navigate = useNavigate();

        useEffect(() => {
            const checkAuth = async () => {
                const token = localStorage.getItem("jwt");
                if (!token) {
                    setIsAuthenticated(false);
                    return;
                }

                try {
                    await api.get("/user/check-auth", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setIsAuthenticated(true);
                } catch (error) {
                    setIsAuthenticated(false);
                }
            };

            checkAuth();
        }, []);

        if (isAuthenticated === null) {
            return <p>Checking authentication...</p>; // Or return a loader/spinner
        }

        if (!isAuthenticated) {
            navigate("/login");
            return null; // or return <></> for an empty fragment
        }

        return <WrappedComponent {...props} />;
    };
};

/*** Protected Component ***/
const SomeProtectedComponent: React.FC = () => {
    return <div>This is a protected component</div>;
};

export default withAuth(SomeProtectedComponent);
