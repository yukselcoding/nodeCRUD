
const _ = require('lodash');
const public = require('./public');

/**
 * 
 * @param {id of student} id 
 * @param {name of student} name 
 * @param {gpa of student} gpa 
 * @param {age of student} age 
 * @param {courses of student} courses 
 * @param {advisor of the student} advisor 
 * Adding a student to the system, CREATE operation
 */
var addStudent = (id, name, gpa, age, courses, advisor) => {
    var students = public.fetchData('student.json');
    var student = {
        id,
        name,
        gpa,
        age,
        courses,
        advisor 
    };

    var duplicateStudents = students.filter((_student) => _student.id === student.id);
    if(duplicateStudents.length === 0) {
        students.push(student);
        public.saveData('student.json', students);
        return student;
    }
};

/**
 * 
 * @param {Id of the student to be removed} id 
 * A Basic DELETE operation
 */
var removeStudent = (id) => {
    var students = public.fetchData('student.json');
    var filteredStudents = students.filter((student) => student.id !== id);
    public.saveData('student.json', filteredStudents);
    return filteredStudents.length !== students.length;
};

/**
 * 
 * @param {Id of the student to be found} id 
 * A basic READ operation
 */
var findStudent = (id) => {
    var students = public.fetchData('student.json');
    var foundStudents = students.filter((student) => student.id === id);
    return foundStudents[0];
};

/**
 * List all of the students
 */
var listStudents = () => {
    return public.fetchData('student.json');
};

/**
 * 
 * @param {Student to be logged.} student 
 */
var logStudent = (student) => {
    console.log("------");
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`GPA: ${student.gpa}`);
    console.log(`Courses: ${student.courses}`);
    console.log(`Advisor: ${student.advisor}`);
    console.log("------"); 
}


module.exports = {
    addStudent,
    removeStudent,
    findStudent,
    logStudent,
    listStudents
}
