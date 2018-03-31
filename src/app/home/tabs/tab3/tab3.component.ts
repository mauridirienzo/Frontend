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
  clients: any;
  client: any;
  name;

  click() {
    this.http.get(environment.host + environment.port + environment.subdomain + 'clientByname/' + this.name).toPromise()
      .then(
      res => { // Success
        this.clients = [];

        if (res == null) {
          Swal("Client not found", "Client with name: " + this.name + " not found. Try with a new name", "info");
        }
        else {
          this.clients = res;
        }
      });
  }
}
