import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  moduleId: module.id,
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Tab4Component {

  constructor(private http: HttpClient) { }
  clients: any;
  clientName;
  policies: any;

  click() {
    this.http.get(environment.host + environment.port + environment.subdomain + 'policies/' + this.clientName).toPromise()
      .then(
      (res : Array <String>)=> { // Success     
        if (res.length ==0 ) {
          Swal("Policy not found", "Policies for " + this.clientName + " not found. Try with a new name", "info");
        }
        else {
          this.policies = res;
          }
      });
  }
}
