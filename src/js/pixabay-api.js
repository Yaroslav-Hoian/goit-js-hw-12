import axios from "axios";

export function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "51210907-49260f6ab8f7fee8b1bad09dd",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
        .then(response => {
            return response.data.hits
        });
}