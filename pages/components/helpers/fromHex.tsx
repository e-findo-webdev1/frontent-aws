function fromHex(hex: any){
    if (hex != undefined) {
        const str = decodeURI(decodeURIComponent(hex.replace(/(..)/g,'%$1')))
        return str.replace('%2F', '/')
    }
    else {
        return ''
    }
}

export default fromHex