export default (err, req, res, next) => {
  let error = {error: err};
  res.statusCode = 401;
  res.statusMessage = 'Unauthorized';
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(error));
};
