function fromHex(hex: any){
    const str = decodeURI(decodeURIComponent(hex.replace(/(..)/g,'%$1')))
    return str
}

export default fromHex