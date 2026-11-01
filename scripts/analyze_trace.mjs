import fs from 'node:fs';

const trace = JSON.parse(fs.readFileSync('C:\\Users\\Fatima\\Desktop\\Trace-20261003T013811.json', 'utf8'));
const events = trace.traceEvents || trace;

const layouts = events.filter(e => e.name === 'Layout').sort((a, b) => (b.dur || 0) - (a.dur || 0));

console.log(`Total layout events: ${layouts.length}`);

for (let i = 0; i < Math.min(6, layouts.length); i++) {
  const l = layouts[i];
  console.log(`\n======================================================`);
  console.log(`Layout #${i + 1}: dur = ${(l.dur / 1000).toFixed(2)} ms, ts = ${l.ts}`);
  console.log(`dirtyObjects = ${l.args?.beginData?.dirtyObjects}, totalObjects = ${l.args?.beginData?.totalObjects}`);
  
  if (l.args?.beginData?.stackTrace) {
    console.log('Direct stackTrace:', JSON.stringify(l.args.beginData.stackTrace, null, 2));
  }

  // Look for enclosing or immediately preceding slices
  const windowMs = 25; // 25ms
  const windowUs = windowMs * 1000;
  const nearby = events.filter(e => e.ts >= l.ts - windowUs && e.ts <= l.ts + (l.dur || 0) + 5000);
  
  // Find JS FunctionCall, EvaluateScript, UpdateLayoutTree, ScheduleStyleRecalculation
  const interesting = nearby.filter(e => 
    ['FunctionCall', 'EvaluateScript', 'v8.compile', 'UpdateLayoutTree', 'RecalculateStyles', 'InvalidateLayout'].includes(e.name)
  );

  console.log('Nearby interesting events:');
  for (const item of interesting) {
    const relTs = ((item.ts - l.ts) / 1000).toFixed(2);
    const durMs = item.dur ? (item.dur / 1000).toFixed(2) : '-';
    console.log(`  [rel: ${relTs} ms, dur: ${durMs} ms] ${item.name} -> fn: ${item.args?.data?.functionName || ''}, url: ${item.args?.data?.url || ''}, line: ${item.args?.data?.lineNumber || ''}, col: ${item.args?.data?.columnNumber || ''}`);
  }
}
