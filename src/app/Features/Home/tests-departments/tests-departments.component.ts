import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { ActivatedRoute } from '@angular/router';
import { test } from 'src/app/_Models/test';

@Component({
  selector: 'app-tests-departments',
  templateUrl: './tests-departments.component.html',
  styleUrls: ['./tests-departments.component.css']
})
export class TestsDepartmentsComponent implements OnInit {

  constructor(private testservice:TestService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.deptId=this.ActivatedRoute.snapshot.paramMap.get("id");

    this.testservice.getTests().subscribe((d:any[])=>{
      this.tests=d;
      // console.log(d);
    this.testdepts();

    });
  }
tests=[];
testdept=[];
deptId;
  // 
  testdepts(){
for(let element of this.tests) {
  // console.log(element);
  if(element.Dep_fk==this.deptId)
  {
    // console.log(element.dep_Id);
    this.testdept.push(element);
  }
};
  }
}
