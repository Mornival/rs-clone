export const removeElements = () => {
    const searchBox = document.querySelector('.block-search') as HTMLElement;
    const loupeBox = document.querySelector('.loupe') as HTMLElement;

    if (searchBox && loupeBox) {
        searchBox.style.display = 'none';
        loupeBox.style.display = 'none';
    }
}