function replaceUrls(text, placeholder = '<URL>') {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlPattern, placeholder);
}

export default replaceUrls