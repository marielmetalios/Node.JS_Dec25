import http from 'http';
const PORT = process.env.PORT;

// you can also set header types below
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    // res.write('Hello World!');
    // res.end();
// })
// // above we are sending text to the browser
// if we were using Express, it would end this automatically

// combine methods:
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
});

// call listen method, usually use 5000 and then we pass in a function after it connects:
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// you can also run status errors
// res.statusCode = 404

// .env file
// environment variables

