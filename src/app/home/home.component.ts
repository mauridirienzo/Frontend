import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/global-data.service';
import { AuthenticationService } from '../services/authentication-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;
  user = this.globalData.user;
  
  click() {
    this.authService.clearCredentials();
    this.router.navigate(['/']);
  }
  

  constructor(private router: Router, private globalData: DataService, private authService: AuthenticationService) {

    this.routeLinks = [
      {
        label: 'Get all clients',
        link: 'tab1',
        index: 0
      }, {
        label: 'Get client by id',
        link: './tab2',
        index: 1
      }, {
        label: 'Client by name',
        link: './tab3',
        index: 2
      }, {
        label: 'Policy by client name',
        link: './tab4',
        index: 3
      }, {
        label: 'Client by policy id',
        link: './tab5',
        index: 4
      }
    ];
  }


  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  getActiveClass(indexOfRouteLink) {
    let tabsclass = 'mat-tab-link';
    if (this.activeLinkIndex === indexOfRouteLink) {
      tabsclass = 'mat-tab-link mat-tab-label-active';
    }

    return tabsclass;
  }
}




