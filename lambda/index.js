const { dnsLookup, tcpCheck, httpCheck, tlsCheck } = require("./test");
const { buildHtml } = require("./htmlBuilder.js");

exports.handler = async (event) => {
  const domain = event?.domain || "example.com";

  const dnsRes = await dnsLookup(domain);
  const tcpRes = await tcpCheck(domain);
  const httpRes = await httpCheck(domain);
  const tlsRes = await tlsCheck(domain);

  const html = buildHtml(domain, {
    dns: dnsRes,
    tcp: tcpRes,
    http: httpRes,
    tls: tlsRes
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html
  };
};
