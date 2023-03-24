// คุณสมบัติของ OOP ได้แก่ Encapsulation, Inheritance, Polymorphism, Abstraction
// Encapsulation โดยการใช้ Constructor และ Method ในการเข้าถึงข้อมูลของ Object
// Inheritance โดยการสืบทอดคุณสมบัติจากคลาส Person ให้กับคลาส User และ Employee
// Polymorphism โดยการใช้ Method ชื่อเดียวกัน deposit() และ withdraw() ในคลาส User และ Employee 
// Abstraction ไม่ได้ใช้โดยตรงในโค้ด แต่สามารถใช้งานผ่าน interface ของ Object ได้

// class BankSystem จะสร้าง Array ของ User, Employee และ Job เพื่อเก็บข้อมูลของแต่ละออบเจ็กต์
class BankSystem {
    constructor() {
      this.users = [];
      this.employees = [];
      this.jobs = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    addJob(job) {
        this.jobs.push(job);
      }
  
  }

// Inheritance
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
// Polymorphism
  class User extends Person {
    constructor(name, age, Phone, amount) {
        super(name, age, 0);
        this.Phone = Phone;
        this.amount = amount;
      }

// Polymorphism
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Phone: ${this.Phone}, Amount: ${this.amount}`);
    }
// Encapsulation
    getAmount() {
        return this.amount;
      }

    deposit(quantity) {
        this.amount += quantity;
        console.log(`${quantity} deposited. New Amount is ${this.amount}.`);
      }

      withdraw(quantity) {
        if (this.amount >= quantity) {
            this.amount -= quantity;
            console.log(`${quantity} withdrawn. New Amount is ${this.amount}.`);
        } else {
            console.log(`Insufficient Amount. Available Amount is ${this.amount}.`);
        }
    }
  }

// Polymorphism
  class Employee extends Person {
    constructor(name, age, employeeID, Phone, amount) {
      super(name, age);
      this.employeeID = employeeID;
      this.Phone = Phone;
      this.amount = amount;
    }

// Polymorphism
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeID}, Phone: ${this.Phone}, Amount: ${this.amount}`);
    }

    getAmount() {
        return this.amount;
      }

    deposit(quantity) {
        this.amount += quantity;
        console.log(`${quantity} deposited. New Amount is ${this.amount}.`);
      }

      withdraw(quantity) {
        if (this.amount >= quantity) {
            this.amount -= quantity;
            console.log(`${quantity} withdrawn. New Amount is ${this.amount}.`);
        } else {
            console.log(`Insufficient Amount. Available Amount is ${this.amount}.`);
        }
    }
  }

// Abstraction
  class Job {
    constructor(field, description, salary) {
      this.Field = field;
      this.Description = description;
      this.Salary = salary;
    }
  }

  const bankSystem = new BankSystem();
  
  const user1 = new User("John", 23, "1234-5678", 35000);
  bankSystem.addUser(user1);

  const user2 = new User("Pun", 21, "1111-1111", 60000);
  bankSystem.addUser(user2);
  
  const employee1 = new Employee("Jane", 32, "111", "9999-9999", 50000);
  bankSystem.addEmployee(employee1);
  
  const job1 = new Job("Software Engineer", "Develop software", 100000);
  const job2 = new Job("Hardware Engineer", "Develop hardware", 90000);
  bankSystem.addJob(job1);
  bankSystem.addJob(job2);
  
  user1.displayInfo();
  user1.deposit(10000);
  user1.displayInfo();
  user2.displayInfo();
  user2.withdraw(5000);
  user2.deposit(30000);
  user2.displayInfo();
  employee1.displayInfo();
  employee1.withdraw(4000);
  employee1.deposit(20000);
  console.log(user1);
  console.log(user2);
  console.log(employee1);
  console.log(job1);
  console.log(job2);
  