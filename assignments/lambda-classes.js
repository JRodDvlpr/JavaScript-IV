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

const fred = new Instructor({
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
