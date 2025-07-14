import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']")

form.addEventListener("submit", handleSubmit);

function handleSubmit(ev) {
    ev.preventDefault();
    clearGallery();

    const query = input.value.trim();
    if (query === "") {
        iziToast.error({
            title: `Please write word`,
            position: "topRight"
        });
        return form.reset();
    }

    showLoader()
    setTimeout(() => {
        getImagesByQuery(query)
        .then(images => {
                if (images.length === 0) {
                    iziToast.error({
                        title: `Sorry, there are no images matching your search ${query}. Please try again!`,
                        position: "topRight"
                    });
                } else {
                    createGallery(images);
                };
            })
        .catch(error => {
                iziToast.error({
                    title: error.message,
                });
        })
            .finally(() => {
            hideLoader()
        })
    },1500)

    form.reset();
}