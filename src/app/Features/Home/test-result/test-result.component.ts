import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { ResultService } from 'src/app/_Services/_Result/result.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

  constructor(private ResultService:ResultService) { }

  ngOnInit(): void {
    this.ResultService.getResults().subscribe(d=>this.results=d);
    // 

    // 
  }
  results;
}
