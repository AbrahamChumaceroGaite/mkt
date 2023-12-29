import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  apiUrl: string = environment.apiUrl + '/person';
  constructor(private httpClient: HttpClient) { }
  
  getPerson() {
    return this.httpClient.get<any[]>(
      this.apiUrl + '/get'
    );
  }

  getPersonById(id: number) {
    return this.httpClient.get<any[]>(
      this.apiUrl + '/getById/' + id
    );
  }

  postPerson(body: any) {
    return this.httpClient
      .post(this.apiUrl + '/post', body)
      .pipe(map((response: any) => response.mensaje));
  }


  deletePerson(id: number) {
    return this.httpClient.delete(
      this.apiUrl + '/delete/' + id
    );
  }
}
