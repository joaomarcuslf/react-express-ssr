export default function favicon() {
  return function _middleware(request, response, next) {
    if (request.url === '/favicon.ico') {
      // No favicon middleware
      response.writeHead(200, { 'Content-Type': 'image/x-icon' });

      response.end('');
    } else {
      next();
    }
  };
}
