
(function(){
 const c=document.getElementById('cookieBanner');
 if(c && !localStorage.getItem('iaesp_cookies_ok')) c.classList.add('show');
 window.acceptCookies=function(){localStorage.setItem('iaesp_cookies_ok','1'); if(c)c.classList.remove('show')}
 window.filterCards=function(q){q=(q||'').toLowerCase();document.querySelectorAll('[data-search]').forEach(el=>{el.style.display=el.dataset.search.toLowerCase().includes(q)?'':'none'})}
 window.setFilter=function(cat){document.querySelectorAll('[data-filter]').forEach(el=>{el.style.display=(cat==='todo'||el.dataset.filter===cat)?'':'none'});document.querySelectorAll('.filterbar button').forEach(b=>b.classList.toggle('active',b.dataset.cat===cat))}
})();
