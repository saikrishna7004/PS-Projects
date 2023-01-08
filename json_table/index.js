async function getData() {
    let data = await fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json")
    data = await data.json()

    let d2 = ``
    data.Employees.forEach(e => {
        // console.log(e)
        // if (e.Salary > 50000 && e.DateOfJoining.substring(3, 5) == 12) {
            d2 += `
            <tr>
                <td>${e.Name}</td>
                <td>${e.Address}</td>
                <td>${e.Salary}</td>
                <td>${e.DateOfJoining}</td>
            </tr>`
        // }
    });

    dataTable.innerHTML = `
    <table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Date Of Joining</th>
        </tr>
    </thead>
    <tbody>` + d2 + `</tbody></table>`

    data.Employees.forEach(e => {
        if (e.Salary > 50000 && e.DateOfJoining.substring(3, 5) == 12) {
            console.log(e)
        }
    });
}