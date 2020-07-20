import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';

@Component({
  selector: 'app-list-test-department',
  templateUrl: './list-test-department.component.html',
  styleUrls: ['./list-test-department.component.css']
})
export class ListTestDepartmentComponent implements OnInit {

  constructor(private departmentService:DepartmentService) { }

   ngOnInit(): void {
    // this.promiseobj;
    // console.log("end");
    this.listTestsAndDepartments();
  }
  // array
  // listTests=[];
departments=[];
// 
// listTestsDepts=[];
// 
// departmentsNames;
// listTestdept;
 listTestsAndDepartments(){
    // 1 getTests
    //  2 getAllDepartments
  this.departmentService.getAllDepartments().subscribe((data:any[])=>{
          this.departments=data;
          console.log("departments "+this.departments);
          console.log("end date2");

  })
          console.log("end date3");
   // await this.list_Test_dept();
 }// end func
}
