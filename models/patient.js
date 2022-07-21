const patients = [];

module.exports = class Patient {
  constructor(name) {
    this.name = name;
  }

  save() {
    patients.push(this);
  }

  static fetchAll() {
    return patients;
  }
};
