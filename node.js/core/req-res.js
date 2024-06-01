res.app                               // The app object representing the Express application.
res.append(field, value)              // Appends the specified value to the HTTP response header field.
res.attachment([filename])            // Sets the HTTP response Content-Disposition header field to “attachment”.
res.cookie(name, value [, options])   // Sets a cookie with the specified name and value.
res.clearCookie(name [, options])     // Clears the cookie specified by name.
res.download(path [, filename] [, options] [, fn])  // Transfers the file at path as an “attachment”.
res.end([data] [, encoding])          // Ends the response process.
res.format(object)                    // Performs content-negotiation on the Accept HTTP header on the request object.
res.get(field)                        // Returns the HTTP response header specified by field.
res.json([body])                      // Sends a JSON response.
res.jsonp([body])                     // Sends a JSON response with JSONP support.
res.links(links)                      // Sets the Link HTTP header field with the specified links.
res.location(path)                    // Sets the response Location HTTP header to the specified path.
res.redirect([status,] path)          // Redirects to the URL derived from the specified path, with optional status.
res.render(view [, locals] [, callback]) // Renders a view and sends the rendered HTML string to the client.
res.send([body])                      // Sends the HTTP response.
res.sendFile(path [, options] [, fn]) // Sends a file as an octet stream.
res.sendStatus(statusCode)            // Sets the response HTTP status code and sends the status string as the response body.
res.set(field [, value])              // Sets the response’s HTTP header field to the specified value.
res.status(statusCode)                // Sets the HTTP status for the response.
res.type(type)                        // Sets the Content-Type HTTP header to the MIME type.
res.vary(field)                       // Adds the field to the Vary HTTP header.

req.app              // The app object representing the Express application.
req.baseUrl          // The URL path on which a router instance was mounted.
req.body             // Contains key-value pairs of data submitted in the request body.
req.cookies          // An object containing cookies sent by the request.
req.fresh            // Boolean indicating whether the request is "fresh."
req.hostname         // The hostname derived from the Host HTTP header.
req.ip               // The remote IP address of the request.
req.ips              // An array of subdomains in the domain name of the request.
req.method           // The HTTP method of the request (e.g., GET, POST).
req.originalUrl      // The original request URL.
req.params           // An object containing route parameters (named URL segments).
req.path             // The path part of the request URL.
req.protocol         // The protocol of the request (http or https).
req.query            // An object containing a property for each query string parameter.
req.route            // The matched route, if any.
req.secure           // Boolean indicating if the request was made using a secure TLS connection.
req.signedCookies    // An object containing signed cookies sent by the request.
req.stale            // Boolean indicating whether the request is "stale."
req.subdomains       // An array of subdomains in the domain name of the request.
req.xhr              // Boolean indicating whether the request was made with XMLHttpRequest.

req.accepts(types)                // Checks if the specified content types are acceptable.
req.acceptsCharsets(charsets)     // Checks if the specified charsets are acceptable.
req.acceptsEncodings(encodings)   // Checks if the specified encodings are acceptable.
req.acceptsLanguages(languages)   // Checks if the specified languages are acceptable.
req.get(field)                    // Returns the specified HTTP request header field.
req.is(type)                      // Checks if the content-type of the request matches the specified type.
req.range(size)                   // Parses the Range header field.
