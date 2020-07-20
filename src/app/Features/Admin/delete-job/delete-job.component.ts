import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/_Services/_Job/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.css']
})
export class DeleteJobComponent implements OnInit {

  constructor(private jobservice:JobService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.jobId = +this.ActivatedRoute.snapshot.paramMap.get("id");

    this.jobservice.getJob(this.jobId).subscribe(d=>this.jobObj=d);
  }
  Result
  jobObj;
  jobId:any;
  DeleteJob(){
    this.Result=this.jobservice.deleteJob(this.jobId);
    console.log(this.Result);
  }

}
