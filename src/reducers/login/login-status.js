export default function (state = { isLoggedIn: false }, action) {
    console.log(action)
    switch (action.type) {
        case 'toggleAuth':
            return ({
                isLoggedIn:!state.isLoggedIn
            });
        default:
            return state;
    }
}