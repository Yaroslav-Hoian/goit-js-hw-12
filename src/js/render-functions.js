import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector(".gallery");
const loaderBox = document.querySelector(".loader-box")

const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: "alt",
    captionDelay: 250
})

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
            />
        </a>
        <ul class="list-box">
            <li class="item-description">
                <h3 class="subtitle">Likes</h3>
                <p class="subtext">${likes}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Views</h3>
                <p class="subtext">${views}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Comments</h3>
                <p class="subtext">${comments}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Downloads</h3>
                <p class="subtext">${downloads}</p>
            </li>
        </ul>
    </li>
`)
        .join('');

    list.insertAdjacentHTML("beforeend", markup);

    lightbox.refresh();
}

export function clearGallery() {
    list.innerHTML = '';
}

export function showLoader() {
    loaderBox.classList.remove("hidden");
}

export function hideLoader() {
    loaderBox.classList.add("hidden");
}