import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {  
  id: number;
  length;
  header: string;
  employees: Array<Employee>;
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
  }

  constructor( private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) {
    this.id = 0;
    this.header = '';
   }

  ngOnInit(): void {
    
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.header = this.id === 0 ? 'Add employee' : 'Edit employee';

    if(this.id != 0) {
      this.employee = this.employeeService.onGetEmployee(this.id);
      
    }
    else {
      this.employees = this.employeeService.onGet();
      this.employee.id = Number(this.employees[this.employees.length - 1].id + 1);      
    }
  }

  getAllEmployee() {
    return this.employeeService.onGet();
  }

  onSubmit(form: NgForm) {
    // let employee: Employee = {
    //   id: form.value.id,
    //   name: form.value.name,
    //   email: form.value.email,
    //   phone: form.value.phone,
    // }
    this.employee.name = form.value.name;
    this.employee.email = form.value.email;
    this.employee.phone = form.value.phone;
    if(this.id === 0) {
      this.employeeService.onAdd(this.employee);           
    }
    else {
      this.employeeService.onUpdate(this.employee);      
    }
    this.router.navigateByUrl('');
  }  
}
