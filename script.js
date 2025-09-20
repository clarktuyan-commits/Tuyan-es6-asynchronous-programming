class Student {
constructor({ id, name, course, year, gpa, skills, email,}){
    this.id = id;
    this.name = name;
    this.course = course;
    this.year = year;
    this.gpa = gpa;
    this. skills = || [];
    this. email = || '';
}


function renderStudents(students) {
clearOutput();
if (!students || students.length === 0) {
output.innerHTML = '<div class="empty">No students to show.</div>';
return;
}
students.forEach(s => output.appendChild(s.renderCard()));
}

const service = new StudentService();

loadThenBtn.addEventListener('click', () => {
new Promise((resolve, reject) => {
service.fetchStudents()
.then(students => {
setTimeout(() => resolve(students), 200);
})
.catch(err => reject(err));
})
.then(students => {
renderStudents(students);
console.info('Loaded with .then (Promises)');
})
.catch(err => {
clearOutput();
output.innerHTML = `<div class="empty">Error: ${err.message}</div>`;
console.error(err);
});
});

loadAsyncBtn.addEventListener('click', async () => {
try {
const students = await service.fetchStudentsAsync();
renderStudents(students);
console.info('Loaded with async/await');
} catch (err) {
clearOutput();
output.innerHTML = `<div class="empty">Error: ${err.message}</div>`;
console.error(err);
}
});

clearBtn.addEventListener('click', clearOutput);
(async function autoLoad() {
try {
const students = await service.fetchStudentsAsync();
renderStudents(students);
} catch (e) {

}
})();
}
