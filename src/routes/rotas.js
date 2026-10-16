export function route(req, res) {
const url = req.url;

  if (url === '/') {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Página Inicial</h1><p>Bem-vindo ao nosso site!</p>");
  } 

  else if (url === '/sobre') {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Página Sobre</h1><p>Informações sobre o projeto.</p>");
  } 
  
  else if (url === '/antigo') {
    res.writeHead(301, { "Location": "/sobre" });
    res.end(); 
  } 
  
  else if (url.startsWith('/busca')) {
    if (url === '/busca' || !url.includes('termo=')) {
      res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>Erro 400: Parâmetro 'termo' é obrigatório!</h1>");
    } else {
      const termo = url.split('termo=')[1];
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<h1>Resultado da Busca</h1><p>Você pesquisou por: <strong>${termo}</strong></p>`);
    }
  } 
  
  else if (url === '/admin') {
    res.writeHead(403, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Erro 403: Acesso Negado!</h1><p>Você não tem permissão.</p>");
  } 
  
  else if (url === '/contato') {
    if (req.method !== "GET") {
      res.writeHead(405, { "Allow": "GET", "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>Erro 405: Método Não Permitido!</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>Página de Contato</h1><p>Entre em contato conosco por aqui.</p>");
    }
  } 
  
  else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Erro 404: Página Não Encontrada</h1>");
  }
  
  console.log(`${req.method} ${req.url} ${res.statusCode}`);
}
