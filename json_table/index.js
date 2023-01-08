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


    let r1 = "", r2 = ""

    data.Employees.forEach(e => {
        if (e.Salary > 50000) {
            r1 += `${e.Name}<br>`
        }
        if (e.DateOfJoining.substring(3, 5) == 12) {
            r2 += `${e.Name}<br>`
        }
    });

    res1.innerHTML = `<h3>Salary>50000</h3><div>` + r1
    res2.innerHTML = `<h3>Joined in December</h3><div>` + r2

}