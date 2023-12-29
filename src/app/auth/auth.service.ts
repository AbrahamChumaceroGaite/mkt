import { Injectable, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
  nombre: string;
  rol: string;
  idrol: string;
  iduser: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loginSuccessEvent: EventEmitter<void> = new EventEmitter<void>();
  private api = environment.apiUrl; 
  titulo: string = '';
  icon: string = '';
  userPermissions: any;
  constructor(private http: HttpClient, private router: Router) { }

  login(body: any): Observable<any> {
    const url = `${this.api}/login/access`;
  
    return this.http.post<LoginResponse>(url, body).pipe(
      tap(res => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('iduser', res.iduser);
        sessionStorage.setItem('nombre', res.nombre);
        const id =  res.iduser
        this.router.navigate(['/lobby']);
        this.loginSuccessEvent.emit();
      /*   this.getPermissions(id); */
      })
    );
  }

/*   getPermissions(id: any){
    this.AccesService.getPermissions(id).subscribe((data: any) => {
      sessionStorage.setItem('pageaccess', JSON.stringify(data));
      this.router.navigate(['/home']);
    }, (error: any) => {
      console.log(error);
      this.MessagesService.showFailedAccess();
    });
  } */

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('iduser');
    sessionStorage.removeItem('name');
    this.router.navigate(['/lobby']);
  }
/* 
  getUserPermissions() {
    const permisosString = sessionStorage.getItem('pageaccess');
    this.userPermissions = permisosString ? JSON.parse(permisosString) : null;
    // Verifica si permisosString es null y proporciona un valor predeterminado si es así
    return permisosString ? JSON.parse(permisosString) : null;
  }

  hasPermission(componentId: string, action: string): boolean {
    return this.userPermissions.some(
      (permission:any) => permission.idcomponente == componentId && permission[action] === 1
    );
  } */
  
  getIdUser(): any {
    const idUser = sessionStorage.getItem('iduser');
    return idUser !== null ? idUser : '';
  }

  getUsername(): string {
    const username = sessionStorage.getItem('nombre');
    return username !== null ? username : '';
  }

  getRol(): string {
    const rol = sessionStorage.getItem('rol');
    return rol !== null ? rol : '';
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !!token; 
  }

}
