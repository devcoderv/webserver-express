const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salid = {
        nombre: 'Roiner',
        edad: 28,
        url: req.url
    }


    res.write(JSON.stringify(salid));
    res.end();
})
.listen(8080)

console.log('escuchando el puerto 8080');

