import http from 'http';
const PORT = process.env.PORT;

// you can also set header types below
const server = http.createServer((req, res) => {
    try {
        if(req.method === 'GET') {

    } else {
        throw new Error('Method not allowed')
    } catch (error)
    }

    // console.log(req.url);
    // console.log(req.method);
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Homepage</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About</h1>'); 
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Not Found</h1>');
    }
});
    // res.write('Hello World!');
    // res.end();
// })
// // above we are sending text to the browser
// if we were using Express, it would end this automatically


// call listen method, usually use 5000 and then we pass in a function after it connects:
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// you can also run status errors
// res.statusCode = 404

// .env file
// environment variables
// postman plug ins will allow http post request

