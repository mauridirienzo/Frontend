import {Component, ViewEncapsulation} from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
    moduleId: module.id,
    selector: 'app-tab5',
    templateUrl: './tab5.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class Tab5Component {

  constructor(private http: HttpClient) { }
  policy: any;
  client: any;

  click() {
    this.http.get(environment.host + environment.port + environment.subdomain + 'clientPolicy/' + this.policy).toPromise()
      .then(
      (res: Array<String>) => { // Success     
        if (res == null) {
          Swal("Client not found", "Client with policy " + this.policy + " not found. Try with a new one", "info");
        }
        else {
          this.client = res;
        }
      });
  }
}



