import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TicketService {

  apiUrl: string = environment.apiUrl + '/ticket';
  constructor(private httpClient: HttpClient) {}

  getTickets() {
    return this.httpClient.get(
      this.apiUrl + '/get'
    );
  }

  getTicketById(id: number) {
    return this.httpClient.get(
      this.apiUrl + '/getById/' + id
    );
  }

  postTicket(body: any) {
    return this.httpClient
      .post(this.apiUrl + '/post', body)
      .pipe(map((response: any) => response.mensaje));
  }

  deleteTicket(id: any) {
    return this.httpClient.delete(
      this.apiUrl + '/delete/' + id
    );
  }
}
