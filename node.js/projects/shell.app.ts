#!/usr/bin/env node

import fs from "fs";
import os from "os";

// Display basic OS information
console.log(`OS Type: ${os.type()}`);
console.log(`OS Platform: ${os.platform()}`);
console.log(`Total Memory: ${os.totalmem() / (1024 * 1024)} MB`);
console.log(`Free Memory: ${os.freemem() / (1024 * 1024)} MB`);

// Conversion rates
let lbToKg = 0;

function convertLbsToKg(value: number): number {
    return value * lbToKg;
}

// Read the conversion rate from a file
fs.readFile(
    "conversionRate.txt",
    "utf8",
    (err: NodeJS.ErrnoException | null, data: string) => {
        if (!err) {
            lbToKg = parseFloat(data);
            console.log(`Conversion rate updated to ${lbToKg}`);
        }
    },
);

// Read input arguments
const [, , inputValue, fromUnit, toUnit] = process.argv;

// Check and convert
if (fromUnit === "lbs" && toUnit === "kg") {
    const kgValue = convertLbsToKg(parseFloat(inputValue));
    console.log(`${inputValue} lbs is ${kgValue.toFixed(2)} kg.`);
} else {
    console.error(
        "Invalid units provided. Supported conversion is 'lbs' to 'kg'.",
    );
    process.exit(1);
}
