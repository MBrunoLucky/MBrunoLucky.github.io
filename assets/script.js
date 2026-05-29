
function acceptCookies(){localStorage.setItem('iage_cookie_ok','1');document.getElementById('cookieBox')?.setAttribute('hidden','hidden')}
window.addEventListener('DOMContentLoaded',()=>{if(!localStorage.getItem('iage_cookie_ok'))document.getElementById('cookieBox')?.removeAttribute('hidden')});
