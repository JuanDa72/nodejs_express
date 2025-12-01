const { handler } = require("./index.js");

handler({ domain: "google.com" }).then((res) => {
  console.log(res.body); // imprime el HTML
});
