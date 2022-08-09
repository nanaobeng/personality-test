export const getQuestions = () => {
    return fetch (`http://localhost:8000/questions`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const deleteQuestion = (token:any, id:any) => {

    return fetch(`http://localhost:8000/admin/question/delete/${id}`, {
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
