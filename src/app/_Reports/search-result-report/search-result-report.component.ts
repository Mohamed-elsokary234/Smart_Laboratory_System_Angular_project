import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PatientserviceService} from '../../services/patientservice.service';
import {Router} from "@angular/router";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-search-result-report',
  templateUrl: './search-result-report.component.html',
  styleUrls: ['./search-result-report.component.css'],
  providers: [PatientserviceService]
})
export class SearchResultReportComponent implements OnInit {
  title = 'Result Search For Specific Patient';
  viewerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginLeft:'250px',
    marginTop:'20px',
    ['font-family']: 'ms sans serif'};
  searchTerm: FormControl = new FormControl();
  mypatients = [] as any;
  userClaims: any;
  constructor(private router: Router, public userService: UserService,private service: PatientserviceService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

    });
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            data => {
              this.mypatients = data as any[];
              console.log(data[0].pat_f_name);
            });
        }
      });
  }
}
