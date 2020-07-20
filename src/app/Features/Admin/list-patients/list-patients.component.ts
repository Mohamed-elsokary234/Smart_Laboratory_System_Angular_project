import { Component, OnInit } from '@angular/core';
import {patient}from '../../../_Models/patient';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {debounceTime} from 'rxjs/internal/operators/debounceTime';
import {PatientserviceService} from '../../../services/patientservice.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  // viewerContainerStyle = {
  //   position: 'relative',
  //   width: '100%',
  //   height: '100%',
  //   marginLeft:'230px',
  //   marginTop:'100px',
  //   ['font-family']: 'ms sans serif'};
  searchTerm: FormControl = new FormControl();


  searchedKeyword: string;
  constructor(private service: PatientserviceService) { }

  collection = { count:5, data: [] };

  ngOnInit(): void {
    //this.patientser.getpatients().subscribe(p=>this.collection.data=p);
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            d => {
              this.collection.data = d  as any[];

            });
        }
      });
  }
  /*PatientSearch(){
  this.searchTerm.valueChanges.subscribe(
    term => {
      if (term != '') {
        this.patientser.search(term).subscribe(
          d => {
            this.collection.data = d  as any[];
            //console.log(data[0].pat_f_name);
          });
      }
    });

}*/
config = {
  itemsPerPage:4,
  currentPage: 1,
  totalItems: this.collection.data.length
};
pageChanged(event){
  this.config.currentPage = event;

}
}
