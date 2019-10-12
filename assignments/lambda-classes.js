// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age -attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }
    listsSubjects(arraySubject) {
        return arraySubject.map(subject => subject)
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup(name, channel){
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(name, student, subject) {
        return `${name}debugs ${student.name}'s code on ${subject}`
    }
}
// Instructor Object

const teach01 = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript, Python',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  // Student Object 

  const student01 = new Student({
      name: 'Thomas',
      location: 'grandma house in Florida',
      className: 'CS132',
      favSubject: 'React, CSS, Javascript',
      previousBackground: 'I never graduated',
    
  });

  // Porject Manager Object

  const ProjectM01 = new ProjectManager({
      name: 'Jimmy',
      location: 'another place in Florida',
      className: 'CS1',
      favInstructor: 'John',
      gradClassName: 'CS1'
  });


  console.log(teach01.name)
  console.log(teach01.location)
  console.log(teach01.age)
  console.log(teach01.favLanguage)
  console.log(teach01.specialty)
  console.log(teach01.catchPhrase)
  console.log(teach01.demo('Javascipt'))
  console.log(teach01.grade(student01, student01.className))

  // Student console log
  console.log(student01.name)
  console.log(student01.location)
  console.log(student01.className)
  console.log(student01.favLanguage)
  console.log(student01.previousBackground)
  console.log(student01.listsSubjects( ['HTML', 'CSS', 'Javascript'] ))
  console.log(student01.PRAssignment(student01, 'CSS'))

  // ProjectManager student console log
  console.log(ProjectM01.name) 
  console.log(ProjectM01.location)
  console.log(ProjectM01.className)
  console.log(ProjectM01.favLanguage)
  console.log(ProjectM01.gradClassName) 
  console.log(ProjectM01.standUp(ProjectM01.name, 'WebPt11_Pace'))
  console.log(ProjectM01.debugsCode(ProjectM01.name, student01.name, 'CSS'))