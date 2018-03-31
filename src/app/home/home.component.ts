import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/global-data.service';
import { AuthenticationService } from '../services/authentication-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  routeLinks: any[];
  activeLinkIndex = -1;
  user = this.globalData.user;

  click() {
    this.authService.clearCredentials();
    this.router.navigate(['/']);
  }

  constructor(private router: Router, private globalData: DataService, private authService: AuthenticationService) {


  }
}




