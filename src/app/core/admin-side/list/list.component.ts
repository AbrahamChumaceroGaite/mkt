import { ConfirmService } from './../../../services/confirm.service';
import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ColaService } from '../service/cola.service';
import { TicketService } from '../../client-side/service/ticket.service';
import { SocketMasterService } from 'src/app/services/socket.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  loading: boolean = false;
  totalTickets: number = 0;
  onWaitList: any[] = [];
  cola: any = [];

  constructor(
    private AuthService: AuthService,
    private ConfirmService: ConfirmService,
    private colaService: ColaService,
    private ticketService: TicketService,
    private socketService: SocketMasterService,
  ) {
    this.getTickets();
    this.getCola();
    this.socketService.on('lobby', (res: any) => {
      this.loading = true;
      this.getTickets();
    });

  }

  ngOnit(): void {
    this.conectSocket();
    this.socketService.on('disconnect', () => {

    });
  }

  conectSocket() {
    this.socketService.on('connection', (res: any) => {

    });
  }

  getTickets() {
    this.ticketService.getTickets().subscribe((res: any) => {
      this.onWaitList = res
      this.totalTickets = this.onWaitList.length;
      this.loading = false;
    })
  }

  getCola() {
    const id = this.AuthService.getIdUser()
    this.colaService.getColatByIdUser(id).subscribe((res: any) => {
      this.cola = res;
      console.log(this.cola)
    })
  }

  getIcon(prioridad: string): string {
    if (prioridad == '1') {
      return 'bx bxs-user'
    } else if (prioridad == '2') {
      return 'bx bx-child';
    } else if (prioridad == '3') {
      return 'bx bxs-baby-carriage';
    } else if (prioridad == '4') {
      return 'bx bx-handicap';
    } else {
      return 'bx bx-male';
    }
  }

  getText(tipo_atencion: string, id: string): string {
    if (tipo_atencion == '1') {
      return 'INF-' + id.toString();
    } else if (tipo_atencion == '2') {
      return 'INS-' + id.toString();
    } else {
      return '';
    }
  }

  getTypeAttetion(tipo_atencion: string): string {
    if (tipo_atencion == '1') {
      return 'Información';
    } else if (tipo_atencion == '2') {
      return 'Inscripción';
    } else {
      return '';
    }
  }

  getRepresetant(representante: string): string {
    if (representante == '1') {
      return 'Padre';
    } else if (representante == '2') {
      return 'Madre';
    } else if (representante == '3') {
      return 'Estudiante';
    } else if (representante == '4') {
      return 'Estudiante';
    }else {
      return '';
    }
  }

  getCarrera(carrera: string): string {
    if (carrera == 'ADM') {
      return 'Administración de Empresas';
    } else if (carrera == 'IC') {
      return 'Ingeniería Comercial';
    } else if (carrera == 'IF') {
      return 'Ingeniería Financiera';
    } else if (carrera == 'ICV') {
      return 'Ingeniería Civil';
    } else if (carrera == 'IB') {
      return 'Ingeniería Biomédica';
    } else if (carrera == 'IS') {
      return 'Ingeniería de Sistemas';
    } else if (carrera == 'IM') {
      return 'Ingeniería Mecatrónica';
    } else if (carrera == 'IE') {
      return 'Ingeniería de Energía';
    } else if (carrera == 'IA') {
      return 'Ingeniería de Ambiental';
    } else if (carrera == 'II') {
      return 'Ingeniería de Industrial';
    } else if (carrera == 'MM') {
      return 'Marketing y Medios Digitales';
    } else if (carrera == 'ARQ') {
      return 'Arquitectura';
    } else if (carrera == 'DG') {
      return 'Diseño Gráfico y Comunicación Visual';
    } else if (carrera == 'CS') {
      return 'Comunicación Social';
    } else {
      return '';
    }
  }

  openDialog(item: any, idticket?: number) {
    this.ConfirmService.opneDialog(item).then((res) => {
      if (res == 'Confirmed') {    
        const body = {
          idusuario : this.AuthService.getIdUser(),
          idticket: idticket          
        }
        this.loading = true
        this.colaService.postCola(body).subscribe((res: any) => {
          this.loading = false
          this.getCola();
        }, (err)=>{
          this.loading = false
        });
      }
    });
  }

  deleteDialog(item: any, idticket?: number) {
    this.ConfirmService.deleteDialog(item).then((res) => {
      if (res == 'Confirmed') {    
        const body = {
          idusuario : this.AuthService.getIdUser(),
          idticket: idticket          
        }
        this.loading = true
        this.ticketService.deleteTicket(idticket).subscribe((res: any) => {
          this.loading = false
          this.getCola();
        }, (err)=>{
          this.loading = false
        });
      }
    });
  }
}
