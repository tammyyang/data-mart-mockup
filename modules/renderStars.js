export function renderStars(popularity) {
    // Handle undefined or null values
    if (popularity === undefined || popularity === null) {
        return 'No rating';
    }
    
    const fullStars = Math.floor(popularity);
    const halfStar = popularity % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (halfStar) {
        stars += '★';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars + ' ' + popularity.toFixed(1);
}
