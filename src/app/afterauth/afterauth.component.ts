import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-afterauth',
  templateUrl: './afterauth.component.html',
  styleUrls: ['./afterauth.component.css']
})
export class AfterauthComponent implements OnInit {
  userClaims: any;

  constructor(private router: Router, public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

    });

    if (this.userService.roleMatch(['Author'])) {
      //do the operation
    }
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }


}
