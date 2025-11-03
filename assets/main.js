// 현재 페이지 표시
const path = location.pathname.replace(/\/+/g,'/'); // normalize
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href') && path.endsWith(a.getAttribute('href'))) {
    a.setAttribute('aria-current','page');
  }
});

// 복사 버튼(있으면 동작)
document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const text = btn.getAttribute('data-copy') || '';
    if(!text) return;
    navigator.clipboard?.writeText(text).then(()=>{
      const t=btn.textContent; btn.textContent='복사됨'; btn.disabled=true;
      setTimeout(()=>{ btn.textContent=t; btn.disabled=false; },1200);
    });
  });
});
