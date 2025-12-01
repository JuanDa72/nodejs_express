const dns = require("dns").promises;
const net = require("net");
const https = require("https");
const http = require("http");

/* ------------------------------------------
   1) DNS LOOKUP
------------------------------------------- */
async function dnsLookup(domain) {
  try {
    const start = Date.now();
    const ip = await dns.lookup(domain);
    return {
      ip: ip.address,
      time_ms: Date.now() - start
    };
  } catch (err) {
    return { error: err.message };
  }
}

/* ------------------------------------------
   2) TCP CHECK
------------------------------------------- */
function tcpCheck(domain, port = 443) {
  return new Promise((resolve) => {
    const start = Date.now();
    const socket = new net.Socket();
    socket.setTimeout(3000);
    
    socket.connect(port, domain, () => {
      const total = Date.now() - start;
      socket.destroy();
      resolve({
        reachable: true,
        time_ms: total
      });
    });
    
    socket.on("error", (err) => {
      socket.destroy();
      resolve({
        reachable: false,
        error: err.message
      });
    });
    
    socket.on("timeout", () => {
      socket.destroy();
      resolve({
        reachable: false,
        error: "Timeout"
      });
    });
  });
}

/* ------------------------------------------
   3) HTTP/HTTPS CHECK
------------------------------------------- */
function httpCheck(domain) {
  return new Promise((resolve) => {
    const start = Date.now();
    
    // ✅ CORREGIDO: Usar paréntesis normales, no template tag
    const req = https.get(`https://${domain}`, (res) => {
      // Consumir la respuesta para cerrar la conexión
      res.resume();
      
      resolve({
        status: res.statusCode,
        time_ms: Date.now() - start
      });
    });
    
    req.on("error", (err) => {
      resolve({ error: err.message });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({ error: "HTTP Timeout" });
    });
  });
}

/* ------------------------------------------
   4) TLS CHECK
------------------------------------------- */
function tlsCheck(domain) {
  return new Promise((resolve) => {
    const req = https.request(
      {
        host: domain,
        port: 443,
        method: "GET",
        rejectUnauthorized: false
      },
      (res) => {
        // Consumir datos para cerrar la conexión
        res.resume();
        
        const cert = res.socket.getPeerCertificate();
        
        if (!cert || Object.keys(cert).length === 0) {
          resolve({ error: "No TLS certificate" });
          return;
        }
        
        const expiry = new Date(cert.valid_to);
        const now = new Date();
        const daysLeft = Math.round((expiry - now) / (1000 * 60 * 60 * 24));
        
        resolve({
          valid: daysLeft > 0,
          days_left: daysLeft,
          issuer: cert.issuer?.O || cert.issuer?.CN || "Unknown",
          subject: cert.subject?.CN || "Unknown",
          valid_from: cert.valid_from,
          valid_to: cert.valid_to
        });
      }
    );
    
    req.on("error", (err) => {
      resolve({ error: err.message });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({ error: "TLS Timeout" });
    });
    
    req.end();
  });
}

/* ------------------------------------------
   EXPORTS (CommonJS)
------------------------------------------- */
module.exports = {
  dnsLookup,
  tcpCheck,
  httpCheck,
  tlsCheck
};