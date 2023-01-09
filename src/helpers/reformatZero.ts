function reformatZero(timeNumber: Number): String {
    if (timeNumber < 10) {
        return `0${timeNumber}`
    } else {
        return `${timeNumber}`
    }
}
export default reformatZero;