import { Component, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/global-data.service';
import { AuthenticationService } from '../services/authentication-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router, private http: HttpClient, private globalData: DataService, private authService: AuthenticationService) { }

  public username: string = "";
  public password: string = "";
  public error: string = "";;
  dataLoading;
  

  login() {
    this.dataLoading = true;
    this.authService.clearCredentials();
    this.authService.getToken(this.username, this.password,
      (res) => {
        this.dataLoading = false;
        this.authService.setCredentials(this.username, res.access_token);
        this.router.navigate(['/home']);
    },

      (err) => {
      this.dataLoading = false;
      this.error = err.error_description;                
    });
  }
}


