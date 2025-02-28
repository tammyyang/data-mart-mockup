export async function fetchData() {
    try {
        const response = await fetch('collections.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching collections:', error);
        document.getElementById('dataset-container').innerHTML = 
            '<div class="error">Failed to load datasets. Please try again later.</div>';
        return null;
    }
}
