// student.js
export default class Student {
  constructor(id, name, age, course) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
  }

  // Render student as an HTML card
  render() {
    return `
      <div class="student-card">
        <h2>${this.name}</h2>
        <p><strong>Age:</strong> ${this.age}</p>
        <p><strong>Course:</strong> ${this.course}</p>
      </div>
    `;
  }
}
