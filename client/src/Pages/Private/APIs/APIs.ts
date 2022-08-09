import {API} from '../../../config';
export const getQuestions = () => {
    return fetch (`${API}/questions`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const deleteQuestion = (token:any, id:any) => {

    return fetch(`${API}/admin/question/delete/${id}`, {
        method: 'DELETE',
        headers: { 
            Accept: 'application/json',
            jwt_token: `${token}`
        },
        body: id
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
