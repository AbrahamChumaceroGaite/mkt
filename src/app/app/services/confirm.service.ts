import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})

export class ConfirmService {
    message!: string;
    //Genericos
    

    public editDialog(item: any) {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title: '¿Confirmar cambios para ' + item + '?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Confirmar',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                reverseButtons: false
            }).then((result: any) => {
                if (result.value) {
                    resolve('Confirmed');
                } else {
                    resolve('Not Confirmed');
                    Swal.fire(
                        'CANCELADO',
                        'No se avanza al siguinte ticket :)',
                        'error'
                    )
                }
            });
        });
    }

    public deleteDialog(item: any) {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title: '¿Saltar Ticket de ' + item + '?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Confirmar',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                reverseButtons: false
            }).then((result:any) => {
                if (result.value) {
                    resolve('Confirmed');
                } else {
                    resolve('Not Confirmed');
                    Swal.fire(
                        'CANCELADO',
                        'No se realizaron cambios :)',
                        'error'
                    )
                }
            });
        });
    }

    public opneDialog(item: any) {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title: '¿Continuar con Ticket de ' + item + '?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3383B2',
                confirmButtonText: 'Abrir',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No',
                reverseButtons: false
            }).then((result:any) => {
                if (result.value) {
                    resolve('Confirmed');
                } else {
                    resolve('Not Confirmed');
                }
            });
        });
    }

    public DialogloginFailed() {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title: 'Su sesión ha caducado',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ingresar de nuevo',
            }).then((result: any) => {
                if (result.value) {
                    resolve('Confirmed');
                }  else {
                    resolve('Not Confirmed');
                }
            });
        });
    }


}