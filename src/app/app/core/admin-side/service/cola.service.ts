import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaService {

  apiUrl: string = environment.apiUrl + '/cola';
  constructor(private httpClient: HttpClient) {}

  getCola() {
    return this.httpClient.get(
      this.apiUrl + '/get'
    );
  }

  getColatByIdUser(id: number) {
    return this.httpClient.get(
      this.apiUrl + '/getByIdUser/' + id
    );
  }

  
  postCola(body: any) {
    return this.httpClient
      .post(this.apiUrl + '/post', body)
      .pipe(map((response: any) => response.mensaje));
  }




}
