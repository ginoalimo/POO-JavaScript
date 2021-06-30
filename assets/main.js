const natalia = {
    name: "Name",
    age: 20,
    aprobados: ["Mate", "html/css"],
    aprobarCurso(nuevoCurso) {
        this.aprobados.push(nuevoCurso)
    }
};

//hacer que natalia apruebe otro curso

// natalia.aprobados.push("JavaScript");
// natalia.name = "Nath"
// console.log(natalia.aprobados)
// console.log(natalia)

// natalia.aprobarCurso("English")
// console.log(natalia)

function Student(name, age, aprobados) {
    this.name = name;
    this.age = age;
    this.aprobados = aprobados;
    // this.aprobarCurso(nuevoCurso) {
    //     this.aprobados.push(nuevoCurso);
    // }
}
Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.aprobados.push(nuevoCurso)
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    ["English", "Users Creation"]
);

juanita.aprobarCurso("GitHub")
console.log(juanita)


