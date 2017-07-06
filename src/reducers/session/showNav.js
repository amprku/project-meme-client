export default function (state = { ToggleLeftNav: false }, action) {
    console.log(action)
    switch (action.type) {
        case 'toggleLeftNav':
            return ({
                ToggleLeftNav:!state.ToggleLeftNav
            });
        default:
            return state;
    }
}