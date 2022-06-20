import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  
  items: MenuItem[]=[];

  ngOnInit() {
      this.items = [
          {
              label:'Accueil',
              icon:'pi pi-fw pi-qrcode',
              routerLink:'/home',
          },
          {
              label:'Jeunesse',
              icon:'pi pi-fw pi-users',
              routerLink:'/jeunesse',
          },
          {
              label:'Dortoirs',
              icon:'pi pi-fw pi-moon',
              routerLink:'/dortoir',
          },
      ];
  }

}
