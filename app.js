const fs = require('fs');

const public = require('./public');
const student = require('./student');

const yargs = require('yargs');

const argv = yargs
            .command('add', 'Add a student', {
                id: {
                     describe: 'ID of the student',
                     demand: true
                },
                name: {
                    describe: 'Name of the student',
                    demand: true
                },
                gpa: {
                    describe: 'Gpa of the student',
                    demand: true
                },
                age: {
                    describe: 'Age of the student',
                    demand: true
                },
                courses: {
                    describe: 'Courses taken by the student',
                    demand: true
                },
                advisor: {
                    describe: 'Advisor of the student',
                    demand: true
                }
            })
            .command('list', 'List all student(s)')
            .command('remove', 'Remove student with given ID', {
                id: {
                    describe: 'ID of the student',
                    demand: true
               }
            })
            .command('find', 'Find student with given ID', {
                id: {
                    describe: 'ID of the student',
                    demand: true
               }
            }).help().argv;



const group = argv._[0];
const command = argv._[1];




if(group === 'student') {
    if(command === 'add') {
        var addedStudent = student.addStudent(argv.id, argv.name, argv.gpa, argv.age, argv.courses, argv.advisor);
        if(addedStudent) {
            console.log('ADD operation => SUCCESS.');
            student.logStudent(addedStudent);
        } else {
            console.log('ADD operation => FAIL.');
        }
    } else if(command === 'list') {
        console.log('LIST operation => SUCCESS.');
        console.log(`Listing ${student.listStudents().length} student(s).`);
        student.listStudents().forEach(st => {
            student.logStudent(st);
        });
    } else if(command === 'remove') {
        if(student.removeStudent(argv.id))
            console.log('REMOVE operation => SUCCESS.');
        else  
            console.log('REMOVE operation => FAIL.');
    } else if(command === 'find') {
        var foundStudent = student.findStudent(argv.id);
        if(foundStudent) {
            console.log('FIND operation SUCCESS.');
            student.logStudent(foundStudent);
        } else {
            console.log('FIND operation FAIL.');
        }
    }
}