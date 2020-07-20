import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  userClaims: any;

  constructor(private router: Router, public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

    });
  }

  }
