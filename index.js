var studentData = /** @class */ (function () {
    function studentData(name) {
        this.name = name;
        this.StudentID = this.genID();
        this.courses = [];
        this.balance = 0;
    }
    studentData.prototype.genID = function () {
        return "S" + Math.floor(10000 + Math.random() * 90000);
    };
    studentData.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    studentData.prototype.checkBalance = function () {
        return this.balance;
    };
    studentData.prototype.tuitionFee = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance.\n Please add funds.");
        }
        else {
            this.balance -= amount;
            console.log("Payment successful.\n Your Remaining balance:", this.balance);
        }
    };
    studentData.prototype.status = function () {
        console.log("Student Name: ", this.name);
        console.log("Student ID: ", this.StudentID);
        console.log("Course Enrolled: ", this.courses.join(", "));
        console.log("Current Balance: ", this.balance);
    };
    return studentData;
}());
var subj = /** @class */ (function () {
    function subj(code, name, fee) {
        this.code = code;
        this.name = name;
        this.fee = fee;
    }
    return subj;
}());
var c1 = new subj("py", "Python", 5000);
var c2 = new subj("ts", "Typescript", 4500);
var c3 = new subj("wd", "Web Develpment", 30000);
var c4 = new subj("cs", "Cyber Security", 15000);
var c5 = new subj("ml", "Machine Learning", 20000);
var c6 = new subj("web", "Web 3.0", 12000);
var Student1 = new studentData("Zayan");
var Student2 = new studentData("Talha");
var Student3 = new studentData("Hamdan");
var Student4 = new studentData("Shafique");
var Student5 = new studentData("Sandeed");
Student1.enroll(c1.name);
Student1.enroll(c2.name);
Student2.enroll(c1.name);
Student2.enroll(c5.name);
Student2.enroll(c6.name);
Student3.enroll(c4.name);
Student4.enroll(c6.name);
Student5.enroll(c1.name);
Student5.enroll(c2.name);
Student5.enroll(c3.name);
Student5.enroll(c6.name);
Student1.balance = 5700;
Student1.tuitionFee(c1.fee);
// Student1.balance = 5700
Student1.tuitionFee(c2.fee);
Student2.balance = 50000;
Student2.tuitionFee(c1.fee);
// Student2.balance = 10000
Student2.tuitionFee(c5.fee);
// Student2.balance = 10000
Student2.tuitionFee(c6.fee);
Student3.balance = 7000;
Student3.tuitionFee(c4.fee);
Student4.balance = 60000;
Student4.tuitionFee(c6.fee);
Student5.balance = 70000;
Student5.tuitionFee(c1.fee);
// Student5.balance = 70000
Student5.tuitionFee(c2.fee);
// Student5.balance = 70000
Student5.tuitionFee(c3.fee);
// Student5.balance = 70000
Student5.tuitionFee(c6.fee);
console.log("\nStudent 1 Status:");
Student1.status();
console.log("\nStudent 2 Status:");
Student2.status();
console.log("\nStudent 3 Status:");
Student3.status();
console.log("\nStudent 4 Status:");
Student4.status();
console.log("\nStudent 5 Status:");
Student5.status();
