import fs from 'fs';
import path from 'path';

const serverFile = path.resolve('build/server/server.js');
let content = fs.readFileSync(serverFile, 'utf-8');

const badImport = '@mjackson/node-fetch-server/dist/node-fetch-server.cjs';
const correctImport = '@mjackson/node-fetch-server';

if (content.includes(badImport)) {
  console.log(`🔧 Patching incorrect import in ${serverFile}`);
  content = content.replaceAll(badImport, correctImport);
  fs.writeFileSync(serverFile, content);
  console.log('✅ Patch applied.');
} else {
  console.log('ℹ️ No bad import found — no patch needed.');
}
