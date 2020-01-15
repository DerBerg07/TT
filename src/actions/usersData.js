export function usersFetchDataSuccess(users) {
    return {
        type: "DATA_SUCCES",
        payLoad:users
    }
}

export function usersFetchDataError(dataError) {
    return {
        type: "DATA_ERROR",
        payLoad:dataError
    }
}

export function usersFetchDataLoading() {
    return {
        type: "DATA_LOADING",
        payLoad: "loading"
    }
}


export function usersFetchData(url) {
    return (dispatch) => {
      dispatch(usersFetchDataLoading())
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(users => dispatch(usersFetchDataSuccess(users)))
            .catch((err)=>{
                dispatch(usersFetchDataError(err));
            });
    }
}
