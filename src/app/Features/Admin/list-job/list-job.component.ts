import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/_Services/_Job/job.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  constructor(private jobservice:JobService) { }

  ngOnInit(): void {
    this.Listjobs();
  }
  
  listjobs=[];

  Listjobs(){
      this.jobservice.getJobs().subscribe((a:any[])=>{
      this.listjobs=a;
      console.log( this.listjobs);
      // alert("ok");
    });
}
// end
}
