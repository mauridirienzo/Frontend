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
  name;
  policies: any;

  click() {
    this.http.get(environment.host + environment.port + environment.subdomain + 'policies/' + this.name).toPromise()
      .then(
      res => { // Success     
        if (res == null) {
          Swal("Policy not found", "Policies for " + name + " not found. Try with a new name", "info");
        }
        else {
          this.policies = res;
        }
      });
  }
}
