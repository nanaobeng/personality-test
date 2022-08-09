import {API} from '../../../../config';
export const getQuestions = () => {
    return fetch (`${API}/questions`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

