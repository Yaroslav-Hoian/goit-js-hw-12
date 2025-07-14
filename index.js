import{a as f,S as m,i as n}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(i){return f.get("https://pixabay.com/api/",{params:{key:"51210907-49260f6ab8f7fee8b1bad09dd",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader-box"),y=new m(".gallery-item a",{captionsData:"alt",captionDelay:250});function g(i){const r=i.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:o,comments:d,downloads:p})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${l}">
            <img
                class="gallery-image"
                src="${s}"
                alt="${e}"
            />
        </a>
        <ul class="list-box">
            <li class="item-description">
                <h3 class="subtitle">Likes</h3>
                <p class="subtext">${t}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Views</h3>
                <p class="subtext">${o}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Comments</h3>
                <p class="subtext">${d}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Downloads</h3>
                <p class="subtext">${p}</p>
            </li>
        </ul>
    </li>
`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function L(){u.classList.remove("hidden")}function x(){u.classList.add("hidden")}const a=document.querySelector(".form"),S=a.querySelector("input[name='search-text']");a.addEventListener("submit",$);function $(i){i.preventDefault(),b();const r=S.value.trim();if(r==="")return n.error({title:"Please write word",position:"topRight"}),a.reset();L(),setTimeout(()=>{h(r).then(s=>{s.length===0?n.error({title:`Sorry, there are no images matching your search ${r}. Please try again!`,position:"topRight"}):g(s)}).catch(s=>{n.error({title:s.message})}).finally(()=>{x()})},1500),a.reset()}
//# sourceMappingURL=index.js.map
