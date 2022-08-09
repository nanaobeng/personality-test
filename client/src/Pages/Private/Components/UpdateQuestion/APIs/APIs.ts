export const getQuestion = (id:number) => {
    return fetch (`http://localhost:8000/question/${id}`, {
        method: "POST"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};


export const updateQuestion = (token:any, id:number,values:any) => {
    return fetch(`http://localhost:8000/admin/question/update/${id}`, {
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
