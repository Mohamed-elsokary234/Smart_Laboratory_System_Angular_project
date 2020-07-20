import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { test } from 'src/app/_Models/test';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  constructor(private testservice:TestService,
    private deptservice:DepartmentService,
    private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void{
    console.log(this._Activatedroute.snapshot.params['id'])
    this.test_Id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.test_Id);
    this.testservice.getTest(this.test_Id).subscribe(d=>this.test_obj=d);
    this.deptservice.getAllDepartments().subscribe(d=>this.Departments=d);
  }
// ---------------------------
  form=new FormGroup({
    // TestId:new FormControl('',Validators.required),
    TestName:new FormControl('',Validators.required),
    TestPrice:new FormControl('',Validators.required),
    ReferenceValue:new FormControl('',Validators.required),
    //TestDate:new FormControl('',Validators.required),
    depts:new FormControl('',Validators.required),

  });
  // s - c
  // get testId(){
  //   return this.form.get('TestId');
  // }  // s - c
  get testName(){
    return this.form.get('TestName');
  }  // s - c
  get testPrice(){
    return this.form.get('TestPrice');
  }  // s - c
  get referenceValue(){
    return this.form.get('ReferenceValue');
  }
  get testDate(){
    return this.form.get('TestDate');
  }get Depts(){
    return this.form.get('depts');
  }
  //
  test_obj;
  Departments;
// -------------------------
   test_Id;
   test_n:string;
   test_price:number;
   reference_value:number;
   Dep_fk:number;
   //date:string;
//
getDeptId(e){
  this.Dep_fk=e.target.value;
}
//
  test:test;
  editTest(){
 this.test=new test(this.test_Id,this.test_n,this.test_price,this.reference_value,this.Dep_fk);

 this.testservice.editTest(this.test_Id,this.test);
  }
}
