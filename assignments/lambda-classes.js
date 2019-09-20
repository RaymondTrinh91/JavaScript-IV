// CODE here for your Lambda Classes
class Person{
    constructor(person){
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
    }
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}.`;
    };
}

class Instructor extends Person{
    constructor(teach){
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}!`
    };
    projectComplete(student){
        console.log(student.grade);
        let score = Math.floor(Math.random() * (10 - -10) + -10);
        console.log(score);
        let newGrade = student.grade + score;
        console.log(newGrade);
        student.grade = newGrade;
        console.log(student.grade);
        return `${student.name} has earned a score of ${score} bringing their total grade to ${student.grade}%.`
    }
}

class Student extends Person{
    constructor(learn){
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubject = learn.favSubject;
        this.grade = learn.grade;
    }
    listSubjects(){
        for (let i = 0; i < this.favSubject.length; i++){
            console.log(this.favSubject[i]);
        }
    };

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    };

    sprintChallenge(subject){
        return `${this.name} has begun a sprint challenge on ${subject}.`;
    };

    gradeCheck(){
        if (this.grade > 70){
            return `Congratulations! ${this.name} is graduating!`
        }
    }
}

class ProjectManager extends Instructor{
    constructor(pem){
        super(pem);
        this.gradClassName = pem.gradClassName;
        this.favInstructor = pem.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}
// Persons
const derek = new Person({
    name: "Derek",
    location: "Mexico",
    age: 31,
})

const steven = new Person({
    name: "Steve",
    location: "USA",
    age: 21,
})
// Instructor
const mary = new Instructor({
    name: "Mary",
    location: "China",
    age: 27,
    specialty: "C++",
    favLanguage: [
        'HTML',
        'PYTHON',
        'C++'
    ],
    catchPhrase: "Come, my little lambs!",
})

const elizabeth = new Instructor({
    name: "Elizabeth",
    location: "USA",
    age: 25,
    specialty: "Machine Learning",
    favLanguage: [
        'R',
        'C++',
        'Javascipt'
    ],
    catchPhrase: "I can\'t wait for the machines to finally take over!",
})

// Student

const trevor = new Student({
    name: "Trevor",
    location: "Canada",
    age: 34,
    previousBackground: "World Record Holder for eating Tacos.",
    className: "iOS18",
    favSubject:[
        'Swift',
        'Python'
    ],
    grade: 50,    
})

const sally = new Student({
    name: "Sally",
    location: "Japan",
    age: 65,
    previousBackground: "CEO of Yoshinoya",
    className: "Web100",
    favSubject:[
        'Javascript',
        'C',
    ],
    grade: 60,
})

// Project Manager

const bob = new ProjectManager({
    name: "Bob",
    location: "Britain",
    age: 41,
    specialty: "C++",
    favLanguage: [
        "C++",
        "Python"
    ],
    catchPhrase: "Can we build it?",
    gradClassName: "CS4",
    favInstructor: "Elizabeth",
})

const kim = new ProjectManager({
    name: "Kim",
    location: "Vietnam",
    age: 21,
    specialty: "Python",
    favLanguage: [
        "C++",
        "Python",
        "Javascript"
    ],
    catchPhrase: "I like to eat!",
    gradClassName: "CS3",
    favInstructor: "Elizabeth",
})
console.log(derek.speak());
console.log(mary.demo("C++"));
console.log(elizabeth.grade(trevor, "C++"));
console.log(trevor.listSubjects());
console.log(trevor.PRAssignment("Javascript"));
console.log(sally.sprintChallenge("HTML"));
console.log(bob.standUp("Web999"));
console.log(kim.debugsCode(sally, "CSS"));
console.log(kim.projectComplete(trevor));
console.log(kim.projectComplete(trevor));
console.log(kim.projectComplete(trevor));
console.log(kim.projectComplete(trevor));
console.log(kim.projectComplete(trevor));
console.log(kim.projectComplete(trevor));
console.log(kim.projectComplete(trevor));
console.log(trevor.gradeCheck());