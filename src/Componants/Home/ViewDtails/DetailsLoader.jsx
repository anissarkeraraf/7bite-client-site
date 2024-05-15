import { useParams } from "react-router-dom";

export const DetailsLoader = async ({ params }) => {
    const { id } = params;
    try {
        const response = await fetch(`https://assignment-eleven-server-taupe.vercel.app/service/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to load treatments", error);
        return {};
    }
};
