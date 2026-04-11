const res=document.getElementById('res');
function run(){
  const a=parseFloat(document.getElementById('a').value||'0');
  const b=parseFloat(document.getElementById('b').value||'0');
  if(a===b){res.innerText='Equal'; return;}
  const diff = (a - b).toFixed(2);
  res.innerText = a>b ? 'A better by ' + diff : 'B better by ' + (-diff);
}