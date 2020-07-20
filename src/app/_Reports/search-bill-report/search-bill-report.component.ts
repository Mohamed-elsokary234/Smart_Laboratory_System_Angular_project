import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PatientserviceService} from '../../services/patientservice.service';
import {Router} from "@angular/router";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-search-bill-report',
  templateUrl: './search-bill-report.component.html',
  styleUrls: ['./search-bill-report.component.css'],
  providers: [PatientserviceService]
})
export class SearchBillReportComponent implements OnInit {
  title = 'Bill Search For Specific Patient';
  viewerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginLeft:'250px',
    marginTop:'20px',
    ['font-family']: 'ms sans serif'};
  searchTerm: FormControl = new FormControl();
  mypatients = [] as any;

  constructor(private service: PatientserviceService) { }

  ngOnInit() {

    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            data => {
              this.mypatients = data as any[];
              //console.log(data[0].pat_f_name);
            });
        }
      });
  }
}
