import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  moduleId: module.id,
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Tab3Component {

  constructor(private http: HttpClient) { }
  clients = [];
  clientName;

  click() {
    this.http.get(environment.host + environment.port + environment.subdomain + 'clientByname/' + this.clientName).toPromise()
      .then(
      (res : Array<String>) => { 
        this.clients = [];

        if (res.length ==0) {
          Swal("Client not found", "Client with name: " + this.clientName + " not found. Try with a new name", "info");
        }
        else {
          this.clients = res;
        }
      });
  }
}
