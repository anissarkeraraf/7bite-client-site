export const servicesLoader = async () => {
    try {
        const response = await fetch('https://assignment-eleven-server-taupe.vercel.app/services');
        if (!response.ok) {
            throw new Error(`Failed to fetch services: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading services:', error);
        return [];
    }
};
