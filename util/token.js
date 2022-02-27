export const writeJWT = (token) => {
    window.localStorage.setItem('token', token)
}

export const readJWT = () => {
    return window.localStorage.getItem('token')
}
