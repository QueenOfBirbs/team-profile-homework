const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.github = github;
  }
}

module.exports = Engineer;

getGithub()
getRole(); return 'Engineer';
