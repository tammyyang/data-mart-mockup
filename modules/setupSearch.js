export function setupSearch(collectionsData, renderDatasets) {
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        const filteredData = {
            collections: collectionsData.collections.filter(dataset => 
                dataset.title.toLowerCase().includes(searchTerm) ||
                dataset.description.toLowerCase().includes(searchTerm) ||
                dataset.provider.toLowerCase().includes(searchTerm) ||
                dataset.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                dataset.model.toLowerCase().includes(searchTerm)
            )
        };
        
        renderDatasets(filteredData);
    });
}
