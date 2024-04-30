 import inquirer from "inquirer";
 
 class StudentData {
     name: string;
     studentID: string;
     courses: string[];
     balance: number;
 
     constructor(name: string) {
         this.name = name;
         this.studentID = this.genID();
         this.courses = [];
         this.balance = 0;
     }
     
     private genID(): string {
        return "S" + Math.floor(10000 + Math.random() * 90000);
     }
 
     enroll(course: string): void {
         this.courses.push(course);
     }
 
     checkBalance(): number {
         return this.balance;
     }
 
     tuitionFee(amount: number): void {
         if (amount > this.balance) {
             console.log("Insufficient balance.\nPlease add funds.");
         } else {
             this.balance -= amount;
             console.log("Payment successful.\nYour Remaining balance:", this.balance);
         }
     }
 
     status(): void {
         console.log("Student Name:", this.name);
         console.log("Student ID:", this.studentID);
         console.log("Course Enrolled:", this.courses.join(", "));
         console.log("Current Balance:", this.balance);
     }
 }
 
 class Subject {
     code: string;
     name: string;
     fee: number;
 
     constructor(code: string, name: string, fee: number) {
         this.code = code;
         this.name = name;
         this.fee = fee;
     }
 }
 
 // Sample subjects
 const c1 = new Subject("py", "Python", 5000);
 const c2 = new Subject("ts", "Typescript", 4500);
 const c3 = new Subject("wd", "Web Develpment", 30000);
 const c4 = new Subject("cs", "Cyber Security", 15000);
 const c5 = new Subject("ml", "Machine Learning", 20000);
 const c6 = new Subject("web", "Web 3.0", 12000);
 
 // Function to prompt for student data
 async function promptStudentData(): Promise<StudentData> {
     const studentInfo = await inquirer.prompt([
         {
             type: 'input',
             name: 'name',
             message: "Enter student's name:"
         },
         {
             type: 'number',
             name: 'balance',
             message: "Enter student's initial balance:"
         }
     ]);
 
     const student = new StudentData(studentInfo.name);
     student.balance = studentInfo.balance;
 
     return student;
 }
 
 async function promptCourseEnrollment(student: StudentData): Promise<void> {
     const { selectedCourses } = await inquirer.prompt([
         {
             type: 'checkbox',
             name: 'selectedCourses',
             message: "Select courses to enroll:",
             choices: [c1, c2, c3, c4, c5, c6].map(course => ({ name: course.name, value: course.name }))
         }
     ]);
 
     selectedCourses.forEach(course => student.enroll(course));
 }
 
 // Function to prompt for tuition fee payment
 async function promptTuitionFeePayment(student: StudentData): Promise<void> {
     const { amount } = await inquirer.prompt([
         {
             type: 'number',
             name: 'amount',
             message: "Enter tuition fee amount to pay:"
         }
     ]);
 
     student.tuitionFee(amount);
 }
 
 async function main(): Promise<void> {
     const student = await promptStudentData();
     await promptCourseEnrollment(student);
     await promptTuitionFeePayment(student);
 
     console.log("\nStudent Status:");
     student.status();
 }
 main();
 