import axios from "axios";
import fetch from "node-fetch";

interface Data {
    id: number;
    name: string;
}

const getMyData = async (url: string): Promise<Data> => {
    try {
        const response = await axios.get(url);

        if (!response.status.toString().startsWith("2")) {
            throw new Error(`Network status: ${response.status}`);
        }

        return response.data as Data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const apiUrl = "https://example.com/api/data";

(async () => {
    try {
        const data = await getMyData(apiUrl);
        console.log("Data:", data);
    } catch (error: any) {
        console.error("Error:", error.message);
    }
})();

const fetchMyData = async (url: string): Promise<Data> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network status: ${response.status}`);
        }

        const data = (await response.json()) as Data;
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

(async () => {
    try {
        const data = await fetchMyData(apiUrl);
        console.log("Data:", data);
    } catch (error: any) {
        console.error("Error:", error.message);
    }
})();
