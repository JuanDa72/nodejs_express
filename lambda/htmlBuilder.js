function buildHtml(domain, results) {
  const { dns, tcp, http, tls } = results;

  return `
  <html>
    <head>
      <meta charset="UTF-8"/>
      <style>
        body { font-family: Arial; background:#f4f4f4; padding:20px; }
        .card {
          background:white; padding:20px; margin:12px 0;
          border-radius:10px; box-shadow:0 2px 4px rgba(0,0,0,0.1);
        }
        h1 { margin-bottom:20px; }
        .ok { color:green; font-weight:bold; }
        .bad { color:red; font-weight:bold; }
      </style>
    </head>
    <body>
      <h1>Resultados para ${domain}</h1>

      <div class="card">
        <h2>DNS Lookup</h2>
        ${dns.error ? `<p class="bad">${dns.error}</p>`
                     : `<p class="ok">IP: ${dns.ip} (${dns.time_ms} ms)</p>`}
      </div>

      <div class="card">
        <h2>TCP (443)</h2>
        ${tcp.reachable ? `<p class="ok">Abierto (${tcp.time_ms} ms)</p>`
                        : `<p class="bad">${tcp.error}</p>`}
      </div>

      <div class="card">
        <h2>HTTP Check</h2>
        ${http.error ? `<p class="bad">${http.error}</p>`
                     : `<p class="ok">Status: ${http.status} (${http.time_ms} ms)</p>`}
      </div>

      <div class="card">
        <h2>TLS</h2>
        ${tls.error
          ? `<p class="bad">${tls.error}</p>`
          : `
            <p class="ok">Certificado válido: ${tls.valid}</p>
            <p>Días restantes: ${tls.days_left}</p>
            <p>Issuer: ${tls.issuer}</p>
            <p>Subject: ${tls.subject}</p>
            <p>Desde: ${tls.valid_from}</p>
            <p>Hasta: ${tls.valid_to}</p>
          `
        }
      </div>

    </body>
  </html>
  `;
}

module.exports = { buildHtml };
