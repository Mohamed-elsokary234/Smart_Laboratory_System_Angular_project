import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { JobService } from 'src/app/_Services/_Job/job.service';
import { job } from 'src/app/_Models/job';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  constructor(private jobser:JobService,private router:Router,private ActivatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.jobId=+this.ActivatedRoute.snapshot.paramMap.get("id");
    this.jobser.getJob(this.jobId).subscribe(d=>this.oldJob=d);
  }
  // job:job=new job(null,"","");
  form=new FormGroup({
    // job_Id:new FormControl('',Validators.required),
    job_name:new FormControl('',Validators.required),
    job_discription:new FormControl('',Validators.required),
    
  });
  // get JobId()
  // {
  //   return this.form.get('job_Id');
  // }
  get jobName()
  {
    return this.form.get('job_name');
  }
  get jobDiscription()
  {
    return this.form.get('job_discription');
  }
// 
oldJob;
  // 
 public jobId:number;//this.JobId.value;
public jobname:string;//this.jobName.value;
public Discription:string;///this.jobDiscription.value;
job:job;
//edit job
editJob()
{

 this.job=new job(this.jobId,this.jobname,this.Discription);
    
 this.jobser.editJob(this.jobId,this.job);
  
 // this.jobser.editJob(this.job).subscribe();
  this.router.navigateByUrl("/admin/ListJob");
}



}
