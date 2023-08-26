class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isDismissed = false;

        this.checkIfUserExists();
    }

    checkIfUserExists() {
        if (!this.university || !this.course || !this.fullName) {
            throw new Error ("Provide the necessary parameters to create a new User");
        }
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`; 
    }

    get studentMarks() {
        return this.isDismissed ? null : this.marks;
    }

    set studentMarks(newMark) {
        if (this.isDismissed) {
            throw new Error("Student is dismissed.");
        }
        this.marks.push(newMark);
    }

    getAverageMark() {
        if (this.isDismissed || this.marks.length === 0) {
            return null;
        }

        const sum = this.studentMarks.reduce((acc, mark) => acc + mark, 0);
        const average = sum / this.marks.length;
        return average;
    }

    dismiss() {
        this.isDismissed = true;
    }

    recover() {
        this.isDismissed = false;
    }
}

// const student0 = new Student();
// console.log(student0);
const student1 = new Student("Вища школа психотерапії м. Одеса", 1, "Родоманський Остап Бендер", [5, 4, 4, 5]);
// console.log(student1);

console.log(student1.getInfo());

console.log(student1.studentMarks);

student1.studentMarks = 8;
console.log(student1.studentMarks);

console.log(student1.getAverageMark());

student1.dismiss();
// student1.studentMarks = 2;
console.log(student1.studentMarks);

student1.recover();
console.log(student1.studentMarks);


