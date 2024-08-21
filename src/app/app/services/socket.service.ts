import { EventEmitter, Injectable, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../environments/environment';

@Injectable()
export class SocketMasterService extends Socket {

  @Output() outEven: EventEmitter<any> = new EventEmitter();

  constructor() {
    super({
      url: environment.apiSocket,
      options: {
        query: {
          nameRoom: "MKT"
        }
      }
    });

    this.listenFromClient();
  }

  listenFromClient() {
    this.ioSocket.on('connection', (res: any) => {
      this.outEven.emit(res);
    });
  }

}
