 class studentData {
    name: string;
    StudentID: string;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.name = name;
        this.StudentID = this.genID();
        this.courses = [];
        this.balance = 0;
    }
    private genID(): string {
       return "S" + Math.floor(10000 + Math.random() * 90000)
    }
    enroll(course: string): void {
        this.courses.push(course)
    }
    checkBalance():number {
        return this.balance
    }
    tuitionFee(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient balance.\n Please add funds.");
        } else {
            this.balance -= amount;
            console.log("Payment successful.\n Your Remaining balance:", this.balance);
        }
    }
    status(): void {
      console.log("Student Name: ", this.name)
      console.log("Student ID: ", this.StudentID)
      console.log("Course Enrolled: ", this.courses.join(", "))
      console.log("Current Balance: ", this.balance)
      
    }
}

class subj {
    code: string;
    name: string;
    fee: number;

    constructor(code:string, name: string, fee: number) {
        this.code = code;
        this.name = name;
        this.fee = fee
    }
}

const c1 = new subj("py", "Python", 5000)
const c2 = new subj("ts", "Typescript", 4500)
const c3 = new subj("wd", "Web Develpment", 30000)
const c4 = new subj("cs", "Cyber Security", 15000)
const c5 = new subj("ml", "Machine Learning", 20000)
const c6 = new subj("web", "Web 3.0", 12000)
 
const Student1 = new studentData("Zayan")
const Student2 = new studentData("Talha")
const Student3 = new studentData("Hamdan")
const Student4 = new studentData("Shafique")
const Student5 = new studentData("Sandeed")

Student1.enroll(c1.name)
Student1.enroll(c2.name)

Student2.enroll(c1.name)
Student2.enroll(c5.name)
Student2.enroll(c6.name)

Student3.enroll(c4.name)

Student4.enroll(c6.name)

Student5.enroll(c1.name)
Student5.enroll(c2.name)
Student5.enroll(c3.name)
Student5.enroll(c6.name)

Student1.balance = 5700
Student1.tuitionFee(c1.fee)
Student1.tuitionFee(c2.fee)

Student2.balance = 50000
Student2.tuitionFee(c1.fee)
Student2.tuitionFee(c5.fee)
Student2.tuitionFee(c6.fee)

Student3.balance = 7000
Student3.tuitionFee(c4.fee)

Student4.balance = 60000
Student4.tuitionFee(c6.fee)

Student5.balance = 70000
Student5.tuitionFee(c1.fee)
Student5.tuitionFee(c2.fee)
Student5.tuitionFee(c3.fee)
Student5.tuitionFee(c6.fee)



console.log("\nStudent 1 Status:");
Student1.status()

console.log("\nStudent 2 Status:");
Student2.status()

console.log("\nStudent 3 Status:");
Student3.status()

console.log("\nStudent 4 Status:");
Student4.status()

console.log("\nStudent 5 Status:");
Student5.status()