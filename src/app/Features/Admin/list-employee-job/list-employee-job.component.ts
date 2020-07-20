import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/_Services/_Job/job.service';

@Component({
  selector: 'app-list-employee-job',
  templateUrl: './list-employee-job.component.html',
  styleUrls: ['./list-employee-job.component.css']
})
export class ListEmployeeJobComponent implements OnInit {

  constructor(private  jobservice:JobService) { }

  ngOnInit(): void {
    this.jobservice.getJobs().subscribe((d:any[])=>this.jobs=d);
  }

    jobs=[];
}
