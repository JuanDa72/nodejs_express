const { dnsLookup, tcpCheck, httpCheck, tlsCheck } = require("./test");

async function main() {
  console.log(await dnsLookup("google.com"));
  console.log(await tcpCheck("google.com"));
  console.log(await httpCheck("google.com"));
  console.log(await tlsCheck("google.com"));
}

main();
