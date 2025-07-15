import axios from "axios";

export async function getImagesByQuery(query, page) {
    const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: "51210907-49260f6ab8f7fee8b1bad09dd",
            q: query,
            page: page,
            per_page: 15,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    });
    return response.data;
}
