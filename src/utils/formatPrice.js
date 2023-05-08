const formatPrice = (price) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    } else {
      return `$${price.toFixed(2)}`;
    }
}

export default formatPrice

