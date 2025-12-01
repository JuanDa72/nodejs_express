const dns = require("dns").promises;
const net = require("net");
const https = require("https");

//dns
async function dnsLookup(domain) {
  try {
    const start = Date.now();
    const ip = await dns.lookup(domain);
    return { ip: ip.address, time_ms: Date.now() - start };
  } catch (err) {
    return { error: err.message };
  }
}

//tcp check
function tcpCheck(domain, port = 443) {
  return new Promise((resolve) => {
    const start = Date.now();
    const socket = new net.Socket();
    socket.setTimeout(3000);

    socket.connect(port, domain, () => {
      const total = Date.now() - start;
      socket.destroy();
      resolve({ reachable: true, time_ms: total });
    });

    socket.on("error", (err) => {
      socket.destroy();
      resolve({ reachable: false, error: err.message });
    });

    socket.on("timeout", () => {
      socket.destroy();
      resolve({ reachable: false, error: "Timeout" });
    });
  });
}


//http check
function httpCheck(domain) {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = https.get(`https://${domain}`, (res) => {
      res.resume();
      resolve({ status: res.statusCode, time_ms: Date.now() - start });
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

//tls check
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

//html builder
function htmlForm() {
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test de Conectividad</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      
      .container {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 50px 40px;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        max-width: 500px;
        width: 100%;
        animation: fadeIn 0.5s ease-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      h1 {
        color: #333;
        font-size: 32px;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .subtitle {
        color: #666;
        text-align: center;
        margin-bottom: 30px;
        font-size: 14px;
      }
      
      .icon {
        text-align: center;
        font-size: 60px;
        margin-bottom: 20px;
      }
      
      input {
        width: 100%;
        padding: 15px 20px;
        border: 2px solid #e0e0e0;
        border-radius: 12px;
        font-size: 16px;
        transition: all 0.3s ease;
        background: white;
      }
      
      input:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
      }
      
      button {
        width: 100%;
        padding: 15px;
        margin-top: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
      }
      
      button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
      }
      
      button:active {
        transform: translateY(0);
      }
      
      .example {
        margin-top: 15px;
        text-align: center;
        color: #999;
        font-size: 13px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="icon">🌐</div>
      <h1>Test de Conectividad</h1>
      <p class="subtitle">Verifica DNS, TCP, HTTP y certificados TLS</p>
      <form method="GET">
        <input 
          type="text" 
          name="domain" 
          placeholder="Ingresa un dominio (ej: google.com)" 
          required
          autofocus
        />
        <button type="submit">Iniciar Test</button>
        <p class="example">Ejemplo: google.com, amazon.com</p>
      </form>
    </div>
  </body>
  </html>
  `;
}

function htmlResults(domain, data) {
  const { dns, tcp, http, tls } = data;

  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados: ${domain}</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        padding: 40px 20px;
      }
      
      .container {
        max-width: 900px;
        margin: 0 auto;
      }
      
      .header {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 30px;
        border-radius: 20px;
        margin-bottom: 30px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        text-align: center;
        animation: fadeIn 0.5s ease-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      h1 {
        color: #333;
        font-size: 28px;
        margin-bottom: 5px;
      }
      
      .domain {
        color: #667eea;
        font-weight: bold;
        word-break: break-all;
      }
      
      .card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 25px;
        margin-bottom: 20px;
        border-radius: 15px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        animation: slideIn 0.5s ease-out backwards;
      }
      
      .card:nth-child(1) { animation-delay: 0.1s; }
      .card:nth-child(2) { animation-delay: 0.2s; }
      .card:nth-child(3) { animation-delay: 0.3s; }
      .card:nth-child(4) { animation-delay: 0.4s; }
      
      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
      }
      
      .card-header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 2px solid #f0f0f0;
      }
      
      .card-icon {
        font-size: 32px;
        margin-right: 15px;
      }
      
      .card-title {
        font-size: 20px;
        font-weight: 600;
        color: #333;
      }
      
      .status-success {
        color: #10b981;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .status-error {
        color: #ef4444;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .detail-row {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #f0f0f0;
      }
      
      .detail-row:last-child {
        border-bottom: none;
      }
      
      .detail-label {
        color: #666;
        font-weight: 500;
      }
      
      .detail-value {
        color: #333;
        font-weight: 600;
      }
      
      .badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
      }
      
      .badge-success {
        background: #d1fae5;
        color: #065f46;
      }
      
      .badge-error {
        background: #fee2e2;
        color: #991b1b;
      }
      
      .badge-warning {
        background: #fef3c7;
        color: #92400e;
      }
      
      .back-button {
        display: inline-block;
        margin-top: 30px;
        padding: 15px 40px;
        background: rgba(255, 255, 255, 0.95);
        color: #667eea;
        text-decoration: none;
        border-radius: 12px;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }
      
      .back-button:hover {
        background: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }
      
      .center {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Resultados del Test</h1>
        <p class="domain">${domain}</p>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-icon">🔍</div>
          <div class="card-title">DNS Lookup</div>
        </div>
        ${dns.error 
          ? `<p class="status-error">${dns.error}</p>` 
          : `
            <p class="status-success">Resolución exitosa</p>
            <div class="detail-row">
              <span class="detail-label">Dirección IP</span>
              <span class="detail-value">${dns.ip}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Tiempo de respuesta</span>
              <span class="detail-value">${dns.time_ms}ms</span>
            </div>
          `}
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-icon">🔌</div>
          <div class="card-title">Conexión TCP (Puerto 443)</div>
        </div>
        ${tcp.reachable 
          ? `
            <p class="status-success">Puerto abierto y accesible</p>
            <div class="detail-row">
              <span class="detail-label">Estado</span>
              <span class="detail-value"><span class="badge badge-success">ABIERTO</span></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Tiempo de conexión</span>
              <span class="detail-value">${tcp.time_ms}ms</span>
            </div>
          ` 
          : `<p class="status-error">${tcp.error}</p>`}
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-icon">🌐</div>
          <div class="card-title">Respuesta HTTP/HTTPS</div>
        </div>
        ${http.error 
          ? `<p class="status-error">${http.error}</p>` 
          : `
            <p class="status-success">Servidor responde correctamente</p>
            <div class="detail-row">
              <span class="detail-label">Código de estado</span>
              <span class="detail-value"><span class="badge ${http.status < 400 ? 'badge-success' : 'badge-error'}">${http.status}</span></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Tiempo de respuesta</span>
              <span class="detail-value">${http.time_ms}ms</span>
            </div>
          `}
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-icon">🔒</div>
          <div class="card-title">Certificado TLS/SSL</div>
        </div>
        ${tls.error
          ? `<p class="status-error">${tls.error}</p>`
          : `
            <p class="status-success">Certificado ${tls.valid ? 'válido' : 'expirado'}</p>
            <div class="detail-row">
              <span class="detail-label">Estado</span>
              <span class="detail-value">
                <span class="badge ${tls.valid ? (tls.days_left < 30 ? 'badge-warning' : 'badge-success') : 'badge-error'}">
                  ${tls.valid ? 'VÁLIDO' : 'EXPIRADO'}
                </span>
              </span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Días restantes</span>
              <span class="detail-value" style="color: ${tls.days_left < 30 ? '#f59e0b' : '#10b981'}">${tls.days_left} días</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Emisor</span>
              <span class="detail-value">${tls.issuer}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Subject</span>
              <span class="detail-value">${tls.subject}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Válido desde</span>
              <span class="detail-value">${tls.valid_from}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Válido hasta</span>
              <span class="detail-value">${tls.valid_to}</span>
            </div>
          `}
      </div>

      <div class="center">
        <a href="/" class="back-button">← Probar otro dominio</a>
      </div>
    </div>
  </body>
  </html>
  `;
}

/* ------------------------------------------
   LAMBDA HANDLER
------------------------------------------- */
exports.handler = async (event) => {
  const domain = event.queryStringParameters?.domain;

  if (!domain) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: htmlForm()
    };
  }

  const results = {
    dns: await dnsLookup(domain),
    tcp: await tcpCheck(domain),
    http: await httpCheck(domain),
    tls: await tlsCheck(domain)
  };

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: htmlResults(domain, results)
  };
};