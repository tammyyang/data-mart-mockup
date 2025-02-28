import { createDatasetCard } from './createDatasetCard.js';

export function renderDatasets(data) {
    const container = document.getElementById('dataset-container');
    container.innerHTML = ''; // Clear loading message
    
    data.collections.forEach((dataset) => {
        const card = createDatasetCard(dataset);
        container.innerHTML += card;
    });
}
