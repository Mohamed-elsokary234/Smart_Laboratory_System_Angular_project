import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';
import { test } from 'src/app/_Models/test';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  constructor(private  TestService:TestService,private DepartmentService:DepartmentService ) { }

  ngOnInit(): void {
    this.DepartmentService.getAllDepartments().subscribe((d)=>this.Departments=d);
  }
  // form
  form=new FormGroup({
    // empl_Id:new FormControl('',Validators.required),
    test_Name:new FormControl('',Validators.required),
    test_Price:new FormControl('',Validators.required),
    reference_value:new FormControl('',Validators.required),
    depts:new FormControl('',Validators.required),
    date_test:new FormControl('',Validators.required),

  });
  get Test_Name(){
    return this.form.get( 'test_Name');
  }
  get Test_Price(){
    return this.form.get( 'test_Price');
  }
   get Reference_value(){
    return this.form.get( 'reference_value');
  }
  get Depts(){
    return this.form.get( 'depts');
  }
   get Date_test(){
    return this.form.get( 'date_test');
  }
  // get Test_Name(){
  //   return this.form.get( 'test_Name');
  // }
      // lists :any
      Departments;
      // vars
      id
      TestName:string;
      TestPrice:number;
      ReferenceValue:number;
      Datetest:string;
        DeptId:number;
        // obj
        test:test;
        // fun
        getDeptId(event){
          this.DeptId=event.target.value;
          console .log(this.DeptId);
        }
        //
        addTest(){
          console.log(this.Datetest);
          this.test=new test(this.id,this.TestName,this.TestPrice,this.ReferenceValue,this.DeptId)
       this.TestService.addTest(this.test);
        }



}
