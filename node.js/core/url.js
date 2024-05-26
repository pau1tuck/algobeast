import { URL, URLSearchParams } from 'node:url';
/* The `url` module provides utilities for URL resolution and parsing. It allows for the construction, parsing, and encoding/decoding of URLs. The module offers both a legacy API and a modern, standardized API based on the WHATWG URL specification. */

// Constructing a new URL
const myUrl = new URL('https://example.com:8080/pathname?query=value#hash');
console.log('URL:', myURL.href);

// Access different parts of the URL
console.log('Origin:', myURL.origin);  // 'https://example.com:8080'
console.log('Protocol:', myURL.protocol);  // 'https:'
console.log('Username:', myURL.username);  // ''
console.log('Password:', myURL.password);  // ''
console.log('Host:', myURL.host);  // 'example.com:8080'
console.log('Hostname:', myURL.hostname);  // 'example.com'
console.log('Port:', myURL.port);  // '8080'
console.log('Pathname:', myURL.pathname);  // '/pathname'
console.log('Search:', myURL.search);  // '?query=value'
console.log('Hash:', myURL.hash);  // '#hash'

// URLSearchParams: interface for working with query strings
const params = new URLSearchParams(myURL.search);
console.log('Has query:', params.has('query'));  // true
console.log('Value of "query":', params.get('query'));  // 'value'
myUrl.searchParams.set('search', 'newvalue');
console.log(myUrl.href); // '<https://example.com/newpath/?search=newvalue#hash>'
params.append('newKey', 'newValue');
console.log('Updated Search:', params.toString());  // 'query=value&newKey=newValue'

// Base URL: Useful when you have a relative URL and want to resolve it against a base URL
const baseURL = new URL('https://example.com/base');
const relativeURL = new URL('../relativePath', baseURL);
console.log('Resolved URL:', relativeURL.href);  // 'https://example.com/relativePath'

// Legacy URL API (it is deprecated but might still be found in older projects)
const legacyURL = require('url').parse('https://legacy.example.com');
console.log('Legacy URL:', legacyURL.href);

// Note: It's recommended to use the WHATWG URL API (new URL and URLSearchParams) instead
// of the legacy API for new projects.

const urlObject = {
    href: 'https://www.example.com:8080/path/name?query=search#hash',
    origin: 'https://www.example.com:8080',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'www.example.com:8080',
    hostname: 'www.example.com',
    port: '8080',
    pathname: '/path/name',
    search: '?query=search',
    searchParams: { 'query': 'search' },
    hash: '#hash'
}