class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name,
        this.email = email,
        this.username = username,
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = [] = approvedCourses,
        this.learningPaths = [] = learningPaths
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name
        })
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
    approvedCourse(newCourse) {
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos, " + this.name + " solo puedes tomar cursos gratis")
        }
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Estudiante Gratis"
        })
        comment.publicar();
    }
}

const alejandro = new Student({
    name: 'JuanDC',
    username: 'juandc',
    email: 'email@gmail.com',
    twitter: '@twitter.com'
})

const zara = new Student({
    name: 'ZaraZS',
    username: 'zarausername',
    email: 'emailzara@gmail.com',
    instagram: '@instazara.com'
})

// Learning paths
class LearningPath {
    constructor({
        name, courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath(
    {
        name: 'Escuela de Desarrollo Web',
        courses: [ 
            'Curso Definitivo HTML CSS',
            'Curso Practico WEB'
        ]
    }
);

const escuelaData = new LearningPath(
    {
        name: 'Escuela de Data',
        courses: [ 
            'Curso Definitivo Data',
            'Curso Practico DATA'
        ]
    }
);

const cursoPrograBasica = new Course({
    name: "Curso gratis de programacion basica",
    isFree: true,
});

//Clase Courses
class Course {
    constructor({
        name, clases =[],
        isFree = false
    }){
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        this._name = nuevoNombre;
    }
}                                                   

class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")")
        console.log(this.likes + "Likes")
        console.log(this.content)
    }
}



function videoPlay(id){
    const urlSecreta = "https://platzi.com" + id;

    console.log("Se esta reproduciendo desde la url " + urlSecreta)
}

function videoStop(id){
    const urlSecreta = "https://platzi.com" + id;
    console.log("Se pauso desde la url " + urlSecreta)
}

class PlatziClass {
    constructor({
        name,
        videoID,
    })
    {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID)
    }

    pausar(){
        videoStop(this.videoID)
    }
}