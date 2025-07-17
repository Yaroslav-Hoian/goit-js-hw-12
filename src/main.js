import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']");
const btnLoad = document.querySelector("[type='button']");

form.addEventListener("submit", handleSubmit);

let searchText = ""
let page = 1;
let limit = 0;
let totalHits = 0;
let totalPage = 0;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleSubmit(ev) {
    ev.preventDefault();
    hideLoadMoreButton()
    clearGallery();
    page = 1;

    const inputText = input.value.trim();
    searchText = inputText;

    if (inputText === "") {
        iziToast.error({
            title: `Please write word`,
            position: "topRight"
        });
        return;
    }

    showLoader()

    try {
        await delay(1500);

        const posts = await getImagesByQuery(inputText, page)
        totalHits = posts.totalHits;
        limit = posts.hits.length;

        if (limit === 0) {
            return iziToast.error({
                title: `Sorry, there are no images matching your search ${inputText}. Please try again!`,
                position: "topRight"
            })
        }

        createGallery(posts);

        totalPage = Math.ceil(totalHits / limit);

        if (totalHits > limit) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                title: `We're sorry, but you've reached the end of search results.`,
                position: "topRight"
            });
        }
    } catch (error) {
        iziToast.error({
            title: error.message,
        });
    }
    finally {
        hideLoader()
    }

    form.reset();
}

btnLoad.addEventListener("click", handleLoad)

async function handleLoad(ev) {
    page++

    hideLoadMoreButton()
    showLoader()

    try {
        await delay(1500);
        const posts = await getImagesByQuery(searchText, page);
        createGallery(posts);

        if (page < totalPage) {
            showLoadMoreButton()
        } else {
            iziToast.info({
                title: `We're sorry, but you've reached the end of search results.`,
                position: "topRight"
            });
        }

        const card = document.querySelector(".gallery-item");
        if (card) {
            const cardHeight = card.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth",
            });
        }
    }
    catch (error) {
        iziToast.error({
            title: error.message,
        });
    }
    finally {
        hideLoader()
    }
}

