const StudentController = require("../../lib/controllers/StudentController");

describe("Tests para StudentService", () => {
    test("1. Retornar todos los estudiantes", () => {
        
        expect(StudentController.getAllStudents()).not.toBeUndefined();
    });

    test("2. Retornar los estudiantes que tengan una certificación", () => {
        console.log(StudentController.haveCertificationEmail());
        expect(StudentController.haveCertificationEmail()).not.toBeUndefined();
    });

    test("3. Retornar los estudiantes que tengan ungan certificación", () => {
        
        expect(StudentController.creditsGreaterThan500()).not.toBeUndefined();
    });
});