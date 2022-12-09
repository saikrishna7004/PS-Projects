let data = {
    "Employees": [{
        "Name": "Scott",
        "Address": "Hyderabad",
        "Salary": 500000,
        "DateOfJoining": "23-1-2012"
    },
    {
        "Name": "Ram",
        "Address": "Hyderabad",
        "Salary": 300000,
        "DateOfJoining": "23-12-2010"
    },
    {
        "Name": "John",
        "Address": "Bangalore",
        "Salary": 700000,
        "DateOfJoining": "23-12-2010"
    }
    ]
}

let d2 = ``
data.Employees.forEach(e => {
    console.log(e)
    if (e.Salary > 50000 && e.DateOfJoining.substring(3, 5) == 12) {
        d2 += `
        <tr>
            <td>${e.Name}</td>
            <td>${e.Address}</td>
            <td>${e.Salary}</td>
            <td>${e.DateOfJoining}</td>
        </tr>`
    }
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