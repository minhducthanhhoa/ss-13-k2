"use strict";
class Student3 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(studentId) {
        let studentIndex = this.students.findIndex(student => student.getId() === studentId);
        if (studentIndex !== -1) {
            let studentToAdd = this.students.splice(studentIndex, 1)[0];
            this.students.push(studentToAdd);
        }
    }
    showStudent() {
        for (let student of this.students) {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        }
    }
}
let allStudents = [];
let student5 = new Student3(1, "minh thu");
let student6 = new Student3(2, "hoa");
let student7 = new Student3(3, "hue");
let student8 = new Student3(4, "hung");
let student9 = new Student3(5, "hao");
let student10 = new Student3(6, "ngoc");
allStudents.push(student5, student6, student7, student8, student9, student10);
let classroom1 = new Classroom();
classroom1.addStudent(1);
classroom1.addStudent(2);
classroom1.addStudent(3);
let classroom2 = new Classroom();
classroom2.addStudent(4);
classroom2.addStudent(5);
classroom2.addStudent(6);
console.log("Classroom1: ");
classroom1.showStudent();
console.log("Classroom2: ");
classroom2.showStudent();
