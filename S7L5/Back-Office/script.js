
fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method: 'get',
    headers: new Headers ({
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1OWRhOTJjNmEwZDAwMTg0OTYzMTQiLCJpYXQiOjE3MDIyMDk3MjgsImV4cCI6MTcwMzQxOTMyOH0.UFQgfsYlyMPiiaJ-59g0-XGkmjjx27Wwh3oCjxIL7n0',
    }),

})
    .then(response => {
        console.log(response)
    })