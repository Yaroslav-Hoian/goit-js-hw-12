import{a as P,S as M,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function p(r,e){return(await P.get("https://pixabay.com/api/",{params:{key:"51210907-49260f6ab8f7fee8b1bad09dd",q:r,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector("[type='button']"),O=new M(".gallery-item a",{captionsData:"alt",captionDelay:250});function y(r){const e=r.hits.map(({webformatURL:s,largeImageURL:i,tags:t,likes:o,views:n,comments:q,downloads:$})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${i}">
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
                <p class="subtext">${n}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Comments</h3>
                <p class="subtext">${q}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Downloads</h3>
                <p class="subtext">${$}</p>
            </li>
        </ul>
    </li>
`).join("");h.insertAdjacentHTML("beforeend",e),O.refresh()}function T(){h.innerHTML=""}function g(){f.classList.remove("hidden")}function b(){f.classList.add("hidden")}function L(){m.classList.remove("hidden")}function w(){m.classList.add("hidden")}const d=document.querySelector(".form"),B=d.querySelector("input[name='search-text']"),H=document.querySelector("[type='button']");d.addEventListener("submit",R);let S="",l=1,c=0,u=0,v=0;function x(r){return new Promise(e=>setTimeout(e,r))}async function R(r){r.preventDefault(),w(),T(),l=1;const e=B.value.trim();if(S=e,e===""){a.error({title:"Please write word",position:"topRight"});return}g();try{await x(1500);const s=await p(e,l);if(u=s.totalHits,c=s.hits.length,c===0)return a.error({title:`Sorry, there are no images matching your search ${e}. Please try again!`,position:"topRight"});y(s),v=Math.ceil(u/c),u>c?L():a.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(s){a.error({title:s.message})}finally{b()}d.reset()}H.addEventListener("click",D);async function D(r){l++,w(),g();try{await x(1500);const e=await p(S,l);y(e),l<v?L():a.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"});const s=document.querySelector(".gallery-item");if(s){const i=s.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch(e){a.error({title:e.message})}finally{b()}}
//# sourceMappingURL=index.js.map
