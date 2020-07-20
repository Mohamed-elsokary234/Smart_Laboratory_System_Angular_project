import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';

@Component({
  selector: 'app-tests-library',
  templateUrl: './tests-library.component.html',
  styleUrls: ['./tests-library.component.css']
})
export class TestsLibraryComponent implements OnInit {

  constructor(private TestService:TestService,private departmentservice:DepartmentService) { }

  ngOnInit(): void {
    this.TestService.getTests().subscribe(d=>this.tests=d);
    this.departmentservice.getAllDepartments().subscribe(d=>this.departments=d);
    // console.log(this.departments)
  }
  tests;
  departments;

  // 

}
