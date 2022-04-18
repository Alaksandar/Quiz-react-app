const removeEllipsisFromStr = str => {
    let arr = str.split('')
    arr.length -=3
    return arr.join('')
    
}

export default removeEllipsisFromStr