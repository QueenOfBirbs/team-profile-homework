const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, role, id, email, office) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.office = office;
  }
}

module.exports = Manager;

getRole(); return 'Manager';

