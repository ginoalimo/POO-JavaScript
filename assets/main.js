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



//Prototipos con la sintaxis de Clases
class Student2 {
    // constructor(name, age, aprobados){
    // this.name = name;
    // this.age = age;
    // this.aprobados = aprobados;
    // }

    constructor(){}

    aprobarCurso(nuevoCurso) {
        this.aprobados.push(nuevoCurso)
    }
}

// const miguel = new Student2("Miguel", 28, ['Analisis de negocios', 'Ciencias de datos'])

// console.log(miguel)

const juan = new Student2();
juan.name = 'Juanzaso'
juan.age = 25;
juan.aprobados = ['GitHub', 'JS', 'CSS']

console.log(juan);

//----------

class Student3 {
    constructor({
        name ,
        age,
        aprobados = [],
        twitter,
        instagram

    }){
        this.name = name;
        this.age = age;
        this.aprobados = aprobados;
        this.twitter = twitter;
        this.instagram = instagram;
    }
}

const jose = new Student3({
    name: 'Jose',
    age: 25,
    aprobados: ['Cursos', 'Mate'],
    twitter: '@hello',
    instagram: '@insta'
})

console.log(jose)