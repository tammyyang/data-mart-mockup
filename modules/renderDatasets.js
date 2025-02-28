export function renderDatasets(data) {
    const container = document.getElementById('dataset-container');
    container.innerHTML = ''; // Clear loading message
    
    data.collections.forEach((dataset, index) => {
        const localImagePath = getLocalImagePath(index, dataset.provider);
        dataset.image = localImagePath;
        const card = createDatasetCard(dataset);
        container.innerHTML += card;
    });
}
