import fs from 'node:fs';

const trace = JSON.parse(fs.readFileSync('C:\\Users\\Fatima\\Desktop\\Trace-20261003T013811.json', 'utf8'));
const events = trace.traceEvents || trace;

// Cluster around ts = 20976500000 to 20976600000
const startTs = 20976500000;
const endTs = 20976600000;

const slices = events.filter(e => e.ts >= startTs && e.ts <= endTs && e.name !== 'RunTask')
  .sort((a, b) => a.ts - b.ts);

console.log(`Found ${slices.length} events in cluster:`);
for (const s of slices) {
  const rel = ((s.ts - startTs) / 1000).toFixed(2);
  const dur = s.dur ? (s.dur / 1000).toFixed(2) : '-';
  const detail = s.args?.data ? JSON.stringify(s.args.data) : (s.args?.beginData ? JSON.stringify(s.args.beginData) : '');
  if (['Layout', 'UpdateLayoutTree', 'RecalculateStyles', 'FunctionCall', 'EvaluateScript', 'v8.compile', 'InvalidateLayout', 'EventDispatch', 'ScheduleStyleRecalculation'].includes(s.name)) {
    console.log(`[${rel} ms | dur: ${dur} ms] ${s.name} (${s.cat}) ${detail}`);
  }
}
