import {API} from '../../../../../config';
export const getQuestion = (id:number) => {
    return fetch (`${API}/question/${id}`, {
        method: "POST"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const updateQuestion = (token:any, id:number,values:any) => {
    return fetch(`${API}/admin/question/update/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            jwt_token: `${token}`
        },
        body: values
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
