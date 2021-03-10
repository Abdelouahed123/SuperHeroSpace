import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = '';
  // roles : string[] = new Array();
  constructor(private KeycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
    // try {
    //   let userDetails = this.KeycloakService.getKeycloakInstance().tokenParsed["userDetails"];
    // } catch (e){
    //   console.log('Failed to load user details', e);
    // }
  }

  private initializeUserOptions(): void {
    this.user = this.KeycloakService.getUsername();
    // this.roles = this.KeycloakService.getUserRoles();
  }

  logout() : void {
    this.KeycloakService.logout('http://localhost:4200/');
  }

}
