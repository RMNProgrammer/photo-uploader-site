const generateRandomId = () => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for(let i = 0; i < 31; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = generateRandomId