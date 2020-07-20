import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-build-reports',
  templateUrl: './all-build-reports.component.html',
  styleUrls: ['./all-build-reports.component.css']
})
export class AllBuildReportsComponent implements OnInit {
  viewerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginLeft:'230px',
    marginTop:'100px',
    ['font-family']: 'ms sans serif'};
  constructor() { }

  ngOnInit(): void {
  }

}
