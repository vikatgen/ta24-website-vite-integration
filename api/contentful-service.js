import contentfulAPI from "./contenful.js";

export const getFrontPageData = async () => {
    const response = await contentfulAPI
        .get(`/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/master/entries`, {
            params: {
                content_type: "frontpage"
            }
        });

    const data = response.json();
    return data;
}