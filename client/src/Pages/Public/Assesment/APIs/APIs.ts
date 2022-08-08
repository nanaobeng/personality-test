export const getQuestions = () => {
    return fetch (`http://localhost:8000/questions`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })

    .catch(err => console.log(err))
};

