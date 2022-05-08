const StudentService = require("../services/StudentService");
const Reader = require("./../utils/Reader");

class StudentController {

    static getAllStudents() {
        const students = Reader.readJsonFile("./data/visual-thinking.json");
        return StudentService.getAllStudents(students);
    }

    static haveCertificationEmail() {
        const students = Reader.readJsonFile("./data/visual-thinking.json");
        return StudentService.haveCertificationEmail(students);
    }

    static creditsGreaterThan500() {
        const students = Reader.readJsonFile("./data/visual-thinking.json");
        return StudentService.creditsGreaterThan500(students);
    }    
}

module.exports = StudentController;