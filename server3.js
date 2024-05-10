//abrir uma pasta que contem html e executar atraves de estrutura de decisão alguma pagina selecionada

const http = require('http');
const fs = require('fs');



let porta = 3000
let host = 'localhost'

const server = http.createServer((req, res)=>{
    //header
    res.setHeader('content-type','text/html');

    //criar sistemas de rotas
    let html_page = '';

    switch(req.url) {
        case '/':
            html_page = 'home.html'
            res.statusCode = 200
            break;

        case '/home':
            html_page = 'home.html'
            res.statusCode = 200
            break;

        case '/servicos':
            html_page = 'servicos.html'
            res.statusCode = 200
            break;
    
        case '/sobre':
            html_page = 'sobre.html'
            res.statusCode = 200
            break;

        default:
            html_page = '404.html'
            res.statusCode = 404
            break;

        };

    fs.readFile('./htmls/' + html_page, (erro, data)=>{
        if (erro){
            console.log('Erro no carregamento da pagina');
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })
})


server.listen(porta, host,()=>{
    console.log('servidor rodando')

});