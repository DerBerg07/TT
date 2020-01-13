export function users(state = [], action) {
    switch (action.type) {
        case 'DATA_SUCCES':
            return action.users;
        default:
            return state;
    }
}