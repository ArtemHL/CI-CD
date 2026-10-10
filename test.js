const http = require('http');

function check(path, expected) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:8080${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (data === expected) {
          console.log(`PASS: ${path}`);
          resolve();
        } else {
          console.error(`FAIL: ${path} — expected "${expected}", got "${data}"`);
          reject(new Error(`Test failed for ${path}`));
        }
      });
    }).on('error', reject);
  });
}

Promise.all([
  check('/api', 'pong'),
  check('/api/health', 'ok'),
  check('/api/bestProgrammer', 'ArtemHl')
])
  .then(() => process.exit(0))
  .catch(() => process.exit(1));