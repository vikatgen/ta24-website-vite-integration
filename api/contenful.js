import axios from "axios";

const contentfulAPI = axios.create({
    baseURL: "https://cdn.contentful.com",
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_CONTENTFUL_DELIVERY_API_KEY}`,
        "Content-Type": "application/json"
    }
})

export default contentfulAPI;