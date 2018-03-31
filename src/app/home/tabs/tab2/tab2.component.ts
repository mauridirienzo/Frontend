import {Component, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  moduleId: module.id,
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Tab2Component {

  constructor(private http: HttpClient) { }

  client_id;
  client;

  click() {
    this.http.get(environment.host + environment.port + environment.subdomain + 'clientByid/' + this.client_id).toPromise()
      .then(
      res => { // Success
        this.client = null;

        if (res == null) {
          Swal("Client not found", "Client with id " + this.client_id + " not found. Try with a new id", "info");
        } else {
          this.client = res;
        }
      });
  }
}
