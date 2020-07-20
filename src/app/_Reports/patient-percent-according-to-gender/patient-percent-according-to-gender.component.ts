import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-percent-according-to-gender',
  templateUrl: './patient-percent-according-to-gender.component.html',
  styleUrls: ['./patient-percent-according-to-gender.component.css']
})
export class PatientPercentAccordingToGenderComponent implements OnInit {
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
