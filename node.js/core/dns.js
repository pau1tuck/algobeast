import dns from 'node:dns';

dns.getServers();
dns.lookup('example.com', (err, address, family) => {});
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {});
dns.resolve('example.com', 'ANY', (err, records) => {});
dns.resolve4('example.com', (err, addresses) => {});
dns.resolve6('example.com', (err, addresses) => {});
dns.resolveCname('example.com', (err, addresses) => {});
dns.resolveMx('example.com', (err, addresses) => {});
dns.resolveNs('example.com', (err, addresses) => {});
dns.resolveTxt('example.com', (err, addresses) => {});
dns.resolveSrv('example.com', (err, addresses) => {});
dns.resolvePtr('example.com', (err, addresses) => {});
dns.resolveSoa('example.com', (err, addresses) => {});
dns.reverse('8.8.8.8', (err, hostnames) => {});
dns.promises.lookup('example.com').then(address => {});
dns.promises.resolve('example.com', 'ANY').then(records => {});
dns.promises.reverse('8.8.8.8').then(hostnames => {});
dns.networkInterfaces();
dns.setServers(['8.8.8.8', '8.8.4.4']);

dns.promises.resolve4('example.com')
    .then(addresses => {
        console.log(`Addresses: ${addresses}`);
    })
    .catch(error => {
        console.error('Failed to resolve:', error);
    });


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
