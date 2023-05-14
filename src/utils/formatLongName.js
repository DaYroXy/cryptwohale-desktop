const formatLongName = (name) => {
    return name.length > 8 ? `${name.slice(0,8)}...` : name
} 

export default formatLongName