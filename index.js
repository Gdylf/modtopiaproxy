const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

const target = "http://pl06.icehost.pl:21004"; // Twój cel

app.use("/", createProxyMiddleware({
  target: target,
  changeOrigin: true,
  ws: true,
  secure: false, // bo http
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Origin', target);
  }
}));

app.listen(8000, () => {
  console.log("Proxy działa na porcie 8000");
});
