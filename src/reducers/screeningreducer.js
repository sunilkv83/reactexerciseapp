export const screeningReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('screeningList'))
    switch (action.type) {
        case 'INSERT':
            list.push(action.payload)
            localStorage.setItem('screeningList', JSON.stringify(list))
            return { list, currentIndex: -1 }
        case 'UPDATE':
            list[state.currentIndex] = action.payload
            localStorage.setItem('screeningList', JSON.stringify(list))
            return { list, currentIndex: -1 }
            default:
                return state;
    }
}
export default screeningReducer;
