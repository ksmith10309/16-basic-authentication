const methods = ['POST', 'GET'];

export default (req, res, next) => {
  if (!methods.includes(req.method)) {
    let error = {error: 'Route has not been registered. Please use POST or GET.'};
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(error));
  }
  let error = {error: 'Resource Not Found'};
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(error));
};
