import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PatientserviceService} from '../../services/patientservice.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css'],
  providers: [PatientserviceService]
})
export class TestReportComponent implements OnInit {
  title = 'Test Search For Specific Patient';
  viewerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginLeft:'250px',
    marginTop:'20px',
    ['font-family']: 'ms sans serif'};
  searchTerm: FormControl = new FormControl();
  mypatients  = <any>[];
  //filteredOptions: Observable<string[]>;
  constructor(private service: PatientserviceService) { }

  ngOnInit() {
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            data => {
              this.mypatients = data as any[];
              console.log(data[0].pat_f_name);
              console.log(data[0].pat_Id);
            });
        }
      });

  //   this.filteredOptions = this.searchTerm.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value))
  //   );
  // }
  //
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.mypatients.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  //
   }
}
