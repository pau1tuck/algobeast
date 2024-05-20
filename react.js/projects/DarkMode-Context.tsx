import React, {
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";
import ReactDOM from "react-dom";

// 1. Use enum for themes
enum Theme {
    Light = "light",
    Dark = "dark",
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = React.createContext<
    ThemeContextType | undefined
>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>(Theme.Light);

    const toggleTheme = () => {
        setTheme(theme =>
            theme === Theme.Light ? Theme.Dark : Theme.Light,
        );
    };

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "useTheme() must be used inside a ThemeProvider",
        );
    }
    return context;
};

export const MyComponent: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <p>The current theme is {theme}.</p>
            <button type="button" onClick={toggleTheme}>
                Toggle theme
            </button>
        </div>
    );
};

// Assuming App component is somewhere in your project
const App: React.FC = () => <MyComponent />;

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <MyComponent /> {/*Below*/}
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);
