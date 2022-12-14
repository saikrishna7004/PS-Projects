function getData() {
    fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Test name',
            username: 'Test-Username',
            rollno: 'test-roll'
        })
    }).then(data => data.json()).then(data => {
        console.log(data)
        res.innerHTML = JSON.stringify(data, undefined, 4);
    }).catch(e=>{
        console.log(e)
        Swal.fire('Error', 'An error occured while fetching', 'error')
    })
}