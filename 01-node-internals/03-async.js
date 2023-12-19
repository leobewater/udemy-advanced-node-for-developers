const https = require("https");

const start = Date.now();

// Network requests and they all finished at about the same time
// libuv delegates the network requests to the OS and let the OS handles it and there is no blocking or event loop, no threadpool being used
function doRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();