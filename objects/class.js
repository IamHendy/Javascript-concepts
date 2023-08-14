//classes - blueprint forcreating objects
// contructor  - methos of class tha asigns 
//arguments and properties

class student{
    constructor(firstname, lastname, score){
        this.firstname = firstname;
        this.lastname = lastname;
        this.score = score;
    }
    result(){
        console.log(this.firstname +" " + this.lastname + " "+ "average score is " + this.score);
    }
}

const student1 = new student("Amina", "Ali", 80);
const student2 = new student("Ann", "Bore", 70);
const student3 = new student("alia", "jii", 76);

console.log(student1);
console.log(student2); 
console.log(student3);

student1.result(); // Invoking the result method for student1
student2.result(); // Invoking the result method for student2
student3.result(); // Invoking the result method for student3
