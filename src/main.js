import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
} from "./js/render-functions";

const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']");
const btnLoad = document.querySelector("[type='button']");

form.addEventListener("submit", handleSubmit);

let searchText = "";
let page = 1;
const limit = 15;
let totalPage = 0;

async function handleSubmit(ev) {
    ev.preventDefault();
    hideLoadMoreButton();
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
    };

    showLoader();

    try {
        const posts = await getImagesByQuery(inputText, page)
        const totalHits = posts.totalHits;

        if (posts.hits.length === 0) {
            iziToast.error({
                title: `Sorry, there are no images matching your search ${inputText}. Please try again!`,
                position: "topRight"
            });
            return;
        };

        createGallery(posts);

        totalPage = Math.ceil(totalHits / limit);

        if (page >= totalPage) {
            iziToast.info({
                title: `We're sorry, but you've reached the end of search results.`,
                position: "topRight"
            });
        } else {
            showLoadMoreButton();
        }

        form.reset();

    } catch (error) {
        iziToast.error({
            title: error.message,
        });
    }
    finally {
        hideLoader();
    }
};

btnLoad.addEventListener("click", handleLoad);

async function handleLoad(ev) {
    page++

    hideLoadMoreButton();
    showLoader();

    try {
        const posts = await getImagesByQuery(searchText, page);

        if (posts.hits.length === 0) {
            iziToast.info({
                title: `We're sorry, but you've reached the end of search results.`,
                position: "topRight"
            });
            return;
        };

        if (page >= totalPage) {
            iziToast.info({
                title: `We're sorry, but you've reached the end of search results.`,
                position: "topRight"
            });
        } else {
            showLoadMoreButton();
        }

        createGallery(posts);

        let card = document.querySelector(".gallery-item");
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
        hideLoader();
    }
};

