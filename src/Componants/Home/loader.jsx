// loader function
export const treatmentsLoader = async () => {
    try {
        const response = await fetch('https://assignment-eleven-server-taupe.vercel.app/service');
        // console.log("Response status:", response.status); 

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); 
        return data;
    } catch (error) {
        console.error("Failed to load treatments", error);
        return []; 
    }
};
