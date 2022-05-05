// classes and interfaces
class Department {
  // public deptName: string = 'DEFAULT';
  protected employees: string[] = [];

  static companyName: string = 'ACME';

  constructor(private readonly id: number, public deptName: string) {
    // this.deptName = name;
  }

  describe(): void {
    console.log('Department ID: ' + this.id + '; Department: ' + this.deptName);
  }

  addEmployee(name: string): void {
    this.employees.push(name);
  }

  printEmployeeInformation(): void {
    console.log('Employees count ' + this.employees.length);
    console.log(this.employees);
  }

  static describeCompany = (): void => {
    console.log('Acme Company...');
  };
}

class SpecialDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, 'Special Department');
  }

  override describe(): void {
    console.log('This is a special department with admins: ' + this.admins);
  }
}

class Vehicle {
  private mostRecentReport: string;

  get mostRecent() {
    if (this.mostRecentReport) {
      return this.mostRecentReport;
    }
    throw new Error('No report found');
  }

  set mostRecent(value: string) {
    if (!value) {
      throw new Error('Invalid value');
    }
    this.addReport(value);
  }

  constructor(public id: number, private reports: string[]) {
    this.mostRecentReport = reports[0];
  }

  addReport(text: string): void {
    this.reports.push(text);
    this.mostRecentReport = text;
  }

  printDetails(): void {
    console.log('ID: ' + this.id + '; Reports: ' + this.reports.length);
  }
}

// using classes
const myDepartment = new Department(23, 'HR');
myDepartment.describe();

Department.companyName;
Department.describeCompany();

myDepartment.addEmployee('John');
myDepartment.addEmployee('Mary');

myDepartment.printEmployeeInformation();

const specialDept = new SpecialDepartment(23, ['John', 'Mary']);
specialDept.describe();
