module.exports = function check(str, bracketsConfig) {
    const bracket = bracketsConfig.map(bracket => bracket.join(''))

    for (let i = 0; i < bracket.length;) {
        if (str.includes(bracket[i])) {
            str = str.replace(bracket[i], '')
            i = 0

        }
        else i++
    }
    return str === ''
}
