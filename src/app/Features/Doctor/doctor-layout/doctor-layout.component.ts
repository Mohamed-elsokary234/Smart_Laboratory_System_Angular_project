import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-doctor-layout',
  templateUrl: './doctor-layout.component.html',
  styleUrls: ['./doctor-layout.component.css']
})
export class DoctorLayoutComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  profile()
  {
    this.router.navigate(['DoctorProfile'],{relativeTo:this.route});

  }
  ngOnInit(): void {
  }

}
