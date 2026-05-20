d3.csv('https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/renderer-specific/adbds.csv').then(data => {
  const measure = 'Aminotransferase, alanine';
  const rows = data.filter(d => d.TEST === measure && d.USUBJID && d.VISITN && d.STRESN);
  const ids = [...new Set(rows.map(d => d.USUBJID))];
  const points = ids.map(id => { const subject=rows.filter(d=>d.USUBJID===id).sort((a,b)=>+a.VISITN-+b.VISITN); return subject.length>1 ? {x:+subject[0].STRESN, y:+subject.at(-1).STRESN, id} : null; }).filter(Boolean);
  new Chart(document.getElementById('chart'), { type:'scatter', data:{ datasets:[{ label:measure, data:points, backgroundColor:'#2563eb' }] }, options:{responsive:true,plugins:{title:{display:true,text:'Baseline vs latest result'}, tooltip:{callbacks:{label:ctx=>`${ctx.raw.id}: ${ctx.raw.x.toFixed(1)} → ${ctx.raw.y.toFixed(1)}`}}},scales:{x:{title:{display:true,text:'Baseline'}},y:{title:{display:true,text:'Latest'}}}} });
});
