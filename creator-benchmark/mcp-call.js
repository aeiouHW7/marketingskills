// Generic RedFox MCP tool caller via stdio (zero-dep)
// Usage: node mcp-call.js <toolName> <jsonArgs>
const { spawn } = require('child_process');

const [, , toolName, argsJson] = process.argv;
if (!toolName) { console.error('usage: node mcp-call.js <tool> <jsonArgs>'); process.exit(1); }

const child = spawn('npx', ['-y', 'redfox-mcp-server@latest'], {
  env: { ...process.env, REDFOX_API_KEY: require('fs').readFileSync('C:/Users/Administrator/.workbuddy/redfox.key', 'utf8').trim() },
  shell: true, stdio: ['pipe', 'pipe', 'pipe'],
});

let buf = '';
child.stdout.on('data', d => {
  buf += d.toString();
  let idx;
  while ((idx = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, idx).trim(); buf = buf.slice(idx + 1);
    if (!line) continue;
    let msg; try { msg = JSON.parse(line); } catch { continue; }
    if (msg.id === 1) {
      child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
      if (toolName === '__list') {
        child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list' }) + '\n');
      } else {
        child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: toolName, arguments: JSON.parse(argsJson || '{}') } }) + '\n');
      }
    } else if (msg.id === 2) {
      let out;
      if (toolName === '__list') {
        out = msg.result.tools.map(t => `${t.name} :: ${JSON.stringify(t.inputSchema)}`).join('\n');
      } else {
        out = (msg.result && msg.result.content) ? msg.result.content.map(c => c.text).join('\n') : JSON.stringify(msg);
      }
      console.log(out);
      child.kill(); process.exit(0);
    }
  }
});
child.stderr.on('data', d => { const t = d.toString(); if (!/npm warn|deprecated/i.test(t)) process.stderr.write(t); });

child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'wb-client', version: '1.0' } } }) + '\n');
setTimeout(() => { console.error('TIMEOUT after 120s'); child.kill(); process.exit(2); }, 120000);
