import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
  }
  job_Id
  jobs=["kd","fd"];
  getJobId(e){
// job_Id
console.log("success");
  }
  godiv(){
    // this.router.navigate([''], { fragment: 'services' });
  }
}
