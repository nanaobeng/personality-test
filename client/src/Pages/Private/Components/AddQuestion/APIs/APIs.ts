export const getQuestion = (id:number) => {
    return fetch (`http://localhost:8000/question/${id}`, {
        method: "POST"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

export const addQuestion = (token:any,values:any) => {
    return fetch(`http://localhost:8000/admin/question/create`, {
        method: 'POST',
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
