const port = 3000,
http=require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer();

// app.on('request', (req, res)=>{
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });
app.on('request', (req, res)=>{
    var body=[];
    req.on('data', (bodyData)=>{
        body.push(bodyData);
    });
    req.on('end', ()=>{
        body = Buffer.concat(body).toString();
        console.log(`Request Body Content: ${body}`);
    });
    const getJSONString = obj =>{
        return JSON.stringify(obj, null, 2)
    }
    
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`Method: ${getJSONString(req.url)}`);
    console.log(`Method: ${getJSONString(req.headers)}`);

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let respondMessage = "<h1> This will show on the screen. <h1>";
    res.end(respondMessage);

});


app.listen(port);
console.log(`the server is on ${port}`)
