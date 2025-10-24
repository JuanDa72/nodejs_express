const http=require('http');

const server=http.createServer((req, res) => {
    console.log("Nueva solicitud");
    console.log(req.url)
    console.log(req.method)
    console.log(res.statusCode)
    res.end("Hola desde el servidor");
});

server.listen(1504, () => {
    console.log("El servidor esta escuchando");
});


