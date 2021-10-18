function internTemplate(intern) {
    return `
            <div class="card">
                <div class="card-head">
                    <h3>${intern.getName()}</h3>
                    <h4>Role: Intern</h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${intern.getEmail()}</li>
                        <li>Email: <a href="mailto: ${intern.getId()}" target="none">${intern.getId()}</a></li>
                        <li>School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `
}

function engineerTemplate(engineer) {
    return `
            <div class="card">
                <div class="card-head">
                    <h3>${engineer.getName()}</h3>
                    <h4>Role: Engineer</h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${engineer.getId()}</li>
                        <li>Email: <a href="mailto: ${engineer.getEmail()}" target="none">${engineer.getEmail()}</a></li>
                        <li>Github: <a href="https://github.com/${engineer.getGithub()}" target="none">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
            `
}

function generateManager(manager) {
    return `
                <div class="card">
                    <div class="card-head">
                        <h3>${manager.getName()}</h3>
                        <h4>Role: Manager</h4>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${manager.getEmail()}</li>
                            <li>Email: <a href="mailto: ${manager.getId()}" target="none">${manager.getId()}</a></li>
                            <li>Office number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
    `
}

module.exports = data => {
    const html = [];
// MANAGER
    const manager = data.filter((employee) => {
        return employee.getRole() === 'manager';
    }).map((manager) => {
        return generateManager(manager);
    }).join('');

    html.push(manager);
    
// INTERN
    const intern = data.filter((employee) => {
        return employee.getRole() === 'intern';
    }).map((intern) => {
        return internTemplate(intern);
    }).join('');

    html.push(intern);

// ENGINEER
    const engineer = data.filter((employee) => {
        return employee.getRole() === 'engineer';
    }).map((engineer) => {
        return engineerTemplate(engineer);
    }).join('');

    html.push(engineer);

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<body>
    <main>
        <nav class="d-flex justify-content-center">
            <h1 class="text-primary">My Team</h1>
        </nav>

        <body>
            <div class="container">
                ${html.join('')}
            </div>
        </body>
    </main>
</body>
</html>
        `      
} 

