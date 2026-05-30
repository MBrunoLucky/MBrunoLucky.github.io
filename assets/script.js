
(function(){
 const c=document.getElementById('cookieBanner');
 if(c && !localStorage.getItem('iaesp_cookies_ok')) c.classList.add('show');
 window.acceptCookies=function(){localStorage.setItem('iaesp_cookies_ok','1'); if(c)c.classList.remove('show')};
 let state={q:'',cat:'todo'};
 function apply(){
   const cards=[...document.querySelectorAll('[data-search][data-filter]')];
   let visible=0;
   const q=(state.q||'').trim().toLowerCase();
   cards.forEach(el=>{
     const matchText=!q || (el.dataset.search||'').toLowerCase().includes(q);
     const matchCat=state.cat==='todo' || el.dataset.filter===state.cat;
     const show=matchText && matchCat;
     el.classList.toggle('is-hidden',!show);
     el.style.display='';
     if(show) visible++;
   });
   const counter=document.getElementById('resultCount');
   if(counter) counter.textContent= visible + (visible===1?' resultado':' resultados');
   const empty=document.getElementById('emptyState');
   if(empty) empty.hidden=visible!==0;
 }
 window.filterCards=function(q){state.q=q||'';apply()};
 window.setFilter=function(cat){state.cat=cat||'todo';document.querySelectorAll('.filterbar button').forEach(b=>b.classList.toggle('active',b.dataset.cat===state.cat));apply()};
 window.clearToolFilters=function(){state={q:'',cat:'todo'};const input=document.getElementById('toolSearch');if(input)input.value='';document.querySelectorAll('.filterbar button').forEach(b=>b.classList.toggle('active',b.dataset.cat==='todo'));apply()};
 apply();
})();
