export function createDatasetCard(dataset) {
    let modelBadge = '';
    
    if (dataset.model === 'subscription') {
        modelBadge = '<span class="model-badge subscription">Subscription</span>';
    } else if (dataset.model === 'one-time') {
        modelBadge = '<span class="model-badge one-time">One-time</span>';
    } else if (dataset.model === 'free') {
        modelBadge = '<span class="model-badge free">Free</span>';
    }
    
    // Format price display based on model type
    let priceDisplay = dataset.price;
    if (dataset.model === 'subscription') {
        priceDisplay = `${dataset.price}/month`;
    }
        
    return `
        <div class="dataset-card">
            <img src="${dataset.image}" alt="${dataset.title} dataset" class="dataset-img">
            <div class="dataset-content">
                <div class="dataset-provider">
                    <span class="provider-logo"></span>
                    ${dataset.provider}
                </div>
                <h3 class="dataset-title">${dataset.title}</h3>
                <p class="dataset-desc">${dataset.description}</p>
                <div class="dataset-meta">
                    <div class="dataset-popularity">${renderStars(dataset.popularity)}</div>
                    <div class="dataset-price">${priceDisplay}</div>
                </div>
                <div class="model-container">
                    ${modelBadge}
                </div>
                <div class="tags">
                    ${dataset.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${dataset.website}" target="_blank" class="btn btn-primary card-btn">Request Access</a>
            </div>
        </div>
    `;
}
