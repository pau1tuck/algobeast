/**
 * Server-side API key management, caching with Redis, data aggregation and formatting,
 */

import express, { Request, Response } from "express";
import Redis from "ioredis";
import axios from "axios";

const API_KEY = "";
const city = "Mae Chan";
const state = "Chiang Rai";
const country = "Thailand";

// Validate API key
if (!API_KEY) {
    console.error(
        "Invalid API key. Register at https://rapidapi.com/apininjas/api/weather-by-api-ninjas/",
    );
    process.exit();
}

const redis = new Redis({
    host: "localhost",
    port: 6379,
});

// Get weather data
const axiosOptions = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: {
        city,
        state,
        country,
    },
    headers: {
        "X-RapidAPI-Key": API_KEY || null,
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

const cacheWeatherData = async () => {
    // Check if weather data is already in cache
    const cachedData = await redis.get("weatherData");
    if (cachedData) {
        console.log("Loading from cache...");
        return JSON.parse(cachedData);
    }
    console.log("Loading...");
    try {
        const response = await axios.request(axiosOptions);
        console.log("Response status:", response.status);
        const data = response.data;
        redis.set("weatherData", JSON.stringify(data), "EX", 3600); // 1hr
        return data;
    } catch (error) {
        console.error(error);
    }
};
// EXPRESS
const app = express();
app.use(express.json());

// READ WEATHER DATA
const weatherData = cacheWeatherData();
app.get("/api/weather", async (_: Request, res: Response) => {
    res.json(weatherData);
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});
