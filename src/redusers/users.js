let initialState = {
    users: [],
    fetching: false,
    fetched: false,
    error: null
}

export function users(state = initialState, action) {
    switch (action.type) {
        case 'DATA_SUCCES':
            return {
                ...state,
                fetching:false,
                fetched: true,
                users:action.payLoad
            };

        case 'DATA_ERROR':
            return {
            ...state,
            fetching:false,
            fetched: true,
            error:action.payLoad
        };

        case 'DATA_LOADING':
             return {
                 ...state,
                 fetching:true
             };

        default:
            return state;
    }
}
