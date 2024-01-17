const WEB_SERVER = (req, res, htmlCode) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html;charset=utf-8");
  res.end(htmlCode);
};
export default WEB_SERVER;
