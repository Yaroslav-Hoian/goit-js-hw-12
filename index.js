import{a as q,S as $,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function f(r,e){return(await q.get("https://pixabay.com/api/",{params:{key:"51210907-49260f6ab8f7fee8b1bad09dd",q:r,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector("[type='button']"),P=new $(".gallery-item a",{captionsData:"alt",captionDelay:250});function b(r){const e=r.hits.map(({webformatURL:o,largeImageURL:i,tags:t,likes:s,views:n,comments:v,downloads:x})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${i}">
            <img
                class="gallery-image"
                src="${o}"
                alt="${t}"
            />
        </a>
        <ul class="list-box">
            <li class="item-description">
                <h3 class="subtitle">Likes</h3>
                <p class="subtext">${s}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Views</h3>
                <p class="subtext">${n}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Comments</h3>
                <p class="subtext">${v}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Downloads</h3>
                <p class="subtext">${x}</p>
            </li>
        </ul>
    </li>
`).join("");m.insertAdjacentHTML("beforeend",e),P.refresh()}function M(){m.innerHTML=""}function L(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}function S(){g.classList.remove("hidden")}function p(){g.classList.add("hidden")}const d=document.querySelector(".form"),O=d.querySelector("input[name='search-text']"),T=document.querySelector("[type='button']");d.addEventListener("submit",B);let l="",c=1,u=0,h=0;function B(r){if(r.preventDefault(),p(),M(),c=1,l=O.value.trim(),l==="")return a.error({title:"Please write word",position:"topRight"}),d.reset();L(),setTimeout(async()=>{try{const e=await f(l,c);if(h=e.totalHits,u=e.hits.length,u===0)return a.error({title:`Sorry, there are no images matching your search ${l}. Please try again!`,position:"topRight"});b(e),h>u?S():a.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(e){a.error({title:e.message})}finally{w()}},1500),d.reset()}T.addEventListener("click",()=>{c++,p(),L();const r=Math.ceil(h/u);setTimeout(async()=>{try{const e=await f(l,c);b(e),c>=r?(p(),a.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})):S();const o=document.querySelector(".gallery-item");if(o){const i=o.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch(e){a.error({title:e.message})}finally{w()}},1500)});
//# sourceMappingURL=index.js.map
