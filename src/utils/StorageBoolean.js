export default (key, defaultValue) => {
    const item = localStorage.getItem(key);
    return item !== null ? item === 'true' : defaultValue;
}