import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';
import { department } from 'src/app/_Models/department';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  constructor(private departmentservice:DepartmentService) { }
  searchedKeyword: string;
  collection:any = { count:5, data: [] };

  ngOnInit(): void {
  this.ListDepartment();
  }
  listDepartments:any;
  
  ListDepartment(){
      this.departmentservice.getAllDepartments().subscribe(a=>{
      this.collection.data=a;
      console.log( this.collection.data);
      // alert("ok");
    });
  }
  config = {
    itemsPerPage:4,
    currentPage: 1,
    totalItems: this.collection.data.length
  };
  pageChanged(event){
    this.config.currentPage = event;
  
  }
}
