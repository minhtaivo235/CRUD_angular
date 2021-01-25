import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: "Jonas",
      email: "minhtai@abc.com",
      phone: 22
    },
    {
      id: 2,
      name: "Lily",
      email: "honglinh@abc.com",
      phone: 21
    }
  ];

  constructor() { }
  onGet() {
    return this.employees;
  }
  onAdd(employee) {
    return this.employees.push(employee);
  }
  onDelete(id: Number) {
    let employee = this.employees.find(item => item.id === id);
    let index = this.employees.indexOf(employee, 0);
    this.employees.splice(index, 1);
  }
  onGetEmployee(id: Number) {
    return this.employees.find(item => item.id === id);
  }
  onUpdate(oldEmployee) {
    let newEmployee = this.employees.find(item => item.id === oldEmployee.id);
    let index = this.employees.indexOf(oldEmployee, 0);
    newEmployee.name = oldEmployee.name;
    newEmployee.email = oldEmployee.email;
    newEmployee.phone = oldEmployee.phone;
    return this.employees.splice(index, 1, newEmployee);
  }
}
