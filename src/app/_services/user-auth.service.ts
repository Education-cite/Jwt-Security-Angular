import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  constructor() { }

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }


  public getRoles(): any[] {
    const rolesString = localStorage.getItem('roles');
    if (rolesString !== null) {
      return JSON.parse(rolesString);
    }
    return [];
  }
  



  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    const token = localStorage.getItem('jwtToken');
    if (token !== null) {
      return token;
    }
    return '';
  }
  

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  public isAdmin() {
    const roles:any[]= this.getRoles();
    return roles[0].roleName ==="Admin"
  }

  public isUser() {
    const roles:any[]= this.getRoles();
    return roles[0].roleName ==="User"
  }
}
