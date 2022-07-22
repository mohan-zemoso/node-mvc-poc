const patients = [];

module.exports = class Patient {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    patients.push(this);
  }

  static fetchAll() {
    return patients;
  }

  static fetchById(patientId) {
    return patients[patientId - 1];
  }

  update(patientId, newDetails) {
    patients[patientId - 1] = { id: patientId, ...newDetails };
  }

  static delete(patientId) {
    patients.splice(patientId - 1, 1);
    for (let eachId = patientId - 1; eachId < patients.length; eachId++) {
      patients[eachId].id = patients[eachId].id - 1;
    }
  }
};
