import {Component, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
    moduleId: module.id,
    selector: 'app-tab1',
    templateUrl: './tab1.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class Tab1Component {

  constructor(private http: HttpClient) { }
  clients = [];

  click() {
    this.http.get(environment.host + environment.port + environment.subdomain + 'clients').toPromise()
      .then(
      (res : Array<String>) => { // Success     
        this.clients = res;
      });
  }
}

