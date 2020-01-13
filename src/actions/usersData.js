export function usersFetchDataSuccess(users) {
    return {
        type: "DATA_SUCCES",
        users
    }
}

export function usersFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(persons => dispatch(usersFetchDataSuccess(persons)))
            .catch(()=>{});
    }
}

// export function usersFetchData(url) {
//     return (dispatch) => {
//         fetch('users.json').then(function (resp) {
//             return resp.text();
//         }).then(function (text) {
//             console.log(text);
//         })
//
//         }
//
// }