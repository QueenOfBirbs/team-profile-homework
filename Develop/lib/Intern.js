const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.school = school;
  }
}

module.exports = Intern;

getSchool()
getRole(); return 'Intern';