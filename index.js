/*
 * Title: Uptime monitoring Application
 * Description: A RESTFULL API to monitor up or down time of user defined links
 * Written By: Mr. Saif
 * Date: 10/12/2021
 *
 */

// Dependencies
const http = require('http');
const url = require('url');

// App object - Module Scaffolding
const app = {};
// Configuration
app.config = {
    port: 3000,
};

// creating Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

// handle request respopnse
app.handleReqRes = (req, res) => {
    // Request Handle
    // getting the url to parse it
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    const path = parsedUrl.pathname;
    const trimmedPath =
        // response handle
        res.end('Hello coders');
};

// calling the function to start the server
app.createServer();
