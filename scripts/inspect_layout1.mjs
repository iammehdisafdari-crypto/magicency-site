import fs from 'node:fs';

const trace = JSON.parse(fs.readFileSync('C:\\Users\\Fatima\\Desktop\\Trace-20261003T013811.json', 'utf8'));
const events = trace.traceEvents || trace;

// Target Layout #1: ts = 20975835690, dur = 110.66ms
const targetTs = 20975835690;
const windowBefore = 50000; // 50ms before
const windowAfter = 120000; // 120ms after

const slices = events.filter(e => e.ts >= targetTs - windowBefore && e.ts <= targetTs + windowAfter)
  .sort((a, b) => a.ts - b.ts);

console.log(`Found ${slices.length} events around Layout #1:`);
for (const s of slices) {
  const rel = ((s.ts - targetTs) / 1000).toFixed(2);
  const dur = s.dur ? (s.dur / 1000).toFixed(2) : '-';
  const detail = s.args?.data ? JSON.stringify(s.args.data) : (s.args?.beginData ? JSON.stringify(s.args.beginData) : '');
  if (['Layout', 'UpdateLayoutTree', 'RecalculateStyles', 'FunctionCall', 'EvaluateScript', 'v8.compile', 'RunTask', 'HitTest'].includes(s.name)) {
    console.log(`[${rel} ms | dur: ${dur} ms] ${s.name} (${s.cat}) ${detail}`);
  }
}
