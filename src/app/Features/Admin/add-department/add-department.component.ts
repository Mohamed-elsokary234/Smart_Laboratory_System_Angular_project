import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/_Models/department';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor( private departmentService:DepartmentService) { }

  ngOnInit(): void {
    // this.addDepartment();
  }
  // 
  form=new FormGroup({
    Dept:new FormControl('',Validators.required)
  });
get dept(){
  return this.form.get('Dept');
}
  
// = this.form.get('Dept').get.toString();
   Id:number;
   Name:string ;
  //  
  dept1:department;
  addDepartment(){
 this.dept1=new department(this.Id,this.Name);
    
     this.departmentService.addDepartment(this.dept1);

  }

}
