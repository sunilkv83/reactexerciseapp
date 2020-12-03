export const insert = data => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const update = data => {
    return {
        type: 'UPDATE',
        payload: data
    }

}
