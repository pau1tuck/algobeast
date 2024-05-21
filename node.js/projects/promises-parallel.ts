import fs from "fs";
import path from "path";
import axios from "axios";

// A simple array of currency codes.
const currencies = ["usd", "eur", "gbp"];

const rates: any = [];

export const fetchRates = async () => {
    // Map over the currencies array
    const promises = currencies.map(async currency => {
        try {
            const response = await axios.request({
                method: "GET",
                url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
            });
            rates.push(response.data);
            // console.log(`${currency} retrieved`);
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    });
    await Promise.all(promises);

    // Write the downloaded data to rates.json
    fs.writeFileSync(
        path.join(process.cwd(), "data/rates.json"),
        JSON.stringify(rates, null, 2),
    );
};

/*** ----------------------------------------------------- ***/
// Read all currency codes and names from currencies.json
// console.time("Done in");
const currencies2 = JSON.parse(
    fs.readFileSync(
        path.join(process.cwd(), "data/currencies.json"),
        "utf8",
    ),
);

const rates2: any = [];

export const fetchRates2 = async () => {
    // Measure the time it takes to retrieve all of the data
    const start = process.hrtime();

    // Map over the currencies object in currencies.json
    const keys = Object.keys(currencies2);
    const promises = keys.map(async key => {
        try {
            const response = await axios.request({
                method: "GET",
                url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${key}.json`,
            });
            rates.push(response.data);
            // console.log(currencies[key], "retrieved");
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    });
    await Promise.all(promises);

    // Write the downloaded data to rates.json
    fs.writeFileSync(
        path.join(process.cwd(), "data/rates.json"),
        JSON.stringify(rates2, null, 2),
    );

    // Measure and write the data retrieval time to stdout
    const hrtime = process.hrtime(start);
    const elapsed = hrtime[0] + hrtime[1] / 1e9; // convert to seconds
    // const elapsed = hrtime[0] * 1000 + hrtime[1] / 1e6; // convert to milliseconds
    process.stdout.write(`Done in ${elapsed.toFixed(3)}ms.\n`);
    // console.timeEnd("Done in");
};
