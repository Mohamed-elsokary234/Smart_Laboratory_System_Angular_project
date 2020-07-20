import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent implements OnInit {


  constructor(private departmentsservice:DepartmentService, private Route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
this.getDepartment();
  // this.Deletedepartment();
  }
  // form=new FormGroup({
  //   empl_Id:new FormControl('',Validators.required),
  // });
  // get Empl_Id(){
  //   return this.form.get( 'empl_Id');
  // }
  department;
  getDepartment(){
 this.deptId =+this.Route.snapshot.paramMap.get("id");
    this.departmentsservice.getDepartment(this.deptId).subscribe(d=>{
        this.department=d;
    })
  }

  Result
  deptId:number;
  Deletedepartment(){
console.log(this.deptId);
    this.Result=this.departmentsservice.deleteDepartment(this.deptId);
    console.log(this.Result);
    this.router.navigateByUrl("/listdepartment");
  }
}
