import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { employee } from 'src/app/_Models/employee';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  constructor(private empser:EmployeesService) { }
  employee;

  ngOnInit(): void {
      this.empser.getEmployee(111).subscribe(e=>this.employee=e);
   
  }

}
