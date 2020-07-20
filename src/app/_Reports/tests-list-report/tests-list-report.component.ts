import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tests-list-report',
  templateUrl: './tests-list-report.component.html',
  styleUrls: ['./tests-list-report.component.css']
})
export class TestsListReportComponent implements OnInit {
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
