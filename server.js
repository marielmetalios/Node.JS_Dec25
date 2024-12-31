import http from 'http';
const PORT = 8000;

// you can also set header types below
const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
})
// above we are sending text to the browser
// if we were using Express, it would end this automatically

// call listen method, usually use 5000 and then we pass in a function after it connects:
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// you can also run status errors
res.statusCode = 404

combine methods :

res.writeHead(500, { 'Content-Type = 'application/json' })
res.end

