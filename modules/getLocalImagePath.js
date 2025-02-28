export function getLocalImagePath(index, provider) {
    const [firstName, lastName] = provider.split(' ');
    return `images/${index + 1}.jpg`;
}
