const getFillerStyle = (width: number) => {
    let widthPercent = "w-0"
    let bgcolor = "bg-green-400"
    if ( width == 0 ) {
        widthPercent = "w-0"
    }
    if ( width > 0 && width < 10 ) {
        widthPercent = "w-3"
    }
    if ( width >= 10 && width < 25 ) {
        widthPercent = "w-1/5"
    }
    if ( width >= 25 && width < 45 ) {
        widthPercent = "w-1/4"
    }
    if ( width >= 45 && width < 75 ) {
        widthPercent = "w-1/2"
        bgcolor = "bg-yellow-200"
    }
    if ( width >= 75 && width < 100 ) {
        widthPercent = "w-3/4"
        bgcolor = "bg-red-600"
    }
    if ( width == 100 ) {
        widthPercent = "w-full"
    }

    return "h-full " + widthPercent + " " + bgcolor
}

export default getFillerStyle