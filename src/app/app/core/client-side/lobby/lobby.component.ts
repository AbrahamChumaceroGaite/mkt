import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { DialogService } from 'primeng/dynamicdialog';
import { AddComponent } from '../add/add.component';
import { SocketMasterService } from '../../../services/socket.service';
import { TicketService } from '../service/ticket.service';
import { ColaService } from '../../admin-side/service/cola.service';
import { SoundService } from '../../../services/sound.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {
  colas: any[] = [];
  onWaitList: any[] = [];
  totalTickets: number = 0;
  loading = false;
  changingColor: boolean = false;
  // Lista de videos y índice actual
  videos: string[] = ['assets/media/demo.mp4', 'assets/media/demo2.mp4'];
  currentVideoIndex: number = 0;
  currentVideo: string = this.videos[this.currentVideoIndex];


  constructor(
    private dialogService: DialogService,
    private socketService: SocketMasterService,
    private ticketService: TicketService,
    private soundService: SoundService,
    private ColaService: ColaService,
    public AuthService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.getTickets();
    this.getcolas();
    this.socketService.on('lobby', (res: any) => {
      this.loading = true;
      this.getTickets();
    });
    this.socketService.on('cola', (res: any) => {
      this.loading = true;
      this.getcolas();
      const soundUrl = '../../../../assets/media/sfx.mp3'; 
      this.soundService.playSound(soundUrl);

      this.changingColor = true;

      setTimeout(() => {
        this.changingColor = false;
        // Forzar la actualización de la vista
        this.cdr.detectChanges();
      }, 3000); // Cambia a false después de 3 segundos
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

  getcolas() {
    this.ColaService.getCola().subscribe((res: any) => {
      this.colas = res
    })
  }

  getTickets() {
    this.ticketService.getTickets().subscribe((res: any) => {
      this.onWaitList = res
      this.totalTickets = this.onWaitList.length;
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

  addPerson() {
    const ref = this.dialogService.open(AddComponent, {
      header: 'Agregar Nueva Persona',
      styleClass: 'form-dialog',
      maximizable: true,
    });
  }

  onVideoEnded(videoPlayer: HTMLVideoElement): void {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
    this.currentVideo = this.videos[this.currentVideoIndex];
    
    // Actualiza el src del video y vuelve a cargar
    const videoSource = videoPlayer.querySelector('source');
    if (videoSource) {
      videoSource.src = this.currentVideo;
      videoPlayer.load();  // Recarga el video con la nueva fuente
      videoPlayer.play();  // Inicia la reproducción
    }
  }
}
