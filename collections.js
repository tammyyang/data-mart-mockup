import { fetchData } from './modules/fetchData.js';
import { renderDatasets } from './modules/renderDatasets.js';
import { createDatasetCard } from './modules/createDatasetCard.js';
import { renderStars } from './modules/renderStars.js';
import { setupSearch } from './modules/setupSearch.js';
import { getLocalImagePath } from './modules/getLocalImagePath.js';

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
        .then(data => {
            if (data) {
                renderDatasets(data);
                setupSearch(data, renderDatasets);
            }
        })
        .catch(error => {
            console.error('Error fetching collections:', error);
            document.getElementById('dataset-container').innerHTML = 
                '<div class="error">Failed to load datasets. Please try again later.</div>';
        });
});
