const managerCard = (data) => {
    return `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data[0].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Role: ${data[0].role}</h6>
                <h7 class="card-subtitle mb-2 text-muted">ID: ${data[0].id}</h7>
                <p class="card-text">Office Number: ${data[0].officeNum}</p>
                <a href="mailto:${data[0].email}" target="_blank" class="card-link">Contact Via Email</a>
            </div>
        </div>
    `;
};

const engineerCard = (data) => {
    if (!data) {
        return '';
    }

    let y = '';
    for (let i = 0; i < data.length; i++) {
        let x = `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Role: ${data[i].role}</h6>
                    <h7 class="card-subtitle mb-2 text-muted">ID: ${data[i].id}</h7>
                    <p class="card-text"><a href="https://github.com/${data[i].github}" class="card-link">Check Github</a></p>
                    <a href="mailto:${data[i].email}" target="_blank" class="card-link">Contact Via Email</a>
                </div>
            </div>
        `;
        y = y + x;
    }
    return y;
};

const internCard = (data) => {
    if (!data) {
        return '';
    }

    let y = '';
    for (let i = 0; i < data.length; i++) {
        let x = `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Role: ${data[i].role} ID: ${data[i].id}</h6>
                    <h7 class="card-subtitle mb-2 text-muted">ID: ${data[i].id}</h7>
                    <p class="card-text">School Name: ${data[i].school}</p>
                    <a href="mailto:${data[i].email}" target="_blank" class="card-link">Contact Via Email</a>
                </div>
            </div>
        `;
        y = y + x;
    }
    return y;
};

module.exports = teamData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Team Gen</title>
        </head>

        <body class="bg-light">
            <header>
            <nav class="navbar navbar-light d-flex justify-content-center" style="background-color: #e3f2fd;">
            <h1 class="navbar-brand mb-0">Team</h1>
            </nav>
            </header>

            <main class="container-fluid column">
            <div class="container-fluid row m-3 d-flex justify-content-evenly">
                ${managerCard(teamData.manager)} \n
            </div>
            <div class="container-fluid row m-3 d-flex justify-content-evenly">
                ${engineerCard(teamData.engineer)} \n
                ${internCard(teamData.intern)} \n
            </div>
            </main>
            <footer class="navbar fixed-bottom navbar-light bg-light d-flex justify-content-center">
                <p>Made by Sean</p>
            </footer>
        </body>
    </html>
    `;
};