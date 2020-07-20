import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/_Models/department';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  // userId:number;
  constructor(private departmentService:DepartmentService,private route: ActivatedRoute) {
  // let userId;
    // this.route.paramMap.subscribe((params: Params) => {
      // userId = +params.get('form');
      // this.userId= +this.route.snapshot.paramMap.get('form');
      // console.log("id"+this.userId);
    // });
    // this.userId= +this.route.snapshot.paramMap.get(" dept.dep_Id");
    // console.log("id");
    // console.log("id" + this.userId);
  }

  ngOnInit(): void {
    // console.log("id-----------------");
    this.getDepartment();
// this.dept.setValue=this.oldDept[0].dep_name;
    // this.userId= +this.route.snapshot.paramMap.get('form');
    // console.log(+this.route.snapshot.paramMap.get("dept.dep_Id"));
    // this.id=this._Activatedroute.snapshot.paramMap.get("id");‏
  }
  form=new FormGroup({
    Dept:new FormControl('',Validators.required)
  });
get dept(){
  return this.form.get('Dept');
}

getDepartment(){
  let id = +this.route.snapshot.paramMap.get("id");
this.departmentService.getDepartment(id).subscribe(d=>{
    this.oldDept=d;
    console.log(this.oldDept);
});
// this.Dept_Name=this.oldDept.;
}
oldDept;
  // Id:number;
  Dept_Name:string;

  deptobj:department;
  result;
  editDepartment(){
    console.log("id-----------------");

    let id = +this.route.snapshot.paramMap.get("id");
console.log(id);
 this.deptobj=new department(id,this.Dept_Name);

 this.result=this.departmentService.editDepartment(id,this.deptobj);
console.log(this.result);
  }
}
