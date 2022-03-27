const http = require('http');

const server = http.createServer((req, res) => {

    const http = require('http');

    const url = 'http://localhost:3004/weather';

    let data = '';
  
    const request = http.request(url, (response) => {
        
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        });
      
        response.on('end', () => {
            const body = JSON.parse(data);

            
                        switch (body.status) {
                            case 404:
                                res.end(`${http.STATUS_CODES[404]}`);
                                break;
                            case 400:
                                res.end(`${http.STATUS_CODES[400]}`);
                                break;
                            case 401:
                                res.end( `${http.STATUS_CODES[401]}`);
                                break;
                            case 403:
                                res.end(`${http.STATUS_CODES[403]}`);
                                break;
                            case 500:
                                res.end(`${http.STATUS_CODES[500]}`);
                                break;
                            default:
                                res.end(`<h1>${JSON.stringify(body)}</h1>`);;
                                break;
                        }
        });
    })
    request.end();
 
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




