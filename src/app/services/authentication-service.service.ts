import { Injectable } from '@angular/core';
import { DataService } from './global-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private globalData: DataService) {
  }

  host: string = environment.host;
  port: string = environment.port;
  subdomain: string = environment.subdomain;
 
  getToken(username, password, callback, errorCallback) {
    const body = "username=" + username + "&password=" + password+"&grant_type=password";
    this.http.post(this.host + this.port + 'token', body).toPromise()
      .then(
      res => { // Success
        callback(res);
      })
      .catch(
      err => {
        errorCallback(err);
      });
  }

  setCredentials = function (user, token) {
    this.globalData.authdata = token;
    this.globalData.user = user;
  };

    
  clearCredentials = function () {
    this.globalData.authdata = "";
    this.globalData.user = "";
  };
}
