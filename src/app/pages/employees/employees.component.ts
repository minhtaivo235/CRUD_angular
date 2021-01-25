import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../models/employee.model';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    this.employees = [];
   }

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }
  onDelete(id: Number) {
    this.employeeService.onDelete(id);
  }

}
