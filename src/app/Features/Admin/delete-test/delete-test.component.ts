import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css']
})
export class DeleteTestComponent implements OnInit {

  constructor(private testservice:TestService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.testId=this.ActivatedRoute.snapshot.paramMap.get("id");
    this.testservice.getTest(this.testId).subscribe(d=>this.test=d);
  }
  test;
  Result
  testId:any;
  Deletetest(){
    this.Result=this.testservice.deleteTest(this.testId);
    console.log(this.Result);
  }
}
