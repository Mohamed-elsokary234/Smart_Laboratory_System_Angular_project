import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-percent-according-to-date',
  templateUrl: './patient-percent-according-to-date.component.html',
  styleUrls: ['./patient-percent-according-to-date.component.css']
})
export class PatientPercentAccordingToDateComponent implements OnInit {
  viewerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginLeft:'250px',
    marginTop:'20px',
    ['font-family']: 'ms sans serif'};
  constructor() { }

  ngOnInit(): void {
  }

}
