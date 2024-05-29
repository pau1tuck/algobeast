import dns from 'node:dns';
/* The DNS module provides functionality related to Domain Name System (DNS) resolution and lookup.
It allows Node.js applications to perform name resolution operations, such as translating domain names to IP addresses and vice versa. */
// Basic domain name resolution to IPv4 address (uses underlying OS's facilities)
dns.lookup('example.com', (err, address, family) => {
    if (err) throw err;
    console.log(`Address: ${address}, IP Family: IPv${family}`);

});
// Resolving domain to all IPv4 and IPv6 addresses
dns.resolve('example.com', 'ANY', (err, records) => {
    if (err) throw err;
    console.log('DNS Records:', records);

});
// Reverse lookup: IP address to hostname
dns.reverse('8.8.8.8', (err, hostnames) => {
    if (err) throw err;
    console.log('Hostnames for 8.8.8.8:', hostnames);

});
// Get the IP addresses of the current machine (not DNS-related, but often useful)
const addresses = dns.networkInterfaces();
console.log('Addresses:', addresses);
// Lookup Service - get the service name and service number for a given port and IP
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
    if (err) throw err;
    console.log(`Host: ${hostname}, Service: ${service}`);
});
// DNS Promise API (Using the promises-based variant of the dns functions)
const dnsPromises = dns.promises;
dnsPromises.resolve4('example.com')
    .then(addresses => {
        console.log(`Addresses: ${addresses}`);
    })
    .catch(error => {
        console.error('Failed to resolve:', error);
    });

// Note: The 'dns' module offers several other methods for name resolution, DNS querying,and other related operations. This block provides a general overview of the  most commonly used functions.
