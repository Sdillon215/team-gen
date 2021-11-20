const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const htmlTemplate = require('./src/page-temp');
const writeFile = require('./src/generate-page');

let team = [];
team.manager = [];
team.engineer = [];
team.intern = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Enter managers ID number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter managers email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Managers office number?',
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log('Enter managers email!')
                    return false;
                }
            }
        }
    ])
        .then(data => {
            this.manager = new Manager(data.name, data.id, data.email, data.officeNum);
            this.manager.getRole();

            team.manager.push(this.manager);
            return team;
        })
};

const promptTeam = teamData => {
    return inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'teamAdd',
            choices: ['Add Engineer', 'Add Intern', 'Done']
        }
    )
        .then(({ teamAdd }) => {
            // Getting Engineer data
            if (teamAdd === 'Add Engineer') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the engineers name?',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Enter the engineers name!')
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the engineers ID number?',
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log('Enter the engineers ID number!')
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the engineers email?',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log('Enter the engineers email!')
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the engineers github username?',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                console.log('Enter the engineers github username!')
                                return false;
                            }
                        }
                    }
                ])
                    .then((data) => {
                        this.engineer = new Engineer(data.name, data.id, data.email, data.github);
                        this.engineer.getRole();

                        teamData.engineer.push(this.engineer);

                        return promptTeam(teamData);
                    })
            } else if (teamAdd === 'Add Intern') {
                // Getting intern data
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the interns name?',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Enter the interns name!')
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the interns ID number?',
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log('Enter the interns ID number!')
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the interns email?',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log('Enter the interns email!')
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What is the interns school?',
                        validate: schoolInput => {
                            if (schoolInput) {
                                return true;
                            } else {
                                console.log('Enter the interns school!')
                                return false;
                            }
                        }
                    }
                ])
                    .then((data) => {
                        this.intern = new Intern(data.name, data.id, data.email, data.school);
                        this.intern.getRole();

                        teamData.intern.push(this.intern);

                        return promptTeam(teamData);
                    })
            } else if (teamAdd === 'Done') {

                return teamData;
            }
        })
};

promptManager()
    .then(data => {
        return promptTeam(data)
            .then(data => {
                return htmlTemplate(data);
            })
            .then(data => {
                return writeFile(data);
            })
    })
    .catch(err => {
        console.log(err);
    });