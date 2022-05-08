const StudentService = require("../../lib/services/StudentService");

describe("Tests para StudentService", () => {
    test("1. Retornar todos los estudiantes", () => {
        const students = [
            {name: "Student 1"},
            {name: "Student 2"},
            {name: "Student 3"},
            {name: "Student 4"},
            {name: "Student 5"},
        ];

        expect(StudentService.getAllStudents(students)).toMatchObject([
            {name: "Student 1"},
            {name: "Student 2"},
            {name: "Student 3"},
            {name: "Student 4"},
            {name: "Student 5"},
        ]);
    });

    test("2. Retornar los estudiantes que tengan ungan certificación", () => {
        const students = [
            {haveCertification: true, email: "student1@mail.com"},
            {haveCertification: true, email: "student2@mail.com"},
            {haveCertification: false, email: "student3@mail.com"},
            {haveCertification: false, email: "student4@mail.com"},
            {haveCertification: true, email: "student5@mail.com"},
        ];

        expect(StudentService.haveCertification(students)).toMatchObject([
            {haveCertification: true, email: "student1@mail.com"},
            {haveCertification: true, email: "student2@mail.com"},
            {haveCertification: true, email: "student5@mail.com"},
        ]);
    });

    test("3. Retornar los estudiantes que tengan ungan certificación", () => {
        const students = [
            {haveCertification: true, email: "student1@mail.com"},
            {haveCertification: true, email: "student2@mail.com"},
            {haveCertification: false, email: "student3@mail.com"},
            {haveCertification: false, email: "student4@mail.com"},
            {haveCertification: true, email: "student5@mail.com"},
        ];

        expect(StudentService.haveCertificationEmail(students)).toMatchObject([
            "student1@mail.com",
            "student2@mail.com",
            "student5@mail.com",
        ]);
    });

    test("4. Retornar los estudiantes cuyos créditos sean mayores a 500", () => {
        const students = [
            {name: "Student 1", "credits": 550},
            {name: "Student 2", "credits": 750},
            {name: "Student 3", "credits": 250},
            {name: "Student 4", "credits": 350},
            {name: "Student 5", "credits": 150},
        ];

        expect(StudentService.creditsGreaterThan500(students)).toMatchObject([
            {name: "Student 1", "credits": 550},
            {name: "Student 2", "credits": 750},
        ]);
    });
});