import fs from 'node:fs';

const trace = JSON.parse(fs.readFileSync('C:\\Users\\Fatima\\Desktop\\Trace-20261003T013811.json', 'utf8'));
const events = trace.traceEvents || trace;

// Target Layout #4: ts = 20977099276
const targetTs = 20977099276;
const windowUs = 15000; // 15ms

const slices = events.filter(e => e.ts >= targetTs - windowUs && e.ts <= targetTs + 25000)
  .sort((a, b) => a.ts - b.ts);

console.log(`Found ${slices.length} events around Layout #4:`);
for (const s of slices) {
  const rel = ((s.ts - targetTs) / 1000).toFixed(2);
  const dur = s.dur ? (s.dur / 1000).toFixed(2) : '-';
  const detail = s.args?.data ? JSON.stringify(s.args.data) : (s.args?.beginData ? JSON.stringify(s.args.beginData) : '');
  console.log(`[${rel} ms | dur: ${dur} ms] ${s.name} (${s.cat}) ${detail}`);
}
