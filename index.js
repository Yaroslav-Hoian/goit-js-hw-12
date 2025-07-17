import{a as x,S as q,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function d(i,e){return(await x.get("https://pixabay.com/api/",{params:{key:"51210907-49260f6ab8f7fee8b1bad09dd",q:i,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=document.querySelector("[type='button']"),$=new q(".gallery-item a",{captionsData:"alt",captionDelay:250});function m(i){const e=i.hits.map(({webformatURL:s,largeImageURL:r,tags:t,likes:o,views:l,comments:w,downloads:S})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img
                class="gallery-image"
                src="${s}"
                alt="${t}"
            />
        </a>
        <ul class="list-box">
            <li class="item-description">
                <h3 class="subtitle">Likes</h3>
                <p class="subtext">${o}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Views</h3>
                <p class="subtext">${l}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Comments</h3>
                <p class="subtext">${w}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Downloads</h3>
                <p class="subtext">${S}</p>
            </li>
        </ul>
    </li>
`).join("");h.insertAdjacentHTML("beforeend",e),$.refresh()}function P(){h.innerHTML=""}function y(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function b(){f.classList.remove("hidden")}function L(){f.classList.add("hidden")}const u=document.querySelector(".form"),M=u.querySelector("input[name='search-text']"),O=document.querySelector("[type='button']");u.addEventListener("submit",B);let v="",a=1;const R=15;let c=0;async function B(i){i.preventDefault(),L(),P(),a=1;const e=M.value.trim();if(v=e,e===""){n.error({title:"Please write word",position:"topRight"});return}y();try{const s=await d(e,a),r=s.totalHits;if(s.hits.length===0){n.error({title:`Sorry, there are no images matching your search ${e}. Please try again!`,position:"topRight"});return}m(s),c=Math.ceil(r/R),a>=c?n.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b(),u.reset()}catch(s){n.error({title:s.message})}finally{g()}}O.addEventListener("click",H);async function H(i){a++,L(),y();try{const e=await d(v,a);if(e.hits.length===0){n.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}a>=c?n.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b(),m(e);let s=document.querySelector(".gallery-item");if(s){const r=s.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}catch(e){n.error({title:e.message})}finally{g()}}
//# sourceMappingURL=index.js.map
