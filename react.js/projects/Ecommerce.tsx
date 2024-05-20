import React, {
    useContext,
    useEffect,
    useReducer,
    useState,
    createContext,
} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

/*** FETCH_PRODUCTS.ts */
/* ----------------------------------------------------------------- */

// Fetches products from the API and returns the list.
export const fetchProducts = async () => {
    try {
        // Send request to fetch products
        const response = await axios.get(
            "http://localhost:5000/api/products",
        );

        // Return the products data
        return response.data;
    } catch (error) {
        // Throw an error if the fetching fails
        throw new Error(`Error fetching products: ${error}`);
    }
};

/*** PRODUCT_LIST.tsx */
/* ----------------------------------------------------------------- */

export const ProductList: React.FC = () => {
    // State to hold the complete list of products
    const [products, setProducts] = useState<Product[]>([]);

    // State to hold the filtered list of products (for search and sort operations)
    const [filteredProducts, setFilteredProducts] = useState<
        Product[]
    >([]);

    // Access the shopping cart state and actions from the global context
    const { state: shopState, addToCart } = useShop();

    // On initial render, fetch the list of products from the API
    useEffect(() => {
        const getProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts); // Store the fetched products in state
        };

        getProducts();
    }, []);

    // Whenever the products list updates, set it as the filtered list (default view)
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    // Handle search by filtering products based on user input
    const handleSearch = (searchTerm: string) => {
        setFilteredProducts(
            products.filter(
                product =>
                    product.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()), // Match product name with the search term
            ),
        );
    };

    // Handle the sorting of products based on the selected criteria
    const handleSort = (sortType: string) => {
        let sortedProducts = [...filteredProducts]; // Create a shallow copy for sorting
        switch (sortType) {
            case "price-asc": // Sort by price in ascending order
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-desc": // Sort by price in descending order
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case "name-asc": // Sort by product name in ascending order
                sortedProducts.sort((a, b) =>
                    a.name.localeCompare(b.name),
                );
                break;
            case "name-desc": // Sort by product name in descending order
                sortedProducts.sort((a, b) =>
                    b.name.localeCompare(a.name),
                );
                break;
            default:
                break;
        }
        setFilteredProducts(sortedProducts); // Update the filtered list with sorted products
    };

    // Render the product list UI
    return (
        <div>
            {/* Search bar for searching and sorting products */}
            <SearchBar onSearch={handleSearch} onSort={handleSort} />

            <div className="products-list">
                {filteredProducts.length ? (
                    filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="product-item"
                        >
                            <h2>{product.name}</h2>
                            <span>${product.price.toFixed(2)}</span>
                            {/* Button to add a product to the shopping cart */}
                            <button
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    // Display a message if no products match the search or filter criteria
                    <p>No products found!</p>
                )}
            </div>
        </div>
    );
};

/*** SHOPPING_CART.tsx */
/* ----------------------------------------------------------------- */

export const ShoppingCart: React.FC = () => {
    // Access the shopping cart state and actions from the global context
    const { state: shopState, removeFromCart } = useShop();

    return (
        <div>
            <h2>Your Cart</h2>

            {/* Render each item in the shopping cart */}
            <ul>
                {shopState.cart.map(cartItem => (
                    <li key={cartItem.id}>
                        {/* Display product name and price */}
                        <span>
                            {cartItem.name} - ${cartItem.price}
                        </span>

                        {/* Button to remove the item from the cart */}
                        <button
                            onClick={() => removeFromCart(cartItem)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            {/* Calculate and display the total cost of items in the cart */}
            <div>
                Total: $
                {shopState.cart
                    .reduce(
                        (total, product) =>
                            total + product.price * product.quantity, // Calculate the total for each item (price x quantity)
                        0,
                    )
                    .toFixed(2)}{" "}
                // Format to 2 decimal places for currency
            </div>

            {/* Button to proceed to the checkout process */}
            <button>Proceed to Checkout</button>
        </div>
    );
};

/*** APP.tsx */
/* ----------------------------------------------------------------- */

export const App = () => {
    return (
        // Providing the entire app with access to the shopping context
        <ShopProvider>
            {/* Setting up a Router for navigation */}
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1>Welcome to Paul's Shop!</h1>

                        {/* Navigation links */}
                        <nav>
                            <ul>
                                <li>
                                    {/* Link to the main shop page */}
                                    <Link to="/">Shop</Link>
                                </li>
                                <li>
                                    {/* Link to the shopping cart */}
                                    <Link to="/cart">Cart</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <main>
                        {/* Routes definition */}
                        <Routes>
                            {/* Route for the main shop page */}
                            <Route
                                path="/"
                                element={<ProductList />}
                            />
                            {/* Route for the shopping cart page */}
                            <Route
                                path="/cart"
                                element={<ShoppingCart />}
                            />
                        </Routes>
                    </main>
                </div>
            </Router>
        </ShopProvider>
    );
};

/*** SHOP_CONTEXT.tsx (AND REDUCER) */
/* ----------------------------------------------------------------- */

// Definition for a CartItem which extends a Product by adding a quantity property
interface CartItem extends Product {
    quantity: number;
}

// State interface for the shop containing products and items in the cart
interface ShopState {
    products: Product[];
    cart: CartItem[];
}

// Initial state of the shop context
const initialState: ShopState = {
    products: [], // Initial products, this can be populated from the API later on
    cart: [], // Initial cart is empty
};

// Create a context for the shop
export const ShopContext = createContext<
    [ShopState, React.Dispatch<ShopAction>]
>([initialState, () => {}]);

// REDUCER --------------------------------------------------------- */

// Define possible actions for the shop
type ShopAction =
    | { type: "ADD_TO_CART"; product: Product }
    | { type: "REMOVE_FROM_CART"; product: Product };

// Reducer function to handle state changes for the shop
const shopReducer = (
    state: ShopState,
    action: ShopAction,
): ShopState => {
    switch (action.type) {
        case "ADD_TO_CART":
            // Check if the product is already in the cart
            const existingCartItem = state.cart.find(
                item => item.id === action.product.id,
            );
            if (existingCartItem) {
                // If the product is already in the cart, increase its quantity
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item,
                    ),
                };
            } else {
                // If the product is not in the cart, add it with quantity 1
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        { ...action.product, quantity: 1 },
                    ],
                };
            }
        case "REMOVE_FROM_CART":
            // Find the product in the cart
            const itemToRemove = state.cart.find(
                item => item.id === action.product.id,
            );
            if (itemToRemove && itemToRemove.quantity > 1) {
                // If the quantity is more than 1, reduce the quantity by 1
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.product.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item,
                    ),
                };
            } else {
                // If the quantity is 1, remove the item from the cart
                return {
                    ...state,
                    cart: state.cart.filter(
                        item => item.id !== action.product.id,
                    ),
                };
            }
        default:
            // Default case returns the current state without any changes
            return state;
    }
};

// PROVIDER ------------------------------------------------------ */

// Props definition for the ShopProvider component
interface ShopProviderProps {
    children: React.ReactNode;
}

// Provider component to wrap around parts of the app where shop context is needed
export const ShopProvider: React.FC<ShopProviderProps> = ({
    children,
}) => {
    // Use the shop reducer with the initial state
    const [state, dispatch] = useReducer(shopReducer, initialState);

    // Provide the state and dispatch to the children components
    return (
        <ShopContext.Provider value={[state, dispatch]}>
            {children}
        </ShopContext.Provider>
    );
};

// CUSTOM HOOK --------------------------------------------------- */

// Custom hook to easily access the shop context in any component
export const useShop = () => {
    const context = useContext(ShopContext);

    if (!context) {
        // Ensure that the custom hook is used within the provider
        throw new Error("useShop must be used within a ShopProvider");
    }

    const [state, dispatch] = context;

    // Helper functions for dispatching common actions
    const addToCart = (product: Product) => {
        dispatch({ type: "ADD_TO_CART", product });
    };

    const removeFromCart = (product: Product) => {
        dispatch({ type: "REMOVE_FROM_CART", product });
    };

    // Return the state, dispatch, and additional helper functions
    return {
        state,
        dispatch,
        addToCart,
        removeFromCart,
        // Add more functions here as needed
    };
};

/*** SEARCH_BAR.tsx */
/* --------------------------------------------------------------- */

// Props definition for the SearchBar component
interface SearchBarProps {
    onSearch: (searchTerm: string) => void; // Callback to handle search functionality
    onSort: (sortType: string) => void; // Callback to handle sort functionality
}

// SearchBar component
const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    onSort,
}) => {
    const [searchTerm, setSearchTerm] = useState(""); // Local state to store the search term

    // Function to handle changes in the search input
    const handleSearchChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSearchTerm(e.target.value); // Update the local state with new search term
        onSearch(e.target.value); // Trigger the onSearch callback with the new term
    };

    // Function to handle changes in the sorting dropdown
    const handleSortChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        onSort(e.target.value); // Trigger the onSort callback with the selected sort type
    };

    return (
        <div className="search-bar">
            {/* Search input */}
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {/* Sorting dropdown */}
            <select onChange={handleSortChange}>
                <option value="default">Sort By</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">
                    Price (High to Low)
                </option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
            </select>
        </div>
    );
};
