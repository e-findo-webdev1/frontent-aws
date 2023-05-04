function toHex(str: string){
    const hex = encodeURIComponent(str)
        .split('').map(function(v){
            return v.charCodeAt(0).toString(16)
        }).join('')

    return hex
}

export default toHex